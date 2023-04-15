import { useMediaQuery } from "../../../../../hooks/useMediaQuery";
import MenuBar from "../../../MenuBar";
import MobileMenuList from "../MobileMenuList";

const NavBar = () => {
  const isDesktop = useMediaQuery("lg");
  return <>{isDesktop ? <MobileMenuList /> : <MenuBar />}</>;
};

export default NavBar;
