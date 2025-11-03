import { poiJsonStore } from "./json/poi-json-store.js";
import { userJsonStore } from "./json/user-json-store.js";

export const db = {
  poiStore: null,
  userStore: null,

  init(dbType) {
    switch (dbType) {
      case "mongo":
        break;
      default:
        this.poiStore = poiJsonStore;
        this.userStore = userJsonStore;
    }
  },
};
