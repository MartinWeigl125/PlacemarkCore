import { Poi } from "./poi.js";

export const poiMongoStore = {
  async getAllPois() {
    const pois = await Poi.find().lean();
    return pois;
  },

  async addPoi(categoryId, poi) {
    poi.categoryid = categoryId;
    const newPoi = new Poi(poi);
    const poiObj = await newPoi.save();
    return this.getPoiById(poiObj._id);
  },

  async getPoisByCategoryId(id, userid) {
    const pois = await Poi.find({ 
      categoryid: id,
      $or: [{ userid: userid }, { userid: null }]
    }).lean();
    return pois;
  },

  async getPoiById(id) {
    if (id) {
      const poi = await Poi.findOne({ _id: id }).lean();
      return poi;
    }
    return null;
  },

  async deletePoiById(id) {
    try {
      await Poi.deleteOne({ _id: id });
    } catch (error) {
      console.log("bad id");
    }
  },

  async deleteAllPois() {
    await Poi.deleteMany({});
  },

  async updatePoi(poi, updatedPoi) {
    const poiDoc = await Poi.findOne({ _id: poi._id });
    poiDoc.name = updatedPoi.name;
    poiDoc.description = updatedPoi.description;
    poiDoc.latitude = updatedPoi.latitude;
    poiDoc.longitude = updatedPoi.longitude;
    await poiDoc.save();
  },

  async updatePoiImg(id, url) {
    const poiDoc = await Poi.findOne({ _id: id });
    if (poiDoc.img.includes(url)) {
      poiDoc.img = poiDoc.img.filter((imgUrl) => imgUrl !== url);
    } else {
      poiDoc.img.push(url);
    }
    await poiDoc.save();
  },

  async getUserPoiCount(id) {
    const pois = await Poi.find({ userid: id }).lean();
    return pois.length;
  }
};
