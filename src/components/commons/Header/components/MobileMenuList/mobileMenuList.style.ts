import styled from "styled-components";

export const MobileMenuContainerStyle = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 1rem;
  font-size: 14px;
`;

export const MobileMenuItemStyle = styled.li`
  counter-increment: item 1;
  &::before {
    content: "0" counter(item) ".";
    color: ${({ theme }) => theme.palette.common.red};
    position: relative;
    margin-right: 0.4rem;
    font-size: 13px;
    font-weight: bold;
  }
`;
