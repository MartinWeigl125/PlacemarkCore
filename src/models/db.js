import { categoryJsonStore } from "./json/category-json-store.js";
import { poiJsonStore } from "./json/poi-json-store.js";
import { userJsonStore } from "./json/user-json-store.js";

export const db = {
  categoryStore: null,
  poiStore: null,
  userStore: null,

  init(dbType) {
    switch (dbType) {
      case "mongo":
        break;
      default:
        this.categoryStore = categoryJsonStore;
        this.poiStore = poiJsonStore;
        this.userStore = userJsonStore;
    }
  },
};
