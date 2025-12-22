import Boom from "@hapi/boom";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { db } from "../models/db.js";
import { UserSpec, UserSpecPlus, IdSpec, UserArray, UserCredentialsSpec, JwtAuth, UserPrivateArray } from "../models/joi-schemas.js";
import { validationError } from "./logger.js";
import { createToken } from "./jwt-utils.js";

dotenv.config();

export const userApi = {
  create: {
    auth: false,
    handler: async function (request, h) {
      try {
        const user = await db.userStore.addUser(request.payload);
        if (user) {
          return h.response(user).code(201);
        }
        return Boom.badImplementation("error creating user");
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Create a User",
    notes: "Returns the newly created user",
    validate: { payload: UserSpec, failAction: validationError },
    response: { schema: UserSpecPlus, failAction: validationError },
  },

  find: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const users = await db.userStore.getAllUsers();
        return users;
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Get all users",
    notes: "Returns details of all users",
    response: { schema: UserArray, failAction: validationError },
  },

  findOne: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const user = await db.userStore.getUserById(request.params.id);
        if (!user) {
          return Boom.notFound("No User with this id");
        }
        return user;
      } catch (err) {
        return Boom.serverUnavailable("No User with this id");
      }
    },
    tags: ["api"],
    description: "Get a specific user",
    notes: "Returns user details",
    validate: { params: { id: IdSpec }, failAction: validationError },
    response: { schema: UserSpecPlus, failAction: validationError },
  },

  update: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const user = await db.userStore.getUserById(request.params.id);
        if (!user) {
          return Boom.notFound("No User with this id");
        }
        await db.userStore.updateUser(user, request.payload);
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Update a User",
    validate: { params: { id: IdSpec }, payload: UserSpec, failAction: validationError },
  },

  delete: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const user = await db.userStore.getUserById(request.params.id);
        if (!user) {
          return Boom.notFound("No User with this id");
        }
        await db.userStore.deleteUserById(user._id);
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("No User with this id");
      }
    },
    tags: ["api"],
    description: "Delete a user",
    validate: { params: { id: IdSpec }, failAction: validationError },
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        await db.userStore.deleteAllUsers();
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Delete all users",
    notes: "All users removed from Placemark",
  },

  getUsersWithPrivatePois: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const users = await db.userStore.getUsersWithPrivatePoiCount();
        return users;
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Get all users with private poi count",
    notes: "Returns all users with the count of their private pois",
    response: { schema: UserPrivateArray, failAction: validationError },
  },

  authenticate: {
    auth: false,
    handler: async function (request, h) {
      try {
        const user = await db.userStore.getUserByEmail(request.payload.email);
        if (!user) {
          return Boom.unauthorized("User not found");
        }
        const isValid = await bcrypt.compare(request.payload.password, user.password);
        if (!isValid) {
          return Boom.unauthorized("Invalid password");
        }
        const token = createToken(user);
        return h.response({ success: true, 
                            firstName: `${user.firstName}`,
                            lastName: `${user.lastName}`, 
                            token: token, 
                            _id: user._id 
                          }).code(201);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Authenticate a User",
    notes: "If user has valid email/password, create and return a JWT token",
    validate: { payload: UserCredentialsSpec, failAction: validationError },
    response: { schema: JwtAuth, failAction: validationError },
  },

  googleAuth: {
    auth: false,
    handler: async function (request, h) {
      return h.redirect("/api/users/auth/google/callback"); 
    },
    tags: ["api"],
    description: "Login with Google",
    notes: "Configures OAuth2 authentication with Google",
  },

  googleCallback: {
    auth: {
      strategy: "google",
    },
    handler: async function (request, h) {
      try {
        const { profile } = request.auth.credentials;
        const newUser = {
          firstName: profile.name.given_name,
          lastName: profile.name.family_name,
          email: profile.email,
          googleId: profile.id,
          githubId: null,
          password: null
        }
        const user = await db.userStore.findOrCreateOAuthUser(newUser);
        if (!user) {
          return Boom.badRequest("User already exists with this email and another provider");
        }
        const token = createToken(user);
        return h.redirect(
          `${process.env.frontend_url}/oauth/google?token=${token}&firstName=${user.firstName}&lastName=${user.lastName}&_id=${user._id}`
        );
      } catch (err) {
        console.error(err);
        return Boom.internal("Google Auth failed");
      }   
    },
    tags: ["api"],
    description: "Login with Google",
    notes: "Configures OAuth2 authentication with Google",
  },

  githubAuth: {
    auth: false,
    handler: async function (request, h) {
      return h.redirect("/api/users/auth/github/callback"); 
    },
    tags: ["api"],
    description: "Login with Github",
    notes: "Configures OAuth2 authentication with Github",
  },

  githubCallback: {
    auth: {
      strategy: "github",
    },
    handler: async function (request, h) {
      try {
        const { profile } = request.auth.credentials;
        const newUser = {
          firstName: profile.username,
          lastName: profile.displayName?.split(" ")[1] || "",
          email: profile.email || "",
          googleId: null,
          githubId: profile.id,
          password: null,
        }
        const user = await db.userStore.findOrCreateOAuthUser(newUser);
        if (!user) {
          return Boom.badRequest("User already exists with this email and another provider");
        }
        const token = createToken(user);
        return h.redirect(
          `${process.env.frontend_url}/oauth/github?token=${token}&firstName=${user.firstName}&lastName=${user.lastName}&_id=${user._id}`
        );
      } catch (err) {
        console.error(err);
        return Boom.internal("Github Auth failed");
      }   
    },
    tags: ["api"],
    description: "Login with Github",
    notes: "Configures OAuth2 authentication with Github",
  },
};
