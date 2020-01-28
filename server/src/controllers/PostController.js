const Post = require("../models/PostModel");

exports.postById = (req, res, next, id) => {
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

exports.postComment = (req, res) => {
  const { _id, name, surname, email, comment } = req.body;
  Post.findOneAndUpdate(
    { _id: _id },
    {
      $push: { comments: { name, surname, email, comment } }
    },
    { new: true }
  ).exec((err, comment) => {
    if (err) res.status(400).json(err);
    else res.status(200).json({ post: comment });
  });
};

// search tag title
exports.getTagPosts = (req, res, next, tagName) => {
  Post.find({ tags: tagName }).exec((err, posts) => {
    if (err) res.json(err);
    else {
      if (posts.length === 0) {
        return res.json({ info: "Tag Related Post Doesn't Found." });
      } else {
        return res.status(200).json(posts);
      }
    }
    next();
  });
};

exports.getPost = (req, res) => {
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
