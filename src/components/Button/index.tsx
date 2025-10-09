import type React from "react";
import { StyledButton } from "./styles";
import { ButtonVariant } from "../../types/component";

interface ButtonProps {
  variant: ButtonVariant;
  label?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ variant, label, children, onClick }: ButtonProps) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {label}
      {children}
    </StyledButton>
  );
};

export default Button;
