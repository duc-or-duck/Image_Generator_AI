import React from "react";
import { Author, HoverOverlay, Prompt, StyleCard } from "./CardItem.style";
import { LazyLoadImage } from "react-lazy-load-image-component";
import AvatarImage from "../../../../src/assets/avatar.jpg";
import { Avatar, Stack } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import FileSaver from "file-saver";

function CustomCard({ item }) {
  return (
    <StyleCard>
      <LazyLoadImage style={{ borderRadius: "20px" }} src={item?.photo} />
      <HoverOverlay>
        <Prompt>{item?.prompt}</Prompt>
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Stack flexDirection="row" alignItems="center" gap="8px">
            <Avatar>{item?.author[0]}</Avatar>
            <Author>{item?.author}</Author>
          </Stack>
          <DownloadIcon
            onClick={() => FileSaver.saveAs(item?.photo, "download.jpg")}
          />
        </Stack>
      </HoverOverlay>
    </StyleCard>
  );
}

export default CustomCard;
