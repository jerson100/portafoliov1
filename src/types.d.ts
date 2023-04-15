import { breakpoints } from "./configs/breakpoint";

export type Color = "primary" | "secondary";
export type BreakPoint = keyof typeof breakpoints;
export type Size =
  | "smaller"
  | "small"
  | "normal"
  | "big"
  | "verybig"
  | undefined;

export interface BannerContainerProps {
  img?: string;
}

export interface DefaultPropsComponent {
  tam?: BreakPoint;
}

export interface ContainerProps extends Pick<DefaultPropsComponent, "tam"> {}

export interface LogoProps {
  tam?: Size;
  xs?: Size;
  sm?: Size;
  md?: Size;
  lg?: Size;
  xl?: Size;
}

export type mode = "light" | "dark";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      common: {
        red: string;
        white: string;
        black: string;
        yellow: string;
      };
      primary: string;
      secondary: string;
      text: {
        primary: string;
        secondary: string;
      };
      background: string;
    };
    mode: mode;
    breakpoints: typeof breakpoints;
  }
}
