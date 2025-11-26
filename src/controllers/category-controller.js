import { db } from "../models/db.js";
import { PoiSpec } from "../models/joi-schemas.js";
import { imageStore } from "../models/image-store.js";

export const categoryController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const category = await db.categoryStore.getCategoryById(request.params.id, loggedInUser._id);
      const viewData = {
        title: "Category",
        category: category,
      };
      return h.view("category-view", viewData);
    },
  },

  addPoi: {
    validate: {
      payload: PoiSpec,
      options: { abortEarly: false },
      failAction: async function (request, h, error) {
        const loggedInUser = request.auth.credentials;
        const category = await db.categoryStore.getCategoryById(request.params.id, loggedInUser._id);
        return h.view("category-view", { title: "Add Point of Interest error", errors: error.details, category: category }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const category = await db.categoryStore.getCategoryById(request.params.id, loggedInUser._id);
      const newPoi = {
        name: request.payload.name,
        description: request.payload.description,
        latitude: Number(request.payload.latitude),
        longitude: Number(request.payload.longitude),
      };
      // static check for private POIs: if yes, add userid to the newly created POI
      if (category.name === "Private Points of Interest") {
        newPoi.userid = loggedInUser._id;
      }
      await db.poiStore.addPoi(category._id, newPoi);
      return h.redirect(`/category/${category._id}`);
    },
  },

  update: {
    validate: {
      payload: PoiSpec,
      options: { abortEarly: false },
      failAction: async function (request, h, error) {
        const loggedInUser = request.auth.credentials;
        const category = await db.categoryStore.getCategoryById(request.params.id, loggedInUser._id);
        return h.view("category-view", { title: "Edit Point of Interest error", errors: error.details, category: category }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const poi = await db.poiStore.getPoiById(request.params.id);
      const newPoi = {
        name: request.payload.name,
        description: request.payload.description,
        latitude: Number(request.payload.latitude),
        longitude: Number(request.payload.longitude),
      };
      await db.poiStore.updatePoi(poi, newPoi);
      return h.redirect(`/category/${request.params.catid}`);
    },
  },

  deletePoi: {
    handler: async function (request, h) {
      const poiId = request.params.id;
      await db.poiStore.deletePoiById(poiId);
      return h.redirect(`/category/${request.params.catid}`);   
    }
  },

  uploadImage: {
    handler: async function (request, h) {
      try {
        const file = request.payload.imagefile;
        if (Object.keys(file).length > 0) {
          const url = await imageStore.uploadImage(request.payload.imagefile);
          await db.poiStore.updatePoiImg(request.params.id, url);
        }
        return h.redirect(`/category/${request.params.catid}`);
      } catch (err) {
        console.log(err);
        return h.redirect(`/category/${request.params.catid}`);
      }
    },
    payload: {
      multipart: true,
      output: "data",
      maxBytes: 209715200,
      parse: true,
    },
  },

  deleteImage: {
    handler: async function (request, h) {
      try {
        await imageStore.deleteImage(category.img);
        await db.poiStore.updatePoiImg(request.params.id, url);
        return h.redirect(`/category/${request.params.catid}`);
      } catch (err) {
        console.log(err);
        return h.redirect(`/category/${request.params.catid}`);
      }
    }
  }
};
