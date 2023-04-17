import styled from "styled-components";
import { motion } from "framer-motion";
import Typography from "../../../components/commons/Typography/Typography";
export const ProjectContainerStyle = styled(motion.div)`
  min-height: inherit;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const ProjectTitleStlye = styled(motion.span)`
  display: inline-block;
  &::before {
    content: "04.";
    color: #cd2368;
    position: relative;
    margin-right: 0.4rem;
    font-size: 0.6em;
    font-weight: bold;
  }
  &:after {
    content: "";
    position: relative;
    width: 50px;
    height: 5px;
    background-color: ${({ theme }) => theme.palette.primary};
  }
`;

export const ProjetListStyle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const ProjectViewTitleStyle = styled(Typography)`
  margin-bottom: 2.5rem;
`;

export const ProjectButtonNextStyle = styled(motion.div)`
  display: flex;
  justify-content: center;
`;
