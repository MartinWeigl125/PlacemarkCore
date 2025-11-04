import { db } from "../models/db.js";
import { PoiSpec } from "../models/joi-schemas.js";

export const dashboardController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const pois = await db.poiStore.getAllPois();
      const viewData = {
        title: "Placemark Dashboard",
        user: loggedInUser,
        pois: pois,
        isAdmin: loggedInUser.email === "admin@placemark.com"
      };
      return h.view("dashboard-view", viewData);
    },
  },

  addPoi: {
    validate: {
      payload: PoiSpec,
      options: { abortEarly: false },
      failAction: async function (request, h, error) {
        const pois = await db.poiStore.getAllPois();
        return h.view("dashboard-view", { title: "Add Point of Interest error", errors: error.details, pois: pois }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const newPoi = {
        name: request.payload.name,
        description: request.payload.description,
        latitude: Number(request.payload.latitude),
        longitude: Number(request.payload.longitude),
      };
      await db.poiStore.addPoi(newPoi);
      return h.redirect("/dashboard");
    },
  },

  update: {
    validate: {
      payload: PoiSpec,
      options: { abortEarly: false },
      failAction: async function (request, h, error) {
        const pois = await db.poiStore.getAllPois();
        return h.view("dashboard-view", { title: "Edit Point of Interest error", errors: error.details, pois: pois }).takeover().code(400);
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

  deletePoi: {
    handler: async function (request, h) {
      const poiId = request.params.id;
      await db.poiStore.deletePoiById(poiId);
      return h.redirect("/dashboard");      
    }
  },
};
