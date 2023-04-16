import { DefaultButtonProps } from "../../../types";
import { ButtonStyle } from "./button.style";

const Button = ({
  children,
  size = "normal",
  variant = "contained",
  color = "primary",
  disabled = false,
  ...restProps
}: DefaultButtonProps) => {
  return (
    <ButtonStyle
      disabled={disabled}
      color={color}
      variant={variant}
      size={size}
      {...restProps}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
