import styled from "@emotion/styled";
import { ButtonVariant } from "../../types/component";
import colors from "../../styles/colors";

export const StyledButton = styled.button<{
  variant: ButtonVariant;
}>`
  border: none;
  font-weight: bold;
  font-size: 12px;
  letter-spacing: 2px;
  line-height: auto;

  cursor: pointer;
  ${({ variant }) =>
    variant === "primary" &&
    `
    padding: 10px 20px;
    background-color : transparent;
    color: ${colors.white};
    
    &:hover {
      background-color: ${colors.secondary01};
      color: black;
    }
  `}

  ${({ variant }) =>
    variant === "secondary" &&
    `
    
    color: ${colors.white};
    display: flex;
    align-items: center;
    gap: 20px;
    background-color : transparent;
    &:hover {
      text-decoration: underline;
    }
  `}
   ${({ variant }) =>
    variant === "tertiary" &&
    `
    
    color: ${colors.black};
    display: flex;
    align-items: center;
    gap: 20px;
    background-color : transparent;
    &:hover {
      text-decoration: underline;
      color: black;
    }
  `}
`;
