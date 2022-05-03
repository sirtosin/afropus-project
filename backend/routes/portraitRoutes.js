const express = require("express");
const router = express.Router();
const {
  createPortrait,
  getPortraitWorks,
} = require("../controllers/portraitController");
router.route("/all").get(getPortraitWorks);
router
  .route("/")
  // .get(protect, getPortrait)
  .post( createPortrait);


module.exports = router;
