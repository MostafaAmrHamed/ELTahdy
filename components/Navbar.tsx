import React, { useState } from "react";
import MainNav from "./navbar-permissions/MainNavbar";
import StudentNav from "./navbar-permissions/StudentNavbar";
import AdmintNav from "./navbar-permissions/AdminNavbar";
const Navbar = () => {
  const [user, setUser] = useState(true);
  return (
    <div>
      {!user && <MainNav />}
      {user && <AdmintNav />}
    </div>
  );
};

export default Navbar;
