import styled from "styled-components";
import { breakpointFn } from "../../../configs/breakpoint";
import { motion } from "framer-motion";

export const HeaderContainerStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  backdrop-filter: blur(10px);
  ${breakpointFn("lg")`
    height: 80px;
  `}
`;

export const HeaderContentStyle = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuBarContainerStyle = styled.div`
  border: solid 1px blue;
`;

export const ResumeButtonContainerStyle = styled(motion.div)`
  display: none;
  ${breakpointFn("lg")`
     display: block;
  `}
`;
