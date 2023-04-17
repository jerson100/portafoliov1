import { breakpoints } from "./configs/breakpoint";
import { commonColors } from "./configs/colors";
import { HTMLAttributes } from "react";

export type Color = "primary" | "secondary" | "danger" | "default";
export type BreakPoint = keyof typeof breakpoints;
export type Size =
  | "smaller"
  | "small"
  | "normal"
  | "big"
  | "verybig"
  | undefined;

export type TypographyComponent = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
export type TypographyVariants = TypographyComponent;

export type TypographyProps = {
  variant?: TypographyVariants;
  component?: TypographyComponent;
} & HTMLAttributes<HTMLHeadingElement>;

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

export type ButtonVariants = "outlined" | "contained" | "link";

export interface DefaultButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  size?: Size;
  color?: Color;
  disabled?: boolean;
}

export type mode = "light" | "dark";

export interface IProject {
  _id: string;
  title: string;
  createdAt: Date;
  description: string;
  image: string;
  tags: string[];
  source: string;
  linkApp: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      common: typeof commonColors;
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
