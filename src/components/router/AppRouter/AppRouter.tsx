import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomeView from "../../../views/public/HomeView";
import MainLayout from "../../layouts/MainLayout";
import { AnimatePresence } from "framer-motion";
import ProjectsView from "../../../views/public/ProjectsView";
import ContactView from "../../../views/public/ContactView";
import Header from "../../commons/Header";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routers />
    </Router>
  );
};

const Routers = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomeView />} />
        <Route path="projects" element={<ProjectsView />} />
        <Route path="contact" element={<ContactView />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRouter;
