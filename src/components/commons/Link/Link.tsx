import { LinkStyle } from "./link.style";
import React from "react";

interface LinkProps {
  to: string;
  children: React.ReactNode | React.ReactNode[];
}

const Link = ({ to, children }: LinkProps) => {
  return <LinkStyle to={to}>{children}</LinkStyle>;
};

export default Link;
