import { Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";

// Styled components
export const StyleForm = styled(Stack)(({ theme }) => ({}));

export const FormTitle = styled(Typography)(({ theme }) => ({
  fontSize: "36px",
  fontWeight: 700,
  color: theme.mode === "dark" ? "#E0E7FF" : "#1A237E",
  background: "linear-gradient(90deg, #6EE7B7 0%, #3B82F6 50%, #9333EA 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  letterSpacing: "0.5px",
  lineHeight: 1.2,
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-2px)",
    opacity: 0.9,
  },
}));

export const FormSubTitle = styled(Typography)(({ theme }) => ({
  fontSize: "28px",
  fontWeight: 500, // Medium weight for balance
  color: theme.mode === "dark" ? "#B3C8FF" : "#3F51B5", // Softer complementary color
  letterSpacing: "0.3px",
  lineHeight: 1.3,
  opacity: 0.85,
  transition: "opacity 0.3s ease-in-out",
  "&:hover": {
    opacity: 1, // Full opacity on hover
  },
}));
