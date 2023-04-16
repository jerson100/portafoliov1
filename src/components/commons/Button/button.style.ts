import styled, { css } from "styled-components";
import { DefaultButtonProps } from "../../../types";
import { commonColors } from "../../../configs/colors";
import Color from "color";

const variants = {
  primary: {
    contained: {
      backgroundColor: commonColors.lightRed,
      color: commonColors.white,
      border: commonColors.lightRed,
      hover: Color(commonColors.lightRed).darken(0.1).rgb().toString(),
    },
    outlined: {
      backgroundColor: "transparent",
      color: commonColors.lightRed,
      border: commonColors.lightRed,
      hover: Color(commonColors.lightRed).alpha(0.1).rgb().toString(),
    },
    link: {
      backgroundColor: "transparent",
      color: commonColors.lightRed,
      border: `none`,
      hover: "transparent",
    },
  },
  secondary: {
    contained: {
      backgroundColor: commonColors.lightYellow,
      color: commonColors.lightYellow,
      border: commonColors.lightYellow,
      hover: Color(commonColors.lightYellow).darken(0.1).rgb().toString(),
    },
    outlined: {
      backgroundColor: "transparent",
      color: commonColors.lightYellow,
      border: commonColors.lightYellow,
      hover: Color(commonColors.lightYellow).alpha(0.1).rgb().toString(),
    },
    link: {
      backgroundColor: "transparent",
      color: commonColors.lightYellow,
      border: `none`,
      hover: "transparent",
    },
  },
  default: {
    contained: {
      backgroundColor: commonColors.lightRed,
      color: commonColors.lightRed,
      border: commonColors.lightRed,
      hover: Color(commonColors.lightRed).darken(0.1).rgb().toString(),
    },
    outlined: {
      backgroundColor: "transparent",
      color: commonColors.lightRed,
      border: commonColors.lightRed,
      hover: Color(commonColors.lightRed).alpha(0.1).rgb().toString(),
    },
    link: {
      backgroundColor: "transparent",
      color: commonColors.lightRed,
      border: `none`,
      hover: "transparent",
    },
  },
  danger: {
    contained: {
      backgroundColor: commonColors.lightRed,
      color: commonColors.lightRed,
      border: commonColors.lightRed,
      hover: Color(commonColors.lightRed).darken(0.1).rgb().toString(),
    },
    outlined: {
      backgroundColor: "transparent",
      color: commonColors.lightRed,
      border: commonColors.lightRed,
      hover: Color(commonColors.lightRed).alpha(0.1).rgb().toString(),
    },
    link: {
      backgroundColor: "transparent",
      color: commonColors.lightRed,
      border: `none`,
      hover: "transparent",
    },
  },
};

const sizes = {
  small: {
    padding: "0.5rem 1rem",
    fontSize: "0.75rem",
  },
  smaller: {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
  },
  normal: {
    padding: ".5rem 1rem",
    fontSize: "1rem",
  },
  big: {
    padding: "1.25rem 2.5rem",
    fontSize: "1.5rem",
  },
  verybig: {
    padding: "1.5rem 3rem",
    fontSize: "1.75rem",
  },
};

export const ButtonStyle = styled.button<
  Pick<DefaultButtonProps, "variant" | "size" | "color" | "disabled">
>`
  outline: none;
  cursor: pointer;
  transition: transform 0.15s ease-in-out, color 0.15s ease-in-out,
    background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  -webkit-appearance: button;
  white-space: nowrap;
  line-height: 1.5;
  font-size: 1rem;
  border-radius: 0.25rem;
  &:active {
    transform: scale(0.95);
  }
  ${({ variant, color }) => {
    const variantType = variant || "contained";
    const colorType = color || "default";
    return css`
      background-color: ${variants[colorType][variantType].backgroundColor};
      color: ${variants[colorType][variantType].color};
      border: solid 1px ${variants[colorType][variantType].border};
      &:hover {
        background-color: ${variants[colorType][variantType].hover};
      }
      &:focus {
        box-shadow: 0 0 0 0.2rem ${variants[colorType][variantType].border};
      }
    `;
  }}
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.65;
      pointer-event: none;
    `}

    ${({ size }) =>
    size &&
    css`
      padding: ${sizes[size].padding};
      font-size: ${sizes[size].fontSize};
    `}
`;
