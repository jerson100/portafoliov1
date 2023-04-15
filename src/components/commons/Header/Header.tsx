import Container from "../Container/Container";
import Logo from "../Logo";
import NavBar from "./components/NavBar";
import { HeaderContainerStyle, HeaderContentStyle } from "./header.style";

const Header = () => {
  return (
    <HeaderContainerStyle>
      <Container>
        <HeaderContentStyle>
          <Logo tam="small" lg="normal" />
          <NavBar />
        </HeaderContentStyle>
      </Container>
    </HeaderContainerStyle>
  );
};

export default Header;
