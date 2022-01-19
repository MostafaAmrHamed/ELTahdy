import React from "react";
import Navbar from "./Navbar";
const Layout: React.FC = ({ children }) => {
  return (
    <div className="bg-background">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
