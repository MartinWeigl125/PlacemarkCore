import { categoryJsonStore } from "./json/category-json-store.js";
import { poiJsonStore } from "./json/poi-json-store.js";
import { userJsonStore } from "./json/user-json-store.js";

import { connectMongo } from "./mongo/connect.js";
import { categoryMongoStore } from "./mongo/category-mongo-store.js";
import { poiMongoStore } from "./mongo/poi-mongo-store.js";
import { userMongoStore } from "./mongo/user-mongo-store.js";
import { commentMongoStore } from "./mongo/comment-mongo-store.js";

export const db = {
  categoryStore: null,
  poiStore: null,
  userStore: null,
  commentStore: null,

  init(dbType) {
    switch (dbType) {
      case "mongo":
        this.categoryStore = categoryMongoStore;
        this.poiStore = poiMongoStore;
        this.userStore = userMongoStore;
        this.commentStore = commentMongoStore;
        connectMongo();
        break;
      default:
        this.categoryStore = categoryJsonStore;
        this.poiStore = poiJsonStore;
        this.userStore = userJsonStore;
    }
  },
};
