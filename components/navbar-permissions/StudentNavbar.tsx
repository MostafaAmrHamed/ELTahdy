import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { BiMenuAltRight } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

const StudentNavbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* Desktop Nav */}
      <div className="container mx-auto hidden md:!block ">
        <nav className="flex justify-between items-center py-4 px-2 lg:px-3">
          <OutsideClickHandler
            onOutsideClick={() => {
              setOpen(false);
            }}
          >
            <button
              className="flex items-center gap-2 bg-color-4 text-color-1 hover:text-component transition duration-300 ease-in-out font-medium text-2xl py-1 px-3 rounded-md"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <FaUserCircle />
              مصطفي عمرو حامد
            </button>
            {open && (
              <ul className="absolute text-xl bg-color-4 text-color-1 py-2 w-[150px] mt-2 rounded-md shadow-md">
                <li
                  className="border-b-2 border-color-3 pr-2 hover:bg-cancel hover:cursor-pointer transition ease-in-out"
                  onClick={() => {
                    setActive("");
                    setOpen(false);
                  }}
                >
                  تغير كلمة السر
                </li>
                <li
                  className="mt-1 pr-2 hover:bg-cancel hover:cursor-pointer transition ease-in-out"
                  onClick={() => {
                    setActive("");
                    setOpen(false);
                  }}
                >
                  تسجيل الخروج
                </li>
              </ul>
            )}
          </OutsideClickHandler>
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
              <span className="bg-cancel px-2 text-color-2 text-center rounded-full">
                2
              </span>
            </li>
          </ul>
          <h1 className="text-3xl">Logo</h1>
        </nav>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden w-full">
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
            <li
              className="border-b-2 border-color-3 w-1/2 py-3 hover:text-cancel transition ease-in-out"
              onClick={() => {
                setToggle(false);
              }}
            >
              الصفحة الرئيسية
            </li>
            <li
              className="flex gap-2 items-center relative"
              onClick={() => {
                setToggle(false);
              }}
            >
              <h1 className="py-3 hover:text-cancel transition ease-in-out">
                الامتحانات
              </h1>
              <span className="bg-cancel text-color-2 px-2 text-xl rounded-full">
                2
              </span>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default StudentNavbar;
