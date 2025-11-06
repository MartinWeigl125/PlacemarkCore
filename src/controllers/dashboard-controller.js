import { db } from "../models/db.js";
import { CategorySpec, PoiSpec } from "../models/joi-schemas.js";

export const dashboardController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const categories = await db.categoryStore.getAllCategories();
      const viewData = {
        title: "Placemark Dashboard",
        user: loggedInUser,
        categories: categories,
        isAdmin: loggedInUser.email === "admin@placemark.com"
      };
      return h.view("dashboard-view", viewData);
    },
  },

  addCategory: {
    validate: {
      payload: CategorySpec,
      options: { abortEarly: false },
      failAction: async function (request, h, error) {
        const categories = await db.categoryStore.getAllCategories();
        return h.view("dashboard-view", { title: "Add Category error", errors: error.details, categories: categories }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const newCategory = {
        name: request.payload.name,
      };
      await db.categoryStore.addCategory(newCategory);
      return h.redirect("/dashboard");
    },
  },

  deleteCategory: {
    handler: async function (request, h) {
      const catId = request.params.id;
      await db.categoryStore.deleteCategoryById(catId);
      return h.redirect("/dashboard");      
    }
  },
};
