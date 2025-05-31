import React, { useState } from "react";
import { Author, HoverOverlay, Prompt, StyleCard } from "./CardItem.style";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import AvatarImage from "../../../../src/assets/avatar.jpg";
import { Avatar, CircularProgress, Stack } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import FileSaver from "file-saver";

function CustomCard({ item }) {
  const [imgSrc, setImgSrc] = useState(item?.photo);
  const [loaded, setLoaded] = useState(false);

  return (
    <StyleCard>
      <div style={{ position: "relative", paddingTop: "100%" }}>
        <LazyLoadImage
          style={{
            borderRadius: "20px",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity 0.3s",
            opacity: loaded ? 1 : 0,
          }}
          src={imgSrc}
          alt={item?.prompt || "AI-generated image"}
          threshold={100}
          effect="opacity"
          afterLoad={() => setLoaded(true)}
          onError={() => {
            setImgSrc(AvatarImage);
            setLoaded(true);
          }}
        />

        {!loaded && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircularProgress />
          </div>
        )}
      </div>

      <HoverOverlay>
        <Prompt>{item?.prompt}</Prompt>
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Stack flexDirection="row" alignItems="center" gap="8px">
            <Avatar>{item?.name?.[0] || "U"}</Avatar>
            <Author>{item?.name || "Unknown"}</Author>
          </Stack>
          <DownloadIcon
            onClick={() =>
              item?.photo && FileSaver.saveAs(item.photo, "download.jpg")
            }
            sx={{
              cursor: item?.photo ? "pointer" : "not-allowed",
              opacity: item?.photo ? 1 : 0.5,
            }}
          />
        </Stack>
      </HoverOverlay>
    </StyleCard>
  );
}

export default CustomCard;
