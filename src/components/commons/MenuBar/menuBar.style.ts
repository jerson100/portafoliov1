import { motion } from "framer-motion";
import styled from "styled-components";

// export const MenuBarContainerStyle = styled.div`
//   width: 25px;
//   height: 3px;
//   background-color: #cd2368;
//   position: relative;
//   &::before {
//     content: "";
//     position: absolute;
//     top: -6px;
//     left: 0;
//     background-color: inherit;
//     width: inherit;
//     height: inherit;
//   }
//   &::after {
//     content: "";
//     position: absolute;
//     top: 6px;
//     left: 0;
//     background-color: inherit;
//     width: inherit;
//     height: inherit;
//   }
// `;

export const MenuBarContainerStyle = styled(motion.div)`
  position: fixed;
  right: 1rem;
  top: 1rem;
  z-index: 10000;
`;

export const MenuBarBgStyle = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: -1;
`;

export const MenuItemStyle = styled(motion.li)`
  font-size: 1.1rem;
  display: block;

  a {
    color: #fff;
  }
`;

export const MenuBarListStyle = styled(motion.ul)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.8rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;
