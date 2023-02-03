import Logo from "../Logo";
import NavBar from "./components/NavBar";
import { HeaderContainerStyle } from "./header.style";

const Header = () => {
  return (
    <HeaderContainerStyle>
      <Logo />
      <NavBar />
    </HeaderContainerStyle>
  );
};

export default Header;
