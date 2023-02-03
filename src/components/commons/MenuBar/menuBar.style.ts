import styled from "styled-components";

export const MenuBarContainerStyle = styled.div`
  width: 25px;
  height: 3px;
  background-color: #cd2368;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: -6px;
    left: 0;
    background-color: inherit;
    width: inherit;
    height: inherit;
  }
  &::after {
    content: "";
    position: absolute;
    top: 6px;
    left: 0;
    background-color: inherit;
    width: inherit;
    height: inherit;
  }
`;
