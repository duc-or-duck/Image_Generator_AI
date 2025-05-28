import { Stack } from "@mui/material";
import styled from "styled-components";

export const StyleSearchBar = styled(Stack)(({ theme }) => ({
  flexDirection: "row !important",
  maxWidth: "550px",
  width: "90%",
  border: `1px solid ${theme.secondary}`,
  borderRadius: "8px",
  padding: "12px 16px",
  alignItems: "center",
  gap: "10px",
}));

export const StyleContentWrapper = styled(Stack)(({ theme }) => ({
  width: "100%",
  maxWidth: "1440px",
  padding: "32px 0px",
  justifyContent: "center",
}));

export const CardWrapper = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(
    auto-fit,
    minmax(250px, 1fr)
  ); /* Tự động điều chỉnh cột với kích thước tối thiểu 250px */

  @media (max-width: 600px) {
    /* Breakpoint xs: < 600px */
    grid-template-columns: repeat(
      auto-fit,
      minmax(200px, 1fr)
    ); /* Giảm kích thước cột cho màn hình nhỏ */
  }

  @media (min-width: 601px) and (max-width: 900px) {
    /* Breakpoint sm: 600px - 900px */
    grid-template-columns: repeat(2, 1fr); /* 2 cột */
  }

  @media (min-width: 901px) and (max-width: 1199px) {
    /* Breakpoint md: 900px - 1199px */
    grid-template-columns: repeat(3, 1fr); /* 3 cột */
  }

  @media (min-width: 1200px) {
    /* Breakpoint lg+: ≥ 1200px */
    grid-template-columns: repeat(4, 1fr); /* 4 cột */
  }
`;
