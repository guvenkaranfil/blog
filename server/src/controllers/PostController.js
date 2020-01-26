const Post = require("../models/PostModel");

exports.postById = (req, res, next, id) => {
  console.log("id ==> ", id);
  Post.findById(id).exec((err, post) => {
    if (err || !post) {
      return res.status(400).json({
        error: "post not found"
      });
    }
    req.post = post;
    next();
  });
};

exports.getPost = (req, res) => {
  console.log(req.post);
  res.json(req.post);
};

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
