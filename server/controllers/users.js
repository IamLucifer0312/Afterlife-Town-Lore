const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    stories: [String],
  },
  {
    versionKey: false, // Prevents the `__v` field from being added
  }
);

module.exports = mongoose.model("users", userSchema);
