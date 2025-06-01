import * as dotenv from "dotenv";
dotenv.config(); // DÒNG QUAN TRỌNG - PHẢI Ở ĐẦU

import Post from "../models/Posts.js";
import { createError } from "../CreateError.js";
import { v2 as cloudinary } from "cloudinary";

// Cấu hình Cloudinary

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const GetAllPost = async (req, res, next) => {
  try {
    const posts = await Post.find({});
    return res.status(200).json({ success: true, data: posts });
  } catch (error) {
    next(
      createError(
        error?.status,
        error?.response?.data?.error?.message || error?.message
      )
    );
  }
};

export const createPost = async (req, res, next) => {
  try {
    const { name, prompt, photo } = req.body;

    // Upload ảnh lên Cloudinary
    const result = await cloudinary.uploader.upload(photo);

    // Tạo bài post mới với URL ảnh
    const newPost = await Post.create({
      name,
      prompt,
      photo: result.secure_url,
    });
    return res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    next(
      createError(
        error?.status,
        error?.response?.data?.error?.message || error?.message
      )
    );
  }
};
