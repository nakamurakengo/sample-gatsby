import React, { ReactNode } from "react";
import "../styles/global.scss";

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="Layout">{children}</div>;
};

export default Layout;
