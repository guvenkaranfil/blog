const express = require("express");
const router = express.Router();

const { signup, signin, signout } = require("../controllers/UserController");

// post requests
router.post("/signup", signup);
router.post("/signin", signin);

// get requests
router.get("/signout", signout);

module.exports = router;
