import React, { useState } from "react";
import MainNav from "./navbar-permissions/mainNavbar";
import StudentNav from "./navbar-permissions/StudentNavbar";
const Navbar = () => {
  const [user, setUser] = useState(true);
  return (
    <div className="container mx-auto">
      {/* Unsigned Navbar */}
      {!user && <MainNav />}
      {user && <StudentNav />}
    </div>
  );
};

export default Navbar;
