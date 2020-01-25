const express = require("express");
const router = express.Router();

const {
  create,
  read,
  update,
  deletePost
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
router.get("/post/read/:userId", read);

// update requests

// params
router.param("userId", userById);

module.exports = router;
