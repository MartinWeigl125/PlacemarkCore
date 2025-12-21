import Boom from "@hapi/boom";
import { db } from "../models/db.js";
import { IdSpec, PoiSpec, PoiSpecPlus, PoiAray, ImageSpec } from "../models/joi-schemas.js";
import { validationError } from "./logger.js";
import { imageStore } from "../models/image-store.js";

export const poiApi = {
  create: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const poi = await db.poiStore.addPoi(request.params.id, request.payload);
        if (poi) {
          return poi;
        }
        return Boom.badImplementation("error creating poi");
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Create a poi",
    notes: "Returns the newly created poi",
    validate: { params: { id: IdSpec }, payload: PoiSpec },
    response: { schema: PoiSpecPlus, failAction: validationError },
  },

  find: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const pois = await db.poiStore.getAllPois();
        return pois;
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    response: { schema: PoiAray, failAction: validationError },
    description: "Get all pois",
    notes: "Returns all pois",
  },

  findOne: {
    auth: {
      strategy: "jwt",
    },
    async handler(request) {
      try {
        const poi = await db.poiStore.getPoiById(request.params.id);
        if (!poi) {
          return Boom.notFound("No poi with this id");
        }
        return poi;
      } catch (err) {
        return Boom.serverUnavailable("No poi with this id");
      }
    },
    tags: ["api"],
    description: "Find a poi",
    notes: "Returns a poi",
    validate: { params: { id: IdSpec }, failAction: validationError },
    response: { schema: PoiSpecPlus, failAction: validationError },
  },

  update: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const poi = await db.poiStore.getPoiById(request.params.id);
        if (!poi) {
          return Boom.notFound("No poi with this id");
        }
        await db.poiStore.updatePoi(poi, request.payload);
        return await db.poiStore.getPoiById(request.params.id);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Update a poi",
    validate: { params: { id: IdSpec }, payload: PoiSpec, failAction: validationError },
  },

  delete: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const poi = await db.poiStore.getPoiById(request.params.id);
        if (!poi) {
          return Boom.notFound("No poi with this id");
        }
        await db.poiStore.deletePoiById(poi._id);
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("No poi with this id");
      }
    },
    tags: ["api"],
    description: "Delete a poi",
    validate: { params: { id: IdSpec }, failAction: validationError },
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        await db.poiStore.deleteAllPois();
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Delete all pois",
  },

  getPoisByCategory: {
    auth: {
      strategy: "jwt",
    },
    async handler(request) {
      try {
        const user = request.auth.credentials;
        const poi = await db.poiStore.getPoisByCategoryId(request.params.id, user._id);
        if (!poi) {
          return [];
        }
        return poi;
      } catch (err) {
        return Boom.serverUnavailable("No poi with this id");
      }
    },
    tags: ["api"],
    description: "Find pois by category id",
    notes: "Returns all pois of this category",
    validate: { params: { id: IdSpec }, failAction: validationError },
    response: { schema: PoiAray, failAction: validationError },
  },

  uploadImage: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const {file} = request.payload;
        const imageUrl = await imageStore.uploadStream(file);
        await db.poiStore.updatePoiImg(request.params.id, imageUrl);
        const poi = await db.poiStore.getPoiById(request.params.id);
        return poi;
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Upload image for a poi",
    payload: {
      multipart: true,
      parse: true,
      output: "stream"
    },
    validate: { params: { id: IdSpec }, failAction: validationError },
  },

  deleteImage: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        await imageStore.deleteImage(request.payload.img);
        await db.poiStore.updatePoiImg(request.params.id, request.payload.img);
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Delete image of a poi",
    validate: { params: { id: IdSpec }, payload: ImageSpec, failAction: validationError },
  },
};