import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
