import { db } from "../models/db.js";

export const adminController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const users = await db.userStore.getAllUsers();
      const viewData = {
        title: "Placemark Administration",
        user: loggedInUser,
        users: users
      };
      return h.view("admin-view", viewData);
    },
  },

  delete: {
    handler: async function (request, h) {
      const userId = request.params.id;
      await db.userStore.deleteUserById(userId);
      return h.redirect("/admin");      
    }
  },
}