import styled from "styled-components";

export const BannerContainerStyle = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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
`;

export const BannerContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: calc(55px + 1rem);
`;

export const BannerInfoStyle = styled.div`
  text-align: center;
  span {
    color: ${({
      theme: {
        palette: {
          common: { red },
        },
      },
    }) => red};
  }
  p {
    font-size: 25px;
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 35px;
    margin-bottom: 1rem;
  }
  h1 + p {
    font-size: 20px;
    margin-bottom: 0;
    color: #cd2368;
  }
`;
export const BannerImageStyle = styled.img`
  /* width: 80%;
  margin: auto; */
`;
