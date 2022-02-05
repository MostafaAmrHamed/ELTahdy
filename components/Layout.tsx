import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout: React.FC = ({ children }) => {
  return (
    <div
      className="flex flex-col justify-between bg-background font-body"
      style={{ direction: "rtl" }}
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
