import { Stack } from "@mui/material";
import styled from "styled-components";

export const StyleGenerateImageCard = styled.div`
  min-height: 264px;
  display: flex;
  gap: 16px;
  flex-direction: row;
  flex: 1;
  padding: 16px;
  border: 2px dashed ${({ theme }) => theme.yellow};
  color: rgb(100, 101, 111);
  border-radius: 20px;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
  background: ${({ theme }) => theme.black + 50};
`;
