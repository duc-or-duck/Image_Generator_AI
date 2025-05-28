import styled from "styled-components";

export const StyledButton = styled.button`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: min-content;
  padding: 10px 24px;
  border-radius: 10px;
  color: ${({ theme }) => theme.white};
  background: ${({ variant, theme }) =>
    variant === "secondary" ? theme.secondary : theme.primary};

  /* Trạng thái disabled */
  &[disabled] {
    opacity: 0.4;
    cursor: not-allowed;
  }

  /* Trạng thái loading */
  ${({ isLoading }) =>
    isLoading &&
    `
    opacity: 0.8;
    cursor: not-allowed;
  `}

  /* Hỗ trợ flex trong layout */
  ${({ flex }) =>
    flex &&
    `
    flex: 1;
  `}

  /* Responsive design */
  @media (max-width: 600px) {
    padding: 8px 12px;
  }
`;
