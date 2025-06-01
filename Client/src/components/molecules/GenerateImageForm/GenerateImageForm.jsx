import React, { useState } from "react";
import { FormSubTitle, FormTitle, StyleForm } from "./GenerateImageForm.style";
import { Form, useNavigate } from "react-router-dom";
import TextInput from "../../atoms/CustomTextInput/CustomTextnput";
import { Stack, Typography } from "@mui/material";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CreateIcon from "@mui/icons-material/Create";
import { CreatePost, GenerateAIImage } from "../../../api";

function GenerateImageForm({
  post,
  setPost,
  createCreatePostLoading,
  setCreatePostLoading,
  generateImageLoading,
  setGenerateImageLoading,
}) {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const generateImage = async () => {
    setGenerateImageLoading(true);
    await GenerateAIImage({ prompt: post.prompt })
      .then((res) => {
        setPost({
          ...post,
          photo: `data:image/png;base64,${res.data.photo}`, // Sửa thành 'photo'
        });
      })
      .catch((error) => {
        setError(error?.response?.data?.message);
      })
      .finally(() => {
        setGenerateImageLoading(false);
      });
  };

  const createPost = async () => {
    setCreatePostLoading(true);
    await CreatePost({ post })
      .then((res) => {
        setCreatePostLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setError(error?.response?.data?.message);
        setGenerateImageLoading(false);
      });
  };
  return (
    <StyleForm gap="40px">
      <Stack>
        <FormTitle>Generate Image with prompt </FormTitle>
        <FormSubTitle>
          Write your prompt according to the image you want to generate!
        </FormSubTitle>
      </Stack>
      <Stack gap="24px">
        <TextInput
          label="Author"
          placeholder="Enter your name..."
          name="name"
          value={post?.name}
          handelChange={(e) => setPost({ ...post, name: e.target?.value })}
        />
        <TextInput
          label="Prompt"
          placeholder="Write a detailed prompt about the image..."
          name="name"
          rows="8"
          textArea
          value={post?.prompt}
          handelChange={(e) => setPost({ ...post, prompt: e.target.value })}
        />
        {error && <Typography sx={{ color: "red" }}>{error}</Typography>}
        ** You can post the AI Generated Image to the Community **
        <Stack flexDirection="row" gap="16px">
          <CustomButton
            text="Generate Image"
            flex
            leftIcon={<AutoAwesomeIcon />}
            isLoading={generateImageLoading}
            isDisabled={!post.prompt} // Updated condition
            onClick={() => generateImage()}
          />
          <CustomButton
            variant="secondary"
            text="Post Image"
            flex
            leftIcon={<CreateIcon />}
            isLoading={createCreatePostLoading}
            isDisabled={!post.name || !post.prompt || !post.photo} // Unchanged
            onClick={() => createPost()}
          />
        </Stack>
      </Stack>
    </StyleForm>
  );
}

export default GenerateImageForm;
