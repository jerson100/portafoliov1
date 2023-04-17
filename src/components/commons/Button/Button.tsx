import { DefaultButtonProps } from "../../../types";
import { ButtonStyle } from "./button.style";

const Button = ({
  children,
  size = "normal",
  variant = "contained",
  color = "primary",
  disabled = false,
  linkComponent = "button",
  to = "",
  target = "_self",
  ...restProps
}:
  | DefaultButtonProps & {
      linkComponent?: any;
      to?: string;
      target?: "_self" | "_blank";
    }) => {
  console.log(target);
  return (
    <ButtonStyle
      disabled={disabled}
      color={color}
      variant={variant}
      size={size}
      as={linkComponent == undefined ? "button" : linkComponent}
      to={linkComponent == undefined ? "" : to}
      target={target}
      {...restProps}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
