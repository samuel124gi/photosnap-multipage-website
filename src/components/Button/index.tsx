import type React from "react";
import { StyledButton } from "./styles";
import { ButtonVariant } from "../../types/component";
import { CSSProperties } from "react";

interface ButtonProps {
  variant: ButtonVariant;
  label?: string;
  children?: React.ReactNode;
  style?: CSSProperties;
  onClick?: () => void;
}

export const Button = ({
  variant,
  label,
  children,
  style,
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton variant={variant} onClick={onClick} style={style}>
      {label || children}
    </StyledButton>
  );
};

export default Button;
