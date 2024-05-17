const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true, // Username is required
    },
    email: {
      type: String,
      required: true, // Email is required
      unique: true, // Email should be unique
    },
    mobileNumber: {
      type: String,
      // Mobile number is required
    },
    updateCount: {
      type: Number,
      default: 0, // Default value for updateCount
    },
  },
  {
    timestamps: true, // Enable timestamps
  }
);

module.exports = mongoose.model("User", userSchema); // "User" will be the collection name in MongoDB
