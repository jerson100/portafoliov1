import { DefaultTheme } from "styled-components";
import { colors } from "./colors";
import { breakpoints } from "./breakpoint";

export const lightTheme: DefaultTheme = {
  palette: colors.light,
  mode: "light",
  breakpoints: breakpoints,
};

export const darkTheme: DefaultTheme = {
  palette: colors.dark,
  mode: "dark",
  breakpoints: breakpoints,
};
