import React, { useState } from "react";
import { StyleCreatePostWrapper, StylePostPage } from "./CreatePost.style";
import GenerateImageForm from "../../components/molecules/GenerateImageForm/GenerateImageForm";
import GenerateImageCard from "../../components/molecules/GenerateImageCard/GenerateImageCard";

function CreatePostPage() {
  const [generateImageLoading, setGenerateImageLoading] = useState(false);
  const [createPostLoading, setCreatePostLoading] = useState(false);
  const [post, setPost] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  return (
    <StylePostPage>
      <StyleCreatePostWrapper>
        <GenerateImageForm
          post={post}
          setPost={setPost}
          createCreatePostLoading={createPostLoading}
          setCreatePostLoading={setCreatePostLoading}
          generateImageLoading={generateImageLoading}
          setGenerateImageLoading={setGenerateImageLoading}
        />
        <GenerateImageCard src={post?.photo} loading={generateImageLoading} />
      </StyleCreatePostWrapper>
    </StylePostPage>
  );
}

export default CreatePostPage;
