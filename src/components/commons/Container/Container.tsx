import { FunctionComponent, PropsWithChildren } from "react";
import { ContainerProps } from "../../../types";
import { ContainerStyle } from "./container.style";

const Container: FunctionComponent<PropsWithChildren & ContainerProps> = ({
  children,
  tam = "lg",
}) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};

export default Container;
