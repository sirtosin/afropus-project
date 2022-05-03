const express = require("express");

const User = require("../models/userModel");
const router = express.Router();
const {
  registerUsers,
  loginUser,
  getMe,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUsers);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;
