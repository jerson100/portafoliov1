import styled from "styled-components";
import { breakpointFn } from "../../../configs/breakpoint";

export const MainLayoutContainerStyle = styled.div`
  min-height: calc(100vh - 55px);
  width: 100%;
  position: relative;
  margin-top: 55px;
  overflow-x: hidden;
  ${breakpointFn("lg")`
    margin-top: 80px;
    min-height: calc(100vh - 80px);
  `}
`;

export const MainLayoutContentStyle = styled.main`
  height: inherit;
  min-height: inherit;
`;
