import express from "express";
import Image from "../models/Gallery.js";

const router = express.Router();

router.post("/post/nature", async (req, res) => {
  try {
    const newImage = new Image({
      title: req.body.title,
      img: req.body.img,
    });
    const image = await newImage.save();
    res.status(200).json(image);
  } catch (err) {
    console.log(err);
  }
});

router.get("/nature", async (req, res) => {
  try {
    const image = await Image.find();
    res.status(200).json(image);
  } catch (err) {
    console.log(err);
  }
});

router.get("/nature/:id", async (req, res) => {
  try {
    const imageById = await Image.findById(req.params.id);
    res.status(200).json(imageById);
  } catch (err) {
    console.log(err);
  }
});

router.put("/nature/:id", async (req, res) => {
  try {
    const update = await Image.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(update);
  } catch (err) {
    console.log("err");
  }
});

router.delete("/nature/:id", async (req, res) => {
  try {
    if (req.body.ObjectId === req.params.id) {
      try {
        await Image.findByIdAndDelete(req.params.id);
        res.status(200).json("Image has been Deleted");
      } catch (err) {
        console.log(err);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

export default router;
