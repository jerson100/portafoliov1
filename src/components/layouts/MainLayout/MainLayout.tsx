import { FunctionComponent, PropsWithChildren } from "react";
import Header from "../../commons/Header";

const MainLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default MainLayout;
