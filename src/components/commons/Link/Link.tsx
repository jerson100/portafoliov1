import { LinkStyle } from "./link.style";
import React from "react";

interface LinkProps {
  to: string;
  children: React.ReactNode | React.ReactNode[];
  onClick: () => void;
}

const Link = ({ to, children, onClick }: LinkProps) => {
  return (
    <LinkStyle to={to} onClick={onClick}>
      {children}
    </LinkStyle>
  );
};

export default Link;
