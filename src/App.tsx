import AppRouter from "./components/router/AppRouter";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
    padding: 0;
    margin: 0;
    box-Sizing: border-box;
    background-color: #1B1B1B;
    color: #fff
  }

`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppRouter />
    </>
  );
}

export default App;
