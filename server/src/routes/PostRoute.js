const express = require("express");
const router = express.Router();

const {
  create,
  read,
  update,
  deletePost,
  postById,
  getPost
} = require("../controllers/PostController");

const {
  requireSignin,
  isAuth,
  isAdmin,
  userById
} = require("../controllers/UserController");

// post requests
router.post("/post/create/:userId", requireSignin, isAuth, isAdmin, create);

// get requests
router.get("/post/read/:userId", requireSignin, isAuth, isAdmin, read);
router.get("/post/:userId/:postId", requireSignin, isAuth, isAdmin, getPost);

// update requests

// params
router.param("userId", userById);
router.param("postId", postById);

module.exports = router;
