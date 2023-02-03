import styled from "styled-components";

export const HeaderContainerStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 55px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10000;
  @media screen and (${(props) => props.theme.breakpoints.lg.media}) {
    padding-left: 40px;
    padding-right: 40px;
    height: 80px;
  }
`;

export const MenuBarContainerStyle = styled.div`
  border: solid 1px blue;
`;
