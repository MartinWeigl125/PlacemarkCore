import { categoryApi } from "./api/category-api.js";
import { commentApi } from "./api/comment-api.js";
import { poiApi } from "./api/poi-api.js";
import { userApi } from "./api/user-api.js";

export const apiRoutes = [
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },
  { method: "PUT", path: "/api/users/{id}", config: userApi.update },
  { method: "DELETE", path: "/api/users/{id}", config: userApi.delete },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },

  { method: "POST", path: "/api/categories", config: categoryApi.create },
  { method: "GET", path: "/api/categories", config: categoryApi.find },
  { method: "GET", path: "/api/categories/{id}", config: categoryApi.findOne },
  { method: "PUT", path: "/api/categories/{id}", config: categoryApi.update },
  { method: "DELETE", path: "/api/categories", config: categoryApi.deleteAll },
  { method: "DELETE", path: "/api/categories/{id}", config: categoryApi.deleteOne },

  { method: "POST", path: "/api/categories/{id}/pois", config: poiApi.create },
  { method: "GET", path: "/api/pois", config: poiApi.find },
  { method: "GET", path: "/api/pois/{id}", config: poiApi.findOne },
  { method: "PUT", path: "/api/pois/{id}", config: poiApi.update },
  { method: "DELETE", path: "/api/pois", config: poiApi.deleteAll },
  { method: "DELETE", path: "/api/pois/{id}", config: poiApi.delete },

  { method: "POST", path: "/api/comments", config: commentApi.create },
  { method: "GET", path: "/api/comments", config: commentApi.find },
  { method: "GET", path: "/api/comments/{id}", config: commentApi.findOne },
  { method: "PUT", path: "/api/comments/{id}", config: commentApi.update },
  { method: "DELETE", path: "/api/comments", config: commentApi.deleteAll },
  { method: "DELETE", path: "/api/comments/{id}", config: commentApi.delete },

  { method: "POST", path: "/api/users/authenticate", config: userApi.authenticate },
];