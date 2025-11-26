import { Comment } from "./comment.js";

export const commentMongoStore = {
  async getAllComments() {
    const comments = await Comment.find().lean();
    return comments;
  },

  async addComment(comment) {
    const newComment = new Comment(comment);
    const commentObj = await newComment.save();
    return this.getCommentById(commentObj._id);
  },

  async getCommentsByPoiId(id) {
    const comments = await Comment.find({ poiid: id }).lean();
    return comments;
  },

  async getCommentById(id) {
    if (id) {
      const comment = await Comment.findOne({ _id: id }).lean();
      return comment;
    }
    return null;
  },

  async deleteCommentById(id) {
    try {
      await Comment.deleteOne({ _id: id });
    } catch (error) {
      console.log("bad id");
    }
  },

  async deleteAllComments() {
    await Comment.deleteMany({});
  },

  async updateComment(comment, updatedComment) {
    const commentDoc = await Comment.findOne({ _id: comment._id });
    commentDoc.comment = updatedComment.comment;
    commentDoc.rating = updatedComment.rating;
    await commentDoc.save();
  }
};