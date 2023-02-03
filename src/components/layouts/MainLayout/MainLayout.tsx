import { FunctionComponent, PropsWithChildren } from "react";
import Header from "../../commons/Header";
import { Outlet } from "react-router-dom";

const MainLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;
