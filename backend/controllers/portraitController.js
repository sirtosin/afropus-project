const asyncHandler = require("express-async-handler");
const { cloudinary } = require("../utils/cloudinary");
const Portrait = require("../models/portraitModel");
const mongoose = require("mongoose");

// all Portrait works
const getPortraitWorks = asyncHandler(async (req, res) => {
  try {
    const portrait = await Portrait.find();
    res.status(200).json(portrait);
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err,
    });
  }
});

// @desc    Set Portrait
// @route   POST /api/Portrait
// @access  Private
const createPortrait = asyncHandler(async (req, res) => {
  try {
    const fileStr = req.body.image;
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: process.env.UPLOAD_PRESET,
    });
    const portrait = new Portrait({
      name: req.body.name,
      image: uploadResponse.secure_url,
      phone: req.body.phone,
      address: req.body.address,
    });
    await portrait.save();

    console.log("image", portrait);
    res.status(201).json(portrait);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = {
  createPortrait,
  getPortraitWorks,
};
