import { createContext, useCallback, useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../configs/globalStyle";
import { darkTheme, lightTheme } from "../configs/theme";

interface ThemeContextProps {
  children: React.ReactNode | React.ReactNode[];
}

const ThemeContext = createContext({});

const ThemeStyleComponents = ({ children }: ThemeContextProps) => {
  const [theme, setTheme] = useState(darkTheme);
  const updateTheme = useCallback((): void => {
    setTheme(darkTheme);
  }, []);
  const values = useMemo(
    () => ({ updateTheme, mode: theme.mode }),
    [updateTheme]
  );
  return (
    <ThemeContext.Provider value={values}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeStyleComponents };
