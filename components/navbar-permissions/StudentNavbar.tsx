import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

const StudentNavbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("home");
  return (
    <div>
      {/* Desktop Nav */}
      <div className="hidden md:!block">
        <nav className="flex justify-between items-center py-4 px-2 lg:px-3">
          <button className="flex items-center gap-2 bg-color-4 text-color-1 hover:text-component transition duration-300 ease-in-out font-medium text-2xl py-1 px-3 rounded-md">
            <FaUserCircle />
            مصطفي عمرو حامد
          </button>
          <ul className="flex justify-around gap-2 bg-color-2 w-1/2 text-color-3 font-semibold py-2 rounded-md">
            <li
              className="text-3xl hover:text-color-4 hover:cursor-pointer"
              style={{ color: active === "home" ? "#6159e6" : "" }}
              onClick={() => {
                setActive("home");
              }}
            >
              الصفحة الرئيسية
            </li>
            <li
              className="flex gap-2 items-center"
              style={{ color: active === "exams" ? "#6159e6" : "" }}
              onClick={() => {
                setActive("exams");
              }}
            >
              <h1 className="text-3xl hover:text-color-4 hover:cursor-pointer">
                الامتحانات
              </h1>
              <p className="bg-cancel text-color-2 w-6 h-6 text-center rounded-full">
                2
              </p>
            </li>
          </ul>
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
              الصفحة الرئيسية
            </li>
            <li className="py-3 hover:text-cancel transition ease-in-out">
              الامتحانات
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default StudentNavbar;
