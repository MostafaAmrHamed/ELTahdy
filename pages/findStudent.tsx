import React, { useState } from "react";
import Header from "../components/Header";
import StudentCard from "../components/StudentCard";

const findStudent = () => {
  const [search, setSearch] = useState({ year: "", studentName: "" });
  const handleSubmit = () => {
    console.log(search.studentName + " " + search.year);
  };
  return (
    <div className="mx-auto">
      <Header title={"إيجاد طالب"} />
      <div className=" flex flex-col md:flex-row gap-3 items-center text-2xl font-medium bg-color-4 w-[300px] md:w-fit mx-auto mt-5 p-5 rounded-lg">
        <select
          className="py-2 pr-5 rounded-full w-full md:w-[200px] shadow-sm focus:outline-none focus:ring-2 focus:ring-color-4"
          value={search.year}
          onChange={(e) => {
            setSearch({ ...search, year: e.target.value });
          }}
        >
          <option value="">الصف</option>
          <option value="اولى">اولى</option>
          <option value="ثانية علمي">ثانية علمي</option>
          <option value="ثانية ادبي">ثانية ادبي</option>
          <option value="ثالثة">ثالثة</option>
        </select>
        <input
          type="text"
          className="w-full md:w-auto py-2 px-5 md:mr-10 text-xl rounded-full focus:outline-none focus:ring-2 focus:ring-color-4 shadow-sm"
          value={search.studentName}
          placeholder="اسم الطـالب"
          onChange={(e) => {
            setSearch({
              ...search,
              studentName: e.target.value,
            });
          }}
        />
        <button
          type="button"
          className="bg-cancel rounded-full text-2xl font-semibold text-color-2 mt-3 md:mt-0 px-8 py-1"
          onClick={handleSubmit}
        >
          بحـث
        </button>
      </div>
      <div className="md:max-w-[90%] lg:max-w-full md:mx-auto mt-5">
        <div className="hidden md:grid grid-cols-4 place-items-center font-semibold text-color-3 text-3xl border-b-[3px] border-component pb-2">
          <h1 className="col-span-2"> الاسـم</h1>

          <h1> الصـف</h1>
        </div>
        <StudentCard studentName="مصطفي عمرو" year="الاول" id={1} />
        <StudentCard studentName="مصطفي عمرو" year="الاول" id={1} />
        <StudentCard studentName="مصطفي عمرو" year="الاول" id={1} />
        <StudentCard studentName="مصطفي عمرو" year="الاول" id={1} />
        <StudentCard studentName="مصطفي عمرو" year="الاول" id={1} />
      </div>
    </div>
  );
};

export default findStudent;
