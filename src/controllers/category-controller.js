import { db } from "../models/db.js";
import { PoiSpec } from "../models/joi-schemas.js";

export const categoryController = {
  index: {
    handler: async function (request, h) {
      const category = await db.categoryStore.getCategoryById(request.params.id);
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
        const category = await db.categoryStore.getCategoryById(request.params.id);
        return h.view("category-view", { title: "Add Point of Interest error", errors: error.details, category: category }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const category = await db.categoryStore.getCategoryById(request.params.id);
      const newPoi = {
        name: request.payload.name,
        description: request.payload.description,
        latitude: Number(request.payload.latitude),
        longitude: Number(request.payload.longitude),
      };
      await db.poiStore.addPoi(category._id, newPoi);
      return h.redirect(`/category/${category._id}`);
    },
  },

  update: {
    validate: {
      payload: PoiSpec,
      options: { abortEarly: false },
      failAction: async function (request, h, error) {
        const category = await db.categoryStore.getCategoryById(request.params.id);
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
};
