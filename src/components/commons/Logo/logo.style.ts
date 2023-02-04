import { HTMLProps } from "react";
import styled from "styled-components";
import { LogoProps, Size } from "../../../types";

const tams = {
  smaller: "",
  small: "40px",
  normal: "55px",
  big: "",
  verybig: "",
};

export const LogoContainerStyle = styled.svg<
  HTMLProps<SVGAElement> & LogoProps
>`
  width: ${(props) => props.tam && tams[props.tam]};
  height: auto;
  ${({ sm, theme }) =>
    sm &&
    `
    @media screen and (${theme.breakpoints.sm.media}) {
        width: ${tams[sm]};
    }
  `}
  ${({ md, theme }) =>
    md &&
    `
    @media screen and (${theme.breakpoints.md.media}) {
        width: ${tams[md]};
    }
  `}
  ${({ lg, theme }) =>
    lg &&
    `
    @media screen and (${theme.breakpoints.lg.media}) {
        width: ${tams[lg]};
    }
  `}
  ${({ xl, theme }) =>
    xl &&
    `
    @media screen and (${theme.breakpoints.xl.media}) {
        width: ${tams[xl]};
    }
  `}
`;
