import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },

  img: {
    type: String,
    require: true,
  },
});

export default mongoose.model("Image", imageSchema);
