import { FunctionComponent, PropsWithChildren } from "react";
import {
  MainLayoutContainerStyle,
  MainLayoutContentStyle,
} from "./mainLayout.style";

const MainLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <MainLayoutContainerStyle>
      <MainLayoutContentStyle>{children}</MainLayoutContentStyle>
    </MainLayoutContainerStyle>
  );
};

export default MainLayout;
