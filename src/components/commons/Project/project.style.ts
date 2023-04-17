import styled from "styled-components";
import { breakpointFn } from "../../../configs/breakpoint";
import { motion } from "framer-motion";

export const ProjectContainerStyle = styled(motion.article)`
  border: solid 1px ${({ theme }) => theme.palette.primary};
  border-radius: 5px;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  ${breakpointFn("md")`
    flex-direction: row;
    align-items: center;
  `}
`;

export const ProjectInfoStyle = styled.div`
  padding: 1rem;
  order: 2;
  ${breakpointFn("md")`
    order: 1;
    padding: 1.5rem;
  `}
`;

export const ProjectTagContainerStyle = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const ProjectButtonStyle = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ProjectImageContainerStyle = styled.div`
  min-height: 250px;
  height: 100%;
  position: relative;
  order: 1;
  ${breakpointFn("md")`min-height: 400px;order:2; flex: 0 0 50%;`};
`;

export const ProjectImageStyle = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
