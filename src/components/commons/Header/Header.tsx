import Button from "../Button/Button";
import Container from "../Container/Container";
import Logo from "../Logo";
import NavBar from "./components/NavBar";
import { motion } from "framer-motion";
import {
  HeaderContainerStyle,
  HeaderContentStyle,
  ResumeButtonContainerStyle,
} from "./header.style";
import {
  HeaderContainerVariants,
  HeaderItemScaleVariants,
  HeaderItemVariants,
} from "./header.variants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainerStyle>
      <Container>
        <HeaderContentStyle
          initial="hidden"
          animate="show"
          variants={HeaderContainerVariants}
        >
          <motion.div custom="-20px" variants={HeaderItemVariants}>
            <Logo tam="small" lg="normal" />
          </motion.div>
          <motion.div custom={0} variants={HeaderItemScaleVariants}>
            <NavBar />
          </motion.div>
          <ResumeButtonContainerStyle
            custom="-20px"
            variants={HeaderItemVariants}
          >
            <Button
              variant="outlined"
              linkComponent={Link}
              to="assets/pdf/cv.pdf"
              target="_blank"
            >
              Descargar Cv
            </Button>
          </ResumeButtonContainerStyle>
        </HeaderContentStyle>
      </Container>
    </HeaderContainerStyle>
  );
};

export default Header;
