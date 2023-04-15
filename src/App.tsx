import AppRouter from "./components/router/AppRouter";
import { ThemeStyleComponents } from "./contexts/ThemeStyleComponents";

function App() {
  return (
    <>
      <ThemeStyleComponents>
        <AppRouter />
      </ThemeStyleComponents>
    </>
  );
}

export default App;
