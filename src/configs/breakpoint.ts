import {
  CSSObject,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
  css,
} from "styled-components";
import { BreakPoint } from "../types";

export const breakpoints = {
  xs: {
    value: 390,
    media: "(min-width: 390px)",
  },
  sm: {
    value: 560,
    media: "(min-width: 560px)",
  },
  md: {
    value: 768,
    media: "(min-width: 768px)",
  },
  lg: { value: 1024, media: "(min-width: 1024px)" },
  xl: { value: 1420, media: "(min-width: 1420px)" },
};

export type BreakpoinObjectProps = {
  [key in BreakPoint]?: string;
};

type BreakPointFnReturnType = (
  first: TemplateStringsArray | CSSObject,
  ...interpolations: SimpleInterpolation[]
) => FlattenSimpleInterpolation;

export function breakpointFn(
  breakpoint: BreakpoinObjectProps
): FlattenSimpleInterpolation;

export function breakpointFn(breakpoint: BreakPoint): BreakPointFnReturnType;

//firma de implementación de la función
export function breakpointFn(
  breakpoint: BreakPoint | BreakpoinObjectProps
): BreakPointFnReturnType | FlattenSimpleInterpolation {
  if (typeof breakpoint === "string") {
    return (
      first: TemplateStringsArray | CSSObject,
      ...interpolations: SimpleInterpolation[]
    ) =>
      css`
        @media screen and ${breakpoints[breakpoint].media} {
          ${css(first, ...interpolations)}
        }
      `;
  }
  let ac = "";
  for (let b of Object.keys(breakpoint) as BreakPoint[]) {
    ac += `
        @media screen and ${breakpoints[b].media} {
            ${breakpoint[b]}
        }
    `;
  }
  return css`
    ${ac}
  `;
}
