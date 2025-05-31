import express from "express";
import { GetAllPost, createPost } from "../controllers/PostsController.js";

const router = express.Router();

router.get("/", GetAllPost);
router.post("/", createPost);

export default router;
