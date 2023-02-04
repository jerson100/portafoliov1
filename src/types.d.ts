export type Color = "primary" | "secondary";
export type BreakPoint = "xs" | "sm" | "md" | "lg" | "xl";
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

export interface LogoProps extends Pick<DefaultPropsComponent, "tam"> {
  tam?: Size;
  xs?: Size;
  sm?: Size;
  md?: Size;
  lg?: Size;
  xl?: Size;
}
