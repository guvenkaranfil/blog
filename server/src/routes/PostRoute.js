const express = require("express");
const router = express.Router();

const {
  create,
  read,
  update,
  deletePost,
  postById,
  tagByName,
  getPost,
  getTagPosts,
  postComment
} = require("../controllers/PostController");

const {
  requireSignin,
  isAuth,
  isAdmin,
  userById
} = require("../controllers/UserController");

// post requests
router.post("/post/create/:userId", requireSignin, isAuth, isAdmin, create);
router.post("/post/comment", postComment);

// get requests
router.get("/post/read", read);
router.get("/post/:userId/:postId", requireSignin, isAuth, isAdmin, getPost);
router.get("/tag/:tagName", getTagPosts);

// update requests

// params
router.param("userId", userById);
router.param("postId", postById);
router.param("tagName", getTagPosts);

module.exports = router;
