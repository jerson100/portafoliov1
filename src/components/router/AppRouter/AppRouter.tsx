import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from "../../../views/public/HomeView";
import MainLayout from "../../layouts/MainLayout";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeView />} />
          <Route path="home" element={<HomeView />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
