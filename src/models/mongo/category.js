import Mongoose from "mongoose";

const { Schema } = Mongoose;

const categorySchema = new Schema({
  name: String,
  img: String,
});

export const Category = Mongoose.model("Category", categorySchema);
