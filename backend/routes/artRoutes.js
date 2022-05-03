const express = require("express");
const router = express.Router();
const {
  // getArt,
  createArt,
  updateArt,
  deleteArt,
  getArtWorks,
  getSingleArt,
} = require("../controllers/artController");

const { protect } = require("../middleware/authMiddleware");

router.route("/all").get(getArtWorks);
router
  .route("/")
  // .get(protect, getArt)
  .post(protect, createArt);
router
  .route("/:id")
  .put( updateArt)
  .delete(protect, deleteArt)
  .get(getSingleArt);


module.exports = router;
