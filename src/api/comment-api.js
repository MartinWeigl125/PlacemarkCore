import Boom from "@hapi/boom";
import { db } from "../models/db.js";
import { IdSpec, CommentSpec, CommentSpecPlus, CommentArray } from "../models/joi-schemas.js";
import { validationError } from "./logger.js";

export const commentApi = {
  create: {
    auth: { strategy: "jwt" },
    handler: async function (request, h) {
      try {
        const comment = await db.commentStore.addComment(request.payload);
        if (comment) {
          return comment;
        }
        return Boom.badImplementation("error creating comment");
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Create a comment",
    notes: "Returns the newly created comment",
    validate: { payload: CommentSpec },
    response: { schema: CommentSpecPlus, failAction: validationError },
  },

  find: {
    auth: { strategy: "jwt" },
    handler: async function (request, h) {
      try {
        const comments = await db.commentStore.getAllComments();
        return comments;
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    response: { schema: CommentArray, failAction: validationError },
    description: "Get all comments",
    notes: "Returns all comments",
  },

  findByPoiId: {
    auth: { strategy: "jwt" },
    handler: async function (request, h) {
      try {
        const comments = await db.commentStore.getCommentsByPoiId(request.params.id);
        return comments;
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Get comments for a poi",
    notes: "Returns all comments for the poi",
    validate: { params: { id: IdSpec }, failAction: validationError },
    response: { schema: CommentArray, failAction: validationError },
  },

  findOne: {
    auth: { strategy: "jwt" },
    async handler(request) {
      try {
        const comment = await db.commentStore.getCommentById(request.params.id);
        if (!comment) {
          return Boom.notFound("No comment with this id");
        }
        return comment;
      } catch (err) {
        return Boom.serverUnavailable("No comment with this id");
      }
    },
    tags: ["api"],
    description: "Find a comment",
    notes: "Returns a comment",
    validate: { params: { id: IdSpec }, failAction: validationError },
    response: { schema: CommentSpecPlus, failAction: validationError },
  },

  update: {
    auth: { strategy: "jwt" },
    handler: async function (request, h) {
      try {
        const comment = await db.commentStore.getCommentById(request.params.id);
        if (!comment) {
          return Boom.notFound("No comment with this id");
        }
        await db.commentStore.updateComment(comment, request.payload);
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Update a comment",
    validate: { params: { id: IdSpec }, payload: CommentSpec, failAction: validationError },
  },

  delete: {
    auth: { strategy: "jwt" },
    handler: async function (request, h) {
      try {
        const comment = await db.commentStore.getCommentById(request.params.id);
        if (!comment) {
          return Boom.notFound("No comment with this id");
        }
        await db.commentStore.deleteCommentById(comment._id);
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("No comment with this id");
      }
    },
    tags: ["api"],
    description: "Delete a comment",
    validate: { params: { id: IdSpec }, failAction: validationError },
  },

  deleteAll: {
    auth: { strategy: "jwt" },
    handler: async function (request, h) {
      try {
        await db.commentStore.deleteAllComments();
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Delete all comments",
  },

  getCommentsByPoi: {
    auth: {
      strategy: "jwt",
    },
    async handler(request) {
      try {
        const comments = await db.commentStore.getCommentsByPoiId(request.params.id);
        if (!comments) {
          return [];
        }
        return comments;
      } catch (err) {
        return Boom.serverUnavailable("No poi with this id");
      }
    },
    tags: ["api"],
    description: "Find comments by poi id",
    notes: "Returns all comments of this poi",
    validate: { params: { id: IdSpec }, failAction: validationError },
    response: { schema: CommentArray, failAction: validationError },
  },
};