import React from "react";
import Navbar from "./Navbar";
const Layout: React.FC = ({ children }) => {
  return (
    <div className="bg-background font-body" style={{ direction: "rtl" }}>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
