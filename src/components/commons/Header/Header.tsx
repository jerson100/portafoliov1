import Button from "../Button/Button";
import Container from "../Container/Container";
import Logo from "../Logo";
import NavBar from "./components/NavBar";
import {
  HeaderContainerStyle,
  HeaderContentStyle,
  ResumeButtonContainerStyle,
} from "./header.style";

const Header = () => {
  return (
    <HeaderContainerStyle>
      <Container>
        <HeaderContentStyle>
          <Logo tam="small" lg="normal" />
          <NavBar />
          <ResumeButtonContainerStyle>
            <Button variant="outlined">Resumen</Button>
          </ResumeButtonContainerStyle>
        </HeaderContentStyle>
      </Container>
    </HeaderContainerStyle>
  );
};

export default Header;
