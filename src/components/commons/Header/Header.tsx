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
            <Button variant="outlined">Resumen</Button>
          </ResumeButtonContainerStyle>
        </HeaderContentStyle>
      </Container>
    </HeaderContainerStyle>
  );
};

export default Header;
