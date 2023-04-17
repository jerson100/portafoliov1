import { HeadingStyle } from "./typography.style";
import { TypographyProps } from "../../../types";

const Typography = ({
  component = "p",
  variant,
  children,
  ...props
}: TypographyProps) => {
  return (
    <HeadingStyle
      as={component}
      component={component}
      variant={variant ? variant : component}
      {...props}
    >
      {children}
    </HeadingStyle>
  );
};

export default Typography;
