import { v4 } from "uuid";
import { db } from "./store-utils.js";
import { poiJsonStore } from "./poi-json-store.js";

export const categoryJsonStore = {
  async getAllCategories() {
    await db.read();
    return db.data.categories;
  },

  async addCategory(category) {
    await db.read();
    category._id = v4();
    db.data.categories.push(category);
    await db.write();
    return category;
  },

  async getCategoryById(id) {
    await db.read();
    let cat = db.data.categories.find((category) => category._id === id);
    if (cat) {
      cat.pois = await poiJsonStore.getPoisByCategoryId(cat._id);
    } else {
      cat = null;
    }
    return cat;
  },

  async updateCategory(category, updateCategory) {
    category.name = updateCategory.name;
    await db.write();
  },

  async deleteCategoryById(id) {
    await db.read();
    const index = db.data.categories.findIndex((category) => category._id === id);
    if (index !== -1) db.data.categories.splice(index, 1);
    await db.write();
  },

  async deleteAllCategories() {
    db.data.categories = [];
    await db.write();
  },
};
