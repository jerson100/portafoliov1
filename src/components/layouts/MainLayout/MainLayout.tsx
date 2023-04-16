import { FunctionComponent, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";

const MainLayout: FunctionComponent<PropsWithChildren> = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default MainLayout;
