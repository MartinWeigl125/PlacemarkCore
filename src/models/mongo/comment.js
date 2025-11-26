import Mongoose from "mongoose";

const { Schema } = Mongoose;

const commentSchema = new Schema({
  comment: String,
  rating: Number, // rating from 1 to 5 stars
  userid: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  poiid: {
    type: Schema.Types.ObjectId,
    ref: "Poi",
  }
});

export const Comment = Mongoose.model("Comment", commentSchema);