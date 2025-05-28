import React from "react";
import { Image, StyleGenerateImageCard } from "./GenerateImageCard.style";
import { CircularProgress } from "@mui/material";

function GenerateImageCard({ src, loading }) {
  return (
    <StyleGenerateImageCard>
      {loading ? (
        <>
          <CircularProgress
            sx={{ color: "inherit", width: "24px", height: "24px" }}
          />
          Generating your Image...
        </>
      ) : src ? (
        <Image src={src ?? ""} alt="Generated" />
      ) : (
        <>Write a prompt to generate image</>
      )}
    </StyleGenerateImageCard>
  );
}

export default GenerateImageCard;
