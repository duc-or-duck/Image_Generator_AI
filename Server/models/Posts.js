import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  prompt: {
    type: String,
    require: true,
  },
  photo: {
    type: String,
    require: true,
  },
});

const Post = mongoose.model("Post", PostSchema);

export default Post;
