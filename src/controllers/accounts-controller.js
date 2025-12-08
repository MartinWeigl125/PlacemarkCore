import bcrypt from "bcrypt";
import { db } from "../models/db.js";
import { UserCredentialsSpec, UserSpec } from "../models/joi-schemas.js";

export const accountsController = {
  index: {
    auth: false,
    handler: function (request, h) {
      return h.view("main", { title: "Welcome to Placemark" });
    },
  },
  showSignup: {
    auth: false,
    handler: function (request, h) {
      return h.view("signup-view", { title: "Sign up for Placemark" });
    },
  },
  signup: {
    auth: false,
    validate: {
      payload: UserSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        return h.view("signup-view", { title: "Sign up error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const user = request.payload;
      await db.userStore.addUser(user);
      return h.redirect("/");
    },
  },
  showLogin: {
    auth: false,
    handler: function (request, h) {
      return h.view("login-view", { title: "Login to Placemark" });
    },
  },
  login: {
    auth: false,
    validate: {
      payload: UserCredentialsSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        return h.view("login-view", { title: "Login error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const { email, password } = request.payload;
      const user = await db.userStore.getUserByEmail(email);
      const isValid = await bcrypt.compare(request.payload.password, user.password);
      if (!user || !isValid) {
        const errors = [
          { message: "Email or password invalid." }
        ];
        return h.view("login-view", { title: "Login error", errors: errors }).takeover().code(400);
      }
      request.cookieAuth.set({ id: user._id });
      return h.redirect("/dashboard");
    },
  },
  logout: {
    auth: false,
    handler: function (request, h) {
      request.cookieAuth.clear();
      return h.redirect("/");
    },
  },
  showAccount: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const user = await db.userStore.getUserById(loggedInUser._id);
      const viewData = {
        title: "Placemark Account",
        user: user,  
      }
      return h.view("account-view", viewData);
    },
  },
  update: {
    validate: {
      payload: UserSpec,
      options: { abortEarly: false },
      failAction: async function (request, h, error) {
        const loggedInUser = request.auth.credentials;
        const user = await db.userStore.getUserById(loggedInUser._id);
        const viewData = {
          title: "Update error",
          user: user,
          errors: error.details,  
        };
        return h.view("account-view", viewData).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const user = await db.userStore.getUserById(loggedInUser._id);
      const updatedUser = {
        firstName: request.payload.firstName,
        lastName: request.payload.lastName,
        email: request.payload.email,
        password: request.payload.password,
      };
      await db.userStore.updateUser(user, updatedUser);
      return h.redirect("/account");
    },
  },
  delete: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      await db.userStore.deleteUserById(loggedInUser._id);
      request.cookieAuth.clear();
      return h.redirect("/");
    }
  },

  async validate(request, session) {
    const user = await db.userStore.getUserById(session.id);
    if (!user) {
      return { isValid: false };
    }
    return { isValid: true, credentials: user };
  },
};