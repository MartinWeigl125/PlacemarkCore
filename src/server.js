import Cookie from "@hapi/cookie";
import Hapi from "@hapi/hapi";
import Bell from "@hapi/bell";
import Inert from "@hapi/inert";
import HapiSwagger from "hapi-swagger";
import Vision from "@hapi/vision";
import dotenv from "dotenv";
import Handlebars from "handlebars";
import path from "path";
import jwt from "hapi-auth-jwt2";
import { fileURLToPath } from "url";
import Joi from "joi";
import { accountsController } from "./controllers/accounts-controller.js";
import { webRoutes } from "./web-routes.js";
import { db } from "./models/db.js";
import { apiRoutes } from "./api-routes.js";
import { validate } from "./api/jwt-utils.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const result = dotenv.config();
if (result.error) {
  console.log(result.error.message);
  // process.exit(1);
}

const swaggerOptions = {
  info: {
    title: "Playtime API",
    version: "0.1"
  },
  securityDefinitions: {
    jwt: {
      type: "apiKey",
      name: "Authorization",
      in: "header"
    }
  },
  security: [{ jwt: [] }]
};

async function init() {
  const server = Hapi.server({
    port: process.env.PORT || 3000,
    routes: {
      cors: {
        origin: ["*"],
      }
    }
  });
  await server.register(Bell);
  await server.register(Cookie);
  await server.register(Vision);
  await server.register(jwt);
  await server.register(Inert);
  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions,
    },
  ]);
  server.validator(Joi);
  server.views({
    engines: {
      hbs: Handlebars,
    },
    relativeTo: __dirname,
    path: "./views",
    layoutPath: "./views/layouts",
    partialsPath: "./views/partials",
    layout: true,
    isCached: false,
  });
  server.auth.strategy("jwt", "jwt", {
    key: process.env.cookie_password,
    validate: validate,
    verifyOptions: { algorithms: ["HS256"] }
  });
  server.auth.strategy("session", "cookie", {
    cookie: {
      name: process.env.cookie_name,
      password: process.env.cookie_password,
      isSecure: false,
    },
    redirectTo: "/",
    validate: accountsController.validate,
  });
  server.auth.strategy("google", "bell", {
    provider: "google",
    password: process.env.cookie_password,
    isSecure: false,
    clientId: process.env.google_client_id,
    clientSecret: process.env.google_client_secret,
    location: "http://localhost:3000",
    scope: ["openid", "email", "profile"]
  });
  server.auth.strategy("github", "bell", {
    provider: "github",
    password: process.env.cookie_password,
    isSecure: false,
    clientId: process.env.github_client_id,
    clientSecret: process.env.github_client_secret,
    location: "http://localhost:3000",
    scope: ["user:email"]
  });
  server.auth.default("session");
  db.init("mongo");
  server.route(webRoutes);
  server.route(apiRoutes);
  await server.start();
  console.log("Server running on %s", server.info.uri);
}

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
