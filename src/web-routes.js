import { accountsController } from "./controllers/accounts-controller.js";
import { dashboardController } from "./controllers/dashboard-controller.js";

export const webRoutes = [
  { method: "GET", path: "/", config: accountsController.index },
  { method: "GET", path: "/signup", config: accountsController.showSignup },
  { method: "GET", path: "/login", config: accountsController.showLogin },
  { method: "GET", path: "/logout", config: accountsController.logout },
  { method: "POST", path: "/register", config: accountsController.signup },
  { method: "POST", path: "/authenticate", config: accountsController.login },
  { method: "GET", path: "/account", config: accountsController.showAccount },
  { method: "POST", path: "/updateuser", config: accountsController.update },
  { method: "GET", path: "/deleteuser", config: accountsController.delete },

  { method: "GET", path: "/dashboard", config: dashboardController.index },
  { method: "POST", path: "/addpoi", config: dashboardController.addPoi },
  { method: "GET", path: "/deletepoi/{id}", config: dashboardController.deletePoi },
  { method: "POST", path: "/updatepoi/{id}", config: dashboardController.update },

  { method: "GET", path: "/{param*}", handler: { directory: { path: "./public" } }, options: { auth: false } },
];
