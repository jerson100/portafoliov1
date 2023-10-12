import {
  BannerBgStyle,
  BannerContainerStyle,
  BannerContentStyle,
  BannerImageStyle,
  BannerImagesStyle,
  BannerInfoStyle,
  BannerLineStyle,
} from "./home.style";
import { motion } from "framer-motion";
import {
  BannerContainerVariants,
  BannerInfoVariants,
  BannerLineVariants,
  VerticalVariants,
} from "./home.variants";
import bgCircle from "../../../assets/img/svgs/bg_circle.svg";
import jerson from "../../../assets/img/png/jerson.webp";
import Container from "../../../components/commons/Container/Container";

const HomeView = () => {
  return (
    <BannerContainerStyle
      initial="hidden"
      animate="show"
      exit="exit"
      variants={BannerContainerVariants}
    >
      <Container>
        <BannerContentStyle>
          <BannerInfoStyle
            initial="hidden"
            animate="show"
            exit="exit"
            variants={BannerInfoVariants}
          >
            <BannerLineStyle variants={BannerLineVariants} />
            <motion.p
              custom={"50px"}
              variants={VerticalVariants}
              className="first"
            >
              <span>Hi,</span> I'm
            </motion.p>
            <motion.h1
              custom={"50px"}
              variants={VerticalVariants}
              className="name"
            >
              Jerson Ramírez
            </motion.h1>
            <motion.p
              custom={"50px"}
              variants={VerticalVariants}
              className="profile"
            >
              Full Stack Developer
            </motion.p>
          </BannerInfoStyle>
          <BannerImagesStyle>
            <BannerBgStyle
              src={bgCircle}
              custom="20px"
              variants={VerticalVariants}
              alt="Círculo de fondo"
              title="Círculo de fondo"
            />
            <BannerImageStyle
              src={jerson}
              width={433}
              height={586}
              custom="-100px"
              alt="Jerson Ramírez"
              title="Jerson Ramírez"
              variants={VerticalVariants}
            />
          </BannerImagesStyle>
        </BannerContentStyle>
      </Container>
      <motion.div
        className="bottom_stars"
        custom={"30px"}
        variants={VerticalVariants}
      ></motion.div>
    </BannerContainerStyle>
  );
};

export default HomeView;
