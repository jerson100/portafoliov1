import { HTMLProps } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { BannerContainerProps } from "../../../types";
import { breakpointFn } from "../../../configs/breakpoint";

export const BannerContainerStyle = styled(motion.div)<
  HTMLProps<HTMLDivElement> & BannerContainerProps
>`
  --width-star: 75px;
  min-height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  .bottom_stars {
    background-image: url("/assets/img/structure02.png");
    background-position: 80% 80%;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    bottom: 45px;
    right: 34px;
    content: "";
    width: var(--width-star);
    height: var(--width-star);
    z-index: 1;
  }
  /*
  .arc {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: cover;
  }*/
`;

export const BannerContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  ${breakpointFn("lg")`
    flex-direction: row;
    text-align: left;
    gap: 86px;
  }`}
`;
export const BannerLineStyle = styled(motion.div)`
  --h-line: 5px;
  width: 120px;
  height: var(--h-line);
  content: "";
  background: ${({
    theme: {
      palette: {
        common: { red },
      },
    },
  }) => red};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: calc(-1 * var(--h-line));
  ${breakpointFn("lg")`
        font-size: 35px;
        left: 0;
        transform: translateX(0);
    `}
`;
export const BannerInfoStyle = styled(motion.div)`
  position: relative;
  flex-grow: 1;
  max-width: 336px;
  span {
    color: ${({
      theme: {
        palette: {
          common: { red },
        },
      },
    }) => red};
  }
  .first {
    font-size: 25px;
    margin-bottom: 1rem;
    margin-top: 1rem;
    ${breakpointFn("lg")`
        font-size: 35px;
    `}
  }
  .name {
    font-size: 35px;
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 1rem;
    margin-left: 0;
    ${breakpointFn("lg")`
        font-size: 70px;   
    `}
  }
  .profile {
    font-size: 20px;
    margin: 0;
    color: #cd2368;
    ${breakpointFn("lg")`
        font-size: 28px;   
    `}
  }
`;
export const BannerImageStyle = styled(motion.img)`
  z-index: 2;
  position: relative;
  width: 100%;
  max-width: 257px;
  height: auto;
  ${breakpointFn("lg")`
    max-width: 500px;
  `}
`;
export const BannerBgStyle = styled(motion.img)`
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translateY(-50%);
  z-index: 1;
  width: 100%;
`;
export const BannerImagesStyle = styled(motion.div)`
  flex-grow: 1;
  position: relative;
  display: flex;
  pointer-events: none;
  user-select: none;
  justify-content: flex-end;
`;
