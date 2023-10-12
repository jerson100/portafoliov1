import { LinkProps } from "react-router-dom";
import { LinkStyle } from "./link.style";
import React from "react";

interface LinkPropss extends LinkProps {
  to: string;
  children: React.ReactNode | React.ReactNode[];
  onClick?: () => void;
}

const Link = ({ to, children, onClick, ...props }: LinkPropss) => {
  return (
    <LinkStyle to={to} onClick={onClick} {...props}>
      {children}
    </LinkStyle>
  );
};

export default Link;
