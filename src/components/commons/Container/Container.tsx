import { FunctionComponent, PropsWithChildren } from "react";
import { ContainerProps } from "../../../types";
import { ContainerStyle } from "./container.style";

const Container: FunctionComponent<PropsWithChildren & ContainerProps> = ({
  children,
  size = "lg",
}) => {
  return <ContainerStyle breakpoint={size}>{children}</ContainerStyle>;
};

export default Container;
