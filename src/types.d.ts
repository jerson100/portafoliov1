export type Color = "primary" | "secondary";
export type Size = "xs" | "sm" | "md" | "lg" | "xl";

export interface BannerContainerProps {
  img?: string;
}

export interface ContainerProps {
  size?: Size;
}
