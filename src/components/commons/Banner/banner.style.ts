import { HTMLProps } from "react";
import styled from "styled-components";
import { BannerContainerProps } from "../../../types";

export const BannerContainerStyle = styled.div<
  HTMLProps<HTMLDivElement> & BannerContainerProps
>`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: linear-gradient(180deg, #f97d9826, #1b1b1b);
  background-size: 100% 50%;
  /*
  background: linear-gradient(180deg, #f97d9830, #1b1b1b);
  background-size: 100% 20%;
  */
  /*background: rgb(249, 125, 152);
  background: radial-gradient(
    circle,
    rgba(249, 125, 152, 1) 0%,
    rgba(27, 27, 27, 1) 70%
  );*/
  background-repeat: no-repeat;

  --width-star: 75px;
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
  .arc {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: cover;
  }
`;

export const BannerContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 55px;
  align-items: center;
  text-align: center;
  @media screen and (${(props) => props.theme.breakpoints.lg.media}) {
    flex-direction: row;
    text-align: left;
    gap: 86px;
  }
`;

export const BannerInfoStyle = styled.div`
  position: relative;
  flex-grow: 1;
  --h-line: 5px;
  max-width: 336px;
  &::before {
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
    @media screen and (${(props) => props.theme.breakpoints.lg.media}) {
      left: 0;
      transform: translateX(0);
    }
    top: calc(-1 * var(--h-line));
  }
  span {
    color: ${({
      theme: {
        palette: {
          common: { red },
        },
      },
    }) => red};
  }
  p:first-child {
    font-size: 25px;
    margin-bottom: 1rem;
    margin-top: 1rem;
    @media screen and (${(props) => props.theme.breakpoints.lg.media}) {
      font-size: 35px;
    }
  }
  h1 {
    font-size: 35px;
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 1rem;
    margin-left: 0;
    @media screen and (${(props) => props.theme.breakpoints.lg.media}) {
      font-size: 70px;
    }
  }
  h1 + p {
    font-size: 20px;
    color: #cd2368;
    @media screen and (${(props) => props.theme.breakpoints.lg.media}) {
      font-size: 28px;
    }
  }
`;
export const BannerImageStyle = styled.img`
  flex-grow: 1;
  max-width: 100%;
`;
