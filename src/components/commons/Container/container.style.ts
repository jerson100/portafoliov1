import { HTMLProps } from "react";
import styled from "styled-components";
import { Size } from "../../../types";

export const ContainerStyle = styled.div<
  HTMLProps<HTMLDivElement> & { breakpoint: Size }
>`
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.lg.value}px;
`;
