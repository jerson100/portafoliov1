import styled from "styled-components";
import { breakpointFn } from "../../../configs/breakpoint";
import { TypographyProps } from "../../../types";

const sizes = {
  p: {
    xs: "1rem",
    sm: "1rem",
    md: "1rem",
    lg: "1rem",
    xl: "1rem",
  },
  h1: {
    xs: "2.5rem",
    sm: "3rem",
    md: "3.5rem",
    lg: "4rem",
    xl: "4.5rem",
  },
  h2: {
    xs: "2rem",
    sm: "2.5rem",
    md: "3rem",
    lg: "3.5rem",
    xl: "4rem",
  },
  h3: {
    xs: "1.5rem",
    sm: "2rem",
    md: "2.5rem",
    lg: "3rem",
    xl: "3.5rem",
  },
  h4: {
    xs: "1.25rem",
    sm: "1.5rem",
    md: "1.75rem",
    lg: "2rem",
    xl: "2.25rem",
  },
  h5: {
    xs: "1rem",
    sm: "1.25rem",
    md: "1.5rem",
    lg: "1.75rem",
    xl: "2rem",
  },
  h6: {
    xs: "0.75rem",
    sm: "1rem",
    md: "1.25rem",
    lg: "1.5rem",
    xl: "1.75rem",
  },
};

export const HeadingStyle = styled.p<
  Required<Pick<TypographyProps, "variant" | "component">>
>`
  font-size: ${({ variant }) => sizes[variant].xs};
  font-weight: ${({ component }) => (component === "p" ? "normal" : "700")};
  margin-bottom: 1rem;
  margin-top: 0;
  color: inherit;
  ${({ variant }) =>
    breakpointFn({
      sm: `font-size: ${sizes[variant].sm};`,
      md: `font-size: ${sizes[variant].md};`,
      lg: `font-size: ${sizes[variant].lg};`,
    })}
`;
