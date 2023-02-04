import { useMediaQuery } from "../../../../../hooks/useMediaQuery";
import MenuBar from "../../../MenuBar";
import MobileMenuList from "../MobileMenuList";

const NavBar = () => {
  const isDesktop = useMediaQuery("lg");
  return <div>{isDesktop ? <MobileMenuList /> : <MenuBar />}</div>;
};

export default NavBar;
