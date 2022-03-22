import React, { useState } from "react";
import Link from "next/link";
import OutsideClickHandler from "react-outside-click-handler";
import { BiMenuAltRight } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropleft } from "react-icons/io";

const AdminNavbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState({
    studentMenu: false,
    examsMenu: false,
    profile: false,
  });
  return (
    <div>
      {/* Desktop Nav */}
      <div className="container mx-auto hidden md:!block ">
        <nav className="flex justify-between items-center py-4 px-2 lg:px-3">
          <OutsideClickHandler
            onOutsideClick={() => {
              setOpen({ ...open, profile: false });
            }}
          >
            <button
              className="flex items-center gap-2 bg-color-4 text-color-1 hover:text-component transition duration-300 ease-in-out font-medium text-2xl py-1 px-3 rounded-md"
              onClick={() => {
                setOpen({ ...open, profile: !open.profile });
              }}
            >
              <FaUserCircle />
              عمرو حامد
            </button>
            {open.profile && (
              <ul className="absolute text-xl bg-color-4 text-color-1 py-2 w-[150px] mt-2 rounded-md shadow-md">
                <li
                  className="border-b-2 border-color-3 pr-2 hover:bg-cancel hover:cursor-pointer transition ease-in-out"
                  onClick={() => {
                    setActive("");
                    setOpen({
                      ...open,
                      profile: false,
                    });
                  }}
                >
                  تغير كلمة السر
                </li>
                <li
                  className="mt-1 pr-2 hover:bg-cancel hover:cursor-pointer transition ease-in-out"
                  onClick={() => {
                    setActive("");
                    setOpen({
                      ...open,
                      profile: false,
                    });
                  }}
                >
                  تسجيل الخروج
                </li>
              </ul>
            )}
          </OutsideClickHandler>
          <ul className="flex justify-around text-2xl lg:text-3xl gap-5 lg:gap-8 bg-color-2 w-auto text-color-3 font-semibold py-2 px-5 lg:px-10 rounded-md">
            <Link href="/">
              <li
                className="text-2xl lg:text-3xl hover:text-color-4 hover:cursor-pointer"
                style={{ color: active === "home" ? "#6159e6" : "" }}
                onClick={() => {
                  setActive("home");
                }}
              >
                الصفحة الرئيسية
              </li>
            </Link>
            <OutsideClickHandler
              onOutsideClick={() => {
                setOpen({ ...open, studentMenu: false });
              }}
            >
              <li
                className="flex items-center hover:text-color-4 hover:cursor-pointer"
                style={{ color: active === "students" ? "#6159e6" : "" }}
                onClick={() => {
                  setOpen({ ...open, studentMenu: !open.studentMenu });
                }}
              >
                الطــلاب
                <IoMdArrowDropdown />
              </li>
              {open.studentMenu && (
                <ul className="absolute text-2xl bg-color-2 py-2 w-[150px] mt-3 rounded-md shadow-md">
                  <Link href="/addStudent">
                    <li
                      className="border-b-2 border-color-1 pr-2 hover:text-color-4 hover:cursor-pointer transition ease-in-out"
                      onClick={() => {
                        setActive("students");
                        setOpen({
                          ...open,
                          studentMenu: false,
                        });
                      }}
                    >
                      إضافة طالب
                    </li>
                  </Link>
                  <Link href="/findStudent">
                    <li
                      className="pt-1 pr-2 hover:text-color-4 hover:cursor-pointer transition ease-in-out"
                      onClick={() => {
                        setActive("students");
                        setOpen({
                          ...open,
                          studentMenu: false,
                        });
                      }}
                    >
                      إيجاد طالب
                    </li>
                  </Link>
                </ul>
              )}
            </OutsideClickHandler>

            <OutsideClickHandler
              onOutsideClick={() => {
                setOpen({ ...open, examsMenu: false });
              }}
            >
              <li
                className="flex items-center hover:text-color-4 hover:cursor-pointer"
                style={{ color: active === "exams" ? "#6159e6" : "" }}
                onClick={() => {
                  setOpen({
                    ...open,
                    examsMenu: !open.examsMenu,
                  });
                }}
              >
                الامتــحانات
                <IoMdArrowDropdown />
              </li>
              {open.examsMenu && (
                <ul className="absolute text-2xl bg-color-2 py-2 w-[200px] mt-3 rounded-md shadow-md">
                  <li
                    className="border-b-2 border-color-1 pr-2 hover:text-color-4 hover:cursor-pointer transition ease-in-out"
                    onClick={() => {
                      setActive("exams");
                      setOpen({
                        ...open,
                        examsMenu: false,
                      });
                    }}
                  >
                    إضافة امتحان
                  </li>
                  <li
                    className="border-b-2 border-color-1 pt-1 pr-2 hover:text-color-4 hover:cursor-pointer transition ease-in-out"
                    onClick={() => {
                      setActive("exams");
                      setOpen({
                        ...open,
                        examsMenu: false,
                      });
                    }}
                  >
                    بنك الامتحانات
                  </li>
                  <li
                    className="pt-1 pr-2 hover:text-color-4 hover:cursor-pointer transition ease-in-out"
                    onClick={() => {
                      setActive("exams");
                      setOpen({
                        ...open,
                        examsMenu: false,
                      });
                    }}
                  >
                    امتحانات تم نشرها
                  </li>
                </ul>
              )}
            </OutsideClickHandler>
            <li
              className="hover:text-color-4 hover:cursor-pointer"
              style={{ color: active === "stats" ? "#6159e6" : "" }}
              onClick={() => {
                setActive("stats");
              }}
            >
              احصائيات
            </li>
          </ul>
          <h1 className="text-3xl">Logo</h1>
        </nav>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden mx-auto w-[95%]">
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
          <ul className="flex flex-col text-2xl font-semibold text-color-2 bg-color-4 py-2 rounded-b-xl rounded-t-md">
            <li
              className="border-b-2 border-color-3 px-2 py-3 hover:text-cancel transition ease-in-out"
              onClick={() => {
                setToggle(false);
              }}
            >
              الصفحة الرئيسية
            </li>
            <li className="border-b-2 border-color-3 px-2 py-3 ">
              الطــلاب
              <ul className="pr-5 font-medium">
                <Link href="/addStudent">
                  <li
                    className="hover:text-cancel transition ease-in-out flex items-center"
                    onClick={() => {
                      setToggle(false);
                    }}
                  >
                    <IoMdArrowDropleft />
                    إضافة طالب
                  </li>
                </Link>
                <Link href="/findStudent">
                  <li
                    className="hover:text-cancel transition ease-in-out flex items-center"
                    onClick={() => {
                      setToggle(false);
                    }}
                  >
                    <IoMdArrowDropleft />
                    إيجاد طالب
                  </li>
                </Link>
              </ul>
            </li>
            <li className="px-2 py-3 border-b-2 border-color-3">
              الامتحــانات
              <ul className="pr-5 font-medium">
                <li
                  className="hover:text-cancel transition ease-in-out flex items-center"
                  onClick={() => {
                    setToggle(false);
                  }}
                >
                  <IoMdArrowDropleft />
                  إضافة امتحان
                </li>
                <li
                  className="hover:text-cancel transition ease-in-out flex items-center"
                  onClick={() => {
                    setToggle(false);
                  }}
                >
                  <IoMdArrowDropleft />
                  بنك الامتحانات
                </li>
                <li
                  className="hover:text-cancel transition ease-in-out flex items-center"
                  onClick={() => {
                    setToggle(false);
                  }}
                >
                  <IoMdArrowDropleft />
                  امتحانات تم نشرها
                </li>
              </ul>
            </li>
            <li
              className="px-2 pt-3 hover:text-cancel transition ease-in-out"
              onClick={() => {
                setToggle(false);
              }}
            >
              احصائيات
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default AdminNavbar;
