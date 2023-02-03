import AppRouter from "./components/router/AppRouter";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import ThemeConfig from "./configs/theme";

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

const theme = {
  theme: "light",
  colors: ThemeConfig.colors,
};
function App() {
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
