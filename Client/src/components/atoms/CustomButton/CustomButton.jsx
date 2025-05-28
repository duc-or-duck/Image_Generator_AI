import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
import { StyledButton } from "./CustomButton.style";

const CustomButton = ({
  text,
  isLoading = false,
  isDisabled = false,
  leftIcon,
  rightIcon,
  variant = "primary",
  onClick,
  flex,
}) => {
  const handleClick = (e) => {
    if (!isDisabled && !isLoading && typeof onClick === "function") {
      onClick(e);
    }
  };

  return (
    <StyledButton
      type="button"
      disabled={isDisabled || isLoading}
      onClick={handleClick}
      isLoading={isLoading}
      variant={variant}
      flex={flex}
      aria-disabled={isDisabled}
      aria-busy={isLoading}
    >
      {leftIcon && <IconWrapper>{leftIcon}</IconWrapper>}
      {text}
      {isLoading && (
        <CircularProgress size={20} color="inherit" style={{ marginLeft: 8 }} />
      )}
      {rightIcon && <IconWrapper>{rightIcon}</IconWrapper>}
    </StyledButton>
  );
};

const IconWrapper = styled.span`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default CustomButton;
