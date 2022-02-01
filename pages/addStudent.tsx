import React, { useState } from "react";
import Swal from "sweetalert2";
import Header from "../components/Header";
import Validate from "../components/Validation";
import {
  nameValidate,
  phoneValidate,
  passwordValidate,
  yearValidate,
} from "../logical/validation";
import { studentData } from "../types";
const addStudent = () => {
  const [validate, setValidate] = useState(false);
  const [student, setStudent] = useState<studentData>({
    name: "",
    password: "",
    phone: "",
    phone2: "",
    year: "",
  });
  const resetData = () => {
    setStudent({ name: "", password: "", phone: "", phone2: "", year: "" });
    setValidate(false);
  };
  const deleteData = () => {
    Swal.fire({
      title: "هل تريد حذف البيانات؟",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "لا,عودة",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "نعم,احـذفها",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "تم الحـذف بنجاح",
          showConfirmButton: false,
          timer: 2000,
        });
        resetData();
      }
    });
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (
      nameValidate(student.name).validate ||
      phoneValidate(student.phone).validate ||
      phoneValidate(student.phone2).validate ||
      yearValidate(student.year).validate ||
      passwordValidate(student.password).validate
    ) {
      Swal.fire({
        icon: "error",
        title: "خطأ",
        text: "هناك خطأ في ادخال البيانات",
        confirmButtonText: "عودة",
      });
      setValidate(true);
    } else {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "تم تسجيل الطالب بنجاح",
        showConfirmButton: false,
        timer: 2000,
      });
      setValidate(false);
      console.log(student);
      resetData();
    }
  };
  return (
    <div className="container mx-auto">
      <Header title="إضـافة طـالب" />
      <div className="bg-component rounded-lg w-11/12 lg:w-8/12 xl:w-1/2 mt-5 py-8 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-5 border-b-2 border-color-2 mx-5 pb-5 md:grid md:grid-cols-4 items-center text-center ">
            <label className="text-color-4 text-2xl font-semibold">
              اسم الطـالب
            </label>
            <input
              type="text"
              className="w-11/12 md:w-auto md:col-span-3 py-2 px-2 mt-3 md:mt-0 md:p-2 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-color-4 shadow-sm"
              value={student.name}
              onChange={(e) => {
                setStudent({ ...student, name: e.target.value });
              }}
            />
            {validate && (
              <div className="mt-2 col-start-2 col-span-3 text-center md:text-right md:pr-2">
                <Validate
                  message={nameValidate(student.name).message}
                  validation={nameValidate(student.name).validate}
                />
              </div>
            )}
          </div>
          <div className="mb-5 border-b-2 border-color-2 mx-5 pb-5 md:grid md:grid-cols-4 items-center text-center ">
            <label className="text-color-4 text-2xl font-semibold">
              كلمة السر
            </label>
            <input
              type="password"
              className="w-11/12 md:w-auto md:col-span-3 py-2 px-2 mt-3 md:mt-0 md:p-2 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-color-4 shadow-sm"
              value={student.password}
              onChange={(e) => {
                setStudent({ ...student, password: e.target.value });
              }}
            />
            {validate && (
              <div className="mt-2 col-start-2 col-span-3 text-center md:text-right md:pr-2">
                <Validate
                  message={passwordValidate(student.password).message}
                  validation={passwordValidate(student.password).validate}
                />
              </div>
            )}
          </div>
          <div className="mb-5 border-b-2 border-color-2 mx-5 pb-5 md:grid md:grid-cols-4 items-center text-center ">
            <label className="text-color-4 text-2xl font-semibold">
              رقم الهاتف
            </label>
            <input
              type="number"
              className="w-11/12 md:w-auto md:col-span-3 py-2 px-2 mt-3 md:mt-0 md:p-2 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-color-4 shadow-sm"
              value={student.phone}
              onChange={(e) => {
                setStudent({ ...student, phone: e.target.value });
              }}
            />
            {validate && (
              <div className="mt-2 col-start-2 col-span-3 text-center md:text-right md:pr-2">
                <Validate
                  message={phoneValidate(student.phone).message}
                  validation={phoneValidate(student.phone).validate}
                />
              </div>
            )}
          </div>
          <div className="mb-5 border-b-2 border-color-2 mx-5 pb-5 md:grid md:grid-cols-4 items-center text-center">
            <label className="text-color-4 text-2xl font-semibold">
              رقم هاتف الأب
            </label>
            <input
              type="number"
              className="w-11/12 md:w-auto md:col-span-3 py-2 px-2 mt-3 md:mt-0 md:p-2 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-color-4 shadow-sm"
              value={student.phone2}
              onChange={(e) => {
                setStudent({ ...student, phone2: e.target.value });
              }}
            />
            {validate && (
              <div className="mt-2 col-start-2 col-span-3 text-center md:text-right md:pr-2">
                <Validate
                  message={phoneValidate(student.phone2).message}
                  validation={phoneValidate(student.phone2).validate}
                />
              </div>
            )}
          </div>
          <div className="mb-5 mx-5 pb-5 grid gap-2 md:gap-0 md:grid-cols-4 items-center place-content-center text-center">
            <label className="text-color-4 text-2xl font-semibold">الصف </label>
            <select
              className="py-2 text-2xl font-medium px-2 rounded-md shadow-sm w-[200px] md:col-span-3 focus:outline-none focus:ring-2 focus:ring-color-4"
              value={student.year}
              onChange={(e) => {
                setStudent({ ...student, year: e.target.value });
              }}
            >
              <option value="">الصف</option>
              <option value="اولى">اولى</option>
              <option value="ثانية علمي">ثانية علمي</option>
              <option value="ثانية ادبي">ثانية ادبي</option>
              <option value="ثالثة">ثالثة</option>
            </select>
            {validate && (
              <div className="mt-2 col-start-2 col-span-3 text-center md:text-right md:pr-2">
                <Validate
                  message={yearValidate(student.year).message}
                  validation={yearValidate(student.year).validate}
                />
              </div>
            )}
          </div>
          <div className="flex flex-col mt-5 items-center md:flex-row gap-5 justify-center">
            <button
              type="submit"
              className="bg-true w-fit px-7 py-1 text-3xl text-color-2 rounded-lg"
            >
              تسجـيـل
            </button>
            <button
              type="button"
              className="bg-cancel w-fit px-7 py-1 text-3xl text-color-2 rounded-lg"
              onClick={deleteData}
            >
              حـذف
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default addStudent;
