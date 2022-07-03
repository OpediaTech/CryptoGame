import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";

function Layout({ children }) {
  return (
    <div className="Layout">
      {/* <Header /> */}
      {children}
      <Menu />
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
