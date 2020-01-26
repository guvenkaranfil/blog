const Post = require("../models/PostModel");

exports.create = (req, res) => {
  const post = new Post(req.body);
  post.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    res.json({ data });
  });
};

exports.read = (req, res) => {
  Post.find({}, (err, posts) => {
    if (err) res.json({ error: err });
    else {
      res.json(posts);
    }
  });
};

exports.update = (req, res) => {};

exports.deletePost = (req, res) => {};
