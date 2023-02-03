import {
  BannerContainerStyle,
  BannerContentStyle,
  BannerImageStyle,
  BannerInfoStyle,
} from "./banner.style";

import jersonMobile from "../../../assets/img/png/jerson_mobile.png";

const Banner = () => {
  return (
    <BannerContainerStyle>
      <BannerContentStyle>
        <BannerInfoStyle>
          <p>
            <span>Howdy,</span> I'm
          </p>
          <h1>Jerson Ramírez</h1>
          <p>Frontend Developer</p>
        </BannerInfoStyle>
        <BannerImageStyle src={jersonMobile} />
      </BannerContentStyle>
    </BannerContainerStyle>
  );
};

export default Banner;
