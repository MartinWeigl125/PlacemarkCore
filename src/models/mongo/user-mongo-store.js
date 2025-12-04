import Mongoose from "mongoose";
import bcrypt from "bcrypt";
import { User } from "./user.js";
import { poiMongoStore } from "./poi-mongo-store.js";

export const userMongoStore = {
  async getAllUsers() {
    const users = await User.find().lean();
    return users;
  },

  async getUserById(id) {
    if (Mongoose.isValidObjectId(id)) {
      const user = await User.findOne({ _id: id }).lean();
      return user;
    }
    return null;
  },

  async addUser(user) {
    const saltRounds = 10;
    user.password = await bcrypt.hash(user.password, saltRounds);

    const newUser = new User(user);
    const userObj = await newUser.save();
    const u = await this.getUserById(userObj._id);
    return u;
  },

  async getUserByEmail(email) {
    const user = await User.findOne({ email: email }).lean();
    return user;
  },

  async updateUser(user, updatedUser) {
    const userDoc = await User.findOne({ _id: user._id });
    userDoc.firstName = updatedUser.firstName;
    userDoc.lastName = updatedUser.lastName;
    userDoc.email = updatedUser.email;

    const isAlreadyHashed = updatedUser.password.startsWith("$2b$") || updatedUser.password.startsWith("$2a$");
    if (!isAlreadyHashed) {
      const saltRounds = 10;
      updatedUser.password = await bcrypt.hash(updatedUser.password, saltRounds);
    }
    userDoc.password = updatedUser.password;
    await userDoc.save();
  },

  async deleteUserById(id) {
    try {
      await User.deleteOne({ _id: id });
    } catch (error) {
      console.log("bad id");
    }
  },

  async deleteAllUsers() {
    await User.deleteMany({});
  },

  async getUsersWithPrivatePoiCount() {
    const users = await User.find().lean(); 
    const usersWithCounts = await Promise.all(
      users.map(async (user) => {
        const poiCount = await poiMongoStore.getUserPoiCount(user._id);
        return {
          ...user,
          poiCount,
          password: undefined
        };
      })
    );
    return usersWithCounts.map(({ password, ...user }) => user);
  }
};
