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
    background-color: #1B1B1B;
    color: #fff
  }

    body{
        font-family: 'Inter', sans-serif;
    }

`;

function App() {
  const theme: DefaultTheme = {
    theme: "light",
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
