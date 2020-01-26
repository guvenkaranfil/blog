const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    trailerContent: {
      type: String,
      required: true
    },
    tags: {
      type: Array
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
