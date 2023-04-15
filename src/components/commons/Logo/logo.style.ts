import { HTMLProps } from "react";
import styled, { FlattenSimpleInterpolation } from "styled-components";
import { BreakPoint, LogoProps, Size } from "../../../types";
import {
  BreakpoinObjectProps,
  breakpointFn,
} from "../../../configs/breakpoint";

const tams = {
  smaller: "",
  small: "40px",
  normal: "55px",
  big: "",
  verybig: "",
};

type mediaProps = {
  [key in BreakPoint]?: string;
};

const getMedia = (props: mediaProps): FlattenSimpleInterpolation => {
  const keys = Object.keys(props) as BreakPoint[];
  let objB: BreakpoinObjectProps = {};
  for (let b of keys) {
    const size = props[b] as Size;
    if (size !== undefined) objB[b] = `width: ${tams[size]};`;
  }
  return breakpointFn(objB);
};

export const LogoContainerStyle = styled.svg<
  HTMLProps<SVGAElement> & LogoProps
>`
  width: ${(props) => props.tam && tams[props.tam]};
  height: auto;
  ${(props) =>
    getMedia({
      xs: props.xs,
      sm: props.sm,
      md: props.md,
      lg: props.lg,
      xl: props.xl,
    })}
`;
