import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";

const MainNavbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      {/* Desktop Nav */}
      <div className="hidden md:!block">
        <nav className="flex justify-between items-center py-4 px-2 lg:px-3">
          <div>
            <button className="bg-component text-color-4 hover:bg-transparent hover:ring-color-4 hover:ring-2 transition duration-300 ease-in-out font-semibold text-2xl py-1 px-6 ml-2 rounded-md">
              تسجيل دخول
            </button>
            <button className="bg-color-4 text-component hover:ring-2 hover:ring-color-4 hover:bg-transparent hover:text-color-4 transition duration-300 ease-in-out font-semibold text-2xl py-1 px-8 rounded-md">
              طالب جديد
            </button>
          </div>
          <h1 className="text-3xl">Logo</h1>
        </nav>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden fixed w-full">
        <nav className="flex justify-between px-5 py-3">
          <BiMenuAltRight
            className="text-4xl text-color-4"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <h1 className="text-3xl">Logo</h1>
        </nav>
        {toggle && (
          <ul className="flex flex-col items-center text-center text-2xl font-semibold text-color-2 bg-color-4 py-2">
            <li className="border-b-2 border-color-3 w-1/2 py-3 hover:text-cancel transition ease-in-out">
              طالب جديد
            </li>
            <li className="py-3 hover:text-cancel transition ease-in-out">
              تسجيل دخول
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default MainNavbar;
