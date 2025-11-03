import { userApi } from "./api/user-api.js";

export const apiRoutes = [
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },
  { method: "PUT", path: "/api/users/{id}", config: userApi.update },
  { method: "DELETE", path: "/api/users/{id}", config: userApi.delete },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },

  { method: "POST", path: "/api/users/authenticate", config: userApi.authenticate },
];