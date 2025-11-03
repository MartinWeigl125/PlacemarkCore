import { db } from "../models/db.js";
import { PoiSpec } from "../models/joi-schemas.js";

export const poiController = {
  index: {
    handler: async function (request, h) {
      const poi = await db.poiStore.getPoiById(request.params.id);
      const viewData = {
        title: "Update Point of Interest",
        poi: poi,
      };
      return h.view("poi-update-view", viewData);
    },
  },

  update: {
    validate: {
      payload: PoiSpec,
      options: { abortEarly: false },
      failAction: async function (request, h, error) {
        const poi = await db.poiStore.getPoiById(request.params.id);
        return h.view("poi-update-view", { title: "Update Point of Interest error", errors: error.details, poi: poi }).takeover().code(400);
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
      return h.redirect("/dashboard");
    },
  },
};
