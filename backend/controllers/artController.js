const asyncHandler = require("express-async-handler");
const { cloudinary } = require("../utils/cloudinary");
const Art = require("../models/artModel");
const User = require("../models/userModel");
const mongoose = require('mongoose')
// @desc    Get art
// @route   GET /api/art
// // @access  Private indvivual vendor
// const getArt = asyncHandler(async (req, res) => {
//   const art = await Art.find({ user: req.user.id });

//   res.status(200).json(art);
// });

//single art work
const getSingleArt = asyncHandler(async (req, res) => {
  const art = await Art.findById(req.params.id);
  res.status(200).json(art);
})

// all art works
const getArtWorks = asyncHandler(async (req, res) => {
  try {
    const art = await Art.find();
    res.status(200).json(art);
  }
  catch (err) {
    res.status(500).json({
      success: false,
      error: err
    });
  }
});

// @desc    Set art
// @route   POST /api/art
// @access  Private
const createArt = asyncHandler(async (req, res) => {
  try {
    const fileStr = req.body.image;
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: process.env.UPLOAD_PRESET,
    });
    const art = new Art({
      title: req.body.title,
      image: uploadResponse.secure_url,
      price: req.body.price,
      user: req.user.id,
      category: req.body.category,
    });
    await art.save();

    console.log("image", art);
    res.status(201).json(art);
  } catch (err) {
    res.status(500).json(err);
  }
});

// @desc    Update Art
// @route   PUT /api/art/:id
// @access  Private
const updateArt = asyncHandler(async (req, res) => {
  const art = await Art.findById(req.params.id);

  if (!art) {
    res.status(400);
    throw new Error("Art not found");
  }

  // Check for user
  // if (!req.user) {
  //   res.status(401);
  //   throw new Error("User not found");
  // }

  // Make sure the logged in user matches the Art user
  // if (art.user.toString() !== req.user.id) {
  //   res.status(401);
  //   throw new Error("User not authorized");
  // }
  try {
    const fileStr = req.body.image;
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: process.env.UPLOAD_PRESET,
    });
    // const id = ;

    const update = await Art.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          title: req.body.title,
          image: uploadResponse.secure_url,
          price: req.body.price,
          // user: req.user.id,
          category: req.body.category,
        },
      },
      { new: true }
    );
    res.json(update);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// @desc    Delete Art
// @route   DELETE /api/art/:id
// @access  Private
const deleteArt = asyncHandler(async (req, res) => {
  const art = await Art.findById(req.params.id);

  if (!art) {
    res.status(400);
    throw new Error("Art not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the goal user
  if (art.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await art.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  // getArt,
  createArt,
  updateArt,
  deleteArt,
  getArtWorks,
  getSingleArt,
};
