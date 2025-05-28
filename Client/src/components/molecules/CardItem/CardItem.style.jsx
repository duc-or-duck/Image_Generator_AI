import { Card, Stack, Typography } from "@mui/material";
import styled from "styled-components";
import CustomCard from "./CardItem";

export const StyleCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column; /* Thêm để rõ ràng hơn khi là flex container */
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease; /* Giữ transition cho tất cả thuộc tính */
  &:hover {
    border-radius: 20px;
    transform: scale(1.02); /* Sử dụng transform thay vì scale */
    box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black};
  }
  &:nth-child(7n + 1) {
    grid-column: auto / span 2;
    grid-row: auto / span 2;
  }
`;

export const HoverOverlay = styled.div`
  opacity: 0;
  border-radius: 20px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2px;
  backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.white};
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 16px 24px;
  ${StyleCard}:hover & {
    opacity: 1;
  }
`;

export const Prompt = styled.div`
  font-weight: 400;
  font-size: 15px;
  color: ${({ theme }) => theme.white};
`;

export const Author = styled.div`
  font-weight: 600;
  font-size: 14px;
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${({ theme }) => theme.white};
`;
