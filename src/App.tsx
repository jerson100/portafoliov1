import AppRouter from "./components/router/AppRouter";
import {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider,
} from "styled-components";
import * as ThemeConfig from "./configs/theme";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
    padding: 0;
    margin: 0;
    box-Sizing: border-box;
    color: #fff
}

body{
    font-family: 'Inter', sans-serif;
    background-color: #1B1B1B;
    }

`;

function App() {
  const theme: DefaultTheme = {
    theme: "light",
    breakpoints: ThemeConfig.breakpoints,
    palette: {
      common: ThemeConfig.commonColors,
    },
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
