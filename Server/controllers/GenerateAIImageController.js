import * as dotenv from "dotenv";
import { createError } from "../CreateError.js";
import OpenAI from "openai";

dotenv.config();

// Validate environment variable
const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  throw new Error("OPENAI_API_KEY is not defined in environment variables");
}

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey,
});

console.log("✅ Successfully connected to OpenAI API");

export const generateImage = async (req, res, next) => {
  try {
    const { prompt } = req.body;

    // Validate input
    if (!prompt || typeof prompt !== "string" || prompt.trim() === "") {
      return next(
        createError(400, "Prompt is required and must be a non-empty string")
      );
    }

    console.log("Generating image with prompt:", prompt);

    const aiResponse = await openai.images.generate({
      model: "dall-e-3",
      prompt,
      n: 1,
      size: "1024x1024",
    });

    if (aiResponse) {
      console.log("Done !");
    } else {
      console.log("Failed !");
    }

    const imageUrl = aiResponse.data[0]?.url;

    if (!imageUrl) {
      return next(createError(500, "No image URL returned from OpenAI API"));
    }

    console.log("🖼️ Image generated successfully with OpenAI API");

    return res.status(200).json({ photoUrl: imageUrl });
  } catch (error) {
    console.error("Full error details:", error);

    if (error instanceof OpenAI.APIError) {
      return next(
        createError(
          error.status || 500,
          error.message || "Error generating image from OpenAI API"
        )
      );
    }

    return next(
      createError(
        500,
        error.message ||
          "An unexpected error occurred while generating the image"
      )
    );
  }
};
