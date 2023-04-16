import Color from "color";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const MobileMenuContainerStyle = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 1rem;
  font-size: 1rem;
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

export const MobileNavigationStyle = styled.nav`
  border: solid 1px ${({ theme }) => theme.palette.primary};
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: ${({ theme }) =>
    Color(theme.palette.primary).alpha(0.1).rgb().toString()};
`;

export const MobileMenuItemlinkStyle = styled(Link)`
  color: inherit;
  text-decoration: none;
  display: inline-block;
`;
