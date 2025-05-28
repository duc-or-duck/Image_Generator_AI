import { Grid, Stack } from "@mui/material";
import styled from "styled-components";

export const StylePostPage = styled.div`
  height: 100%;
  overflow-y: scroll;
  background: ${({ theme }) => theme.bg};
  padding: 30px 30px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media (max-width: 768) {
    padding: 6px 10px;
  }
`;

export const HeadLine = styled.div`
  font-size: 34px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

export const StyleCreatePostWrapper = styled(Stack)(({ theme }) => ({
  display: "flex",
  flex: 1,
  height: "fit-content",
  maxWidth: "1200px",
  gap: "20px",
  justifyContent: "center",
}));
