import Mongoose from "mongoose";

const { Schema } = Mongoose;

const poiSchema = new Schema({
  name: String, 
  description: String,
  latitude: Number,
  longitude: Number, 
  img: [String],
  categoryid: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  // userid = null: public POI, otherwise private POI of user with this ID
  userid: {
    type: Schema.Types.ObjectId,
    ref: "User",
  }
});

export const Poi = Mongoose.model("Poi", poiSchema);
