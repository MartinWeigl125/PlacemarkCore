import { userJsonStore } from "./json/user-json-store.js";

export const db = {
  userStore: null,

  init(dbType) {
    switch (dbType) {
      case "mongo":
        break;
      default:
        this.userStore = userJsonStore;
    }
  },
};
