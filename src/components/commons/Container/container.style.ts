import styled from "styled-components";

export const ContainerStyle = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.lg.value}px;
`;
