import mongoose from "mongoose";
import { userRoleEnum } from '../utils/utils.js';

const schema = new mongoose.Schema({
  name: String,
  photo: String,
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: "String",
    enum: [userRoleEnum.ADMIN, userRoleEnum.USER],
    default: userRoleEnum.USER,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const User = mongoose.model("User", schema);