import React, { useState } from "react";
import Header from "../components/Header";
function addStudent() {
  const [student, setStudent] = useState({
    name: "",
    password: "",
    phone: "",
    phone2: "",
    year: "",
  });
  const resetData = () => {
    setStudent({ name: "", password: "", phone: "", phone2: "", year: "" });
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    resetData();
    console.log(student);
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
          </div>
          <div className="mb-5 border-b-2 border-color-2 mx-5 pb-5 md:grid md:grid-cols-4 items-center text-center ">
            <label className="text-color-4 text-2xl font-semibold">
              رقم الهاتف
            </label>
            <input
              type="text"
              className="w-11/12 md:w-auto md:col-span-3 py-2 px-2 mt-3 md:mt-0 md:p-2 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-color-4 shadow-sm"
              value={student.phone}
              onChange={(e) => {
                setStudent({ ...student, phone: e.target.value });
              }}
              pattern="^[0-9]{12}$"
              required
            />
          </div>
          <div className="mb-5 border-b-2 border-color-2 mx-5 pb-5 md:grid md:grid-cols-4 items-center text-center">
            <label className="text-color-4 text-2xl font-semibold">
              رقم هاتف الأب
            </label>
            <input
              type="text"
              className="w-11/12 md:w-auto md:col-span-3 py-2 px-2 mt-3 md:mt-0 md:p-2 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-color-4 shadow-sm"
              value={student.phone2}
              onChange={(e) => {
                setStudent({ ...student, phone2: e.target.value });
              }}
              pattern="[0-9]+"
              required
            />
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
              onClick={resetData}
            >
              الغاء
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default addStudent;
