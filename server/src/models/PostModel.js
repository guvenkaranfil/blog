const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    name: String,
    surname: String,
    email: String,
    comment: ""
  },
  { timestamps: true }
);

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
    },
    comments: [commentSchema]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
