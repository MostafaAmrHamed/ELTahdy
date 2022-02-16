import React, { useState } from "react";
import Header from "../components/Header";
import StudentCard from "../components/StudentCard";
import Pagination from "../components/Pagination";
import { studentSearchData } from "../types";
const findStudent = () => {
  const [search, setSearch] = useState({ year: "", studentName: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const [filterData, setFilterData] = useState<studentSearchData[]>([]);
  const handleSubmit = () => {
    console.log(search.studentName + " " + search.year);
    setFilterData([]);
    for (let student of fakeData) {
      if (student.studentName.includes(search.studentName)) {
        setFilterData([...filterData, student]);
        console.log(student.studentName + " Inside");
      }
    }
  };
  const yearOnChange = (e: any) => {
    setSearch({ ...search, year: e.target.value });
    setFilterData([]);
    for (let student of fakeData) {
      if (student.studentName.includes(search.studentName)) {
        setFilterData([...filterData, student]);
        console.log(student.studentName);
      }
    }
  };
  const fakeData: studentSearchData[] = [
    { id: 1, studentName: "Mostafa Amr", year: "اولى" },
    { id: 2, studentName: "Mostafa Amr", year: "اولى" },
    { id: 3, studentName: "Mostafa Amr", year: "اولى" },
    { id: 4, studentName: "Mostafa Amr", year: "اولى" },
    { id: 5, studentName: "Mostafa Amr", year: "اولى" },
    { id: 6, studentName: "Mohamed Amr", year: "2nd" },
    { id: 7, studentName: "Mostafa Amr", year: "اولى" },
    { id: 8, studentName: "Mohamed Amr", year: "2nd" },
    { id: 9, studentName: "Mohamed Amr", year: "2nd" },
    { id: 10, studentName: "Mohamed Amr", year: "2nd" },
    { id: 11, studentName: "Menna Amr", year: "3rd" },
    { id: 12, studentName: "Menna Amr", year: "3rd" },
    { id: 13, studentName: "Menna Amr", year: "3rd" },
    { id: 14, studentName: "Menna Amr", year: "3rd" },
    { id: 15, studentName: "Menna Amr", year: "3rd" },
    { id: 16, studentName: "Menna Amr", year: "3rd" },
  ];

  const datatoShow =
    filterData.length === 0
      ? filterData.slice((currentPage - 1) * 5, currentPage * 5)
      : fakeData.slice((currentPage - 1) * 5, currentPage * 5);
  return (
    <div className="mx-auto">
      <Header title={"إيجاد طالب"} />
      <div className=" flex flex-col md:flex-row gap-3 items-center text-2xl font-medium bg-color-4 w-[300px] md:w-fit mx-auto mt-5 p-5 rounded-lg">
        <select
          className="py-2 pr-5 rounded-full w-full md:w-[200px] shadow-sm focus:outline-none focus:ring-2 focus:ring-color-4"
          value={search.year}
          onChange={yearOnChange}
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
        {/* {search.studentName &&
          fakeData.map((student, index) => {
            if (student.name.includes(search.studentName)) {
              return (
                <StudentCard
                  studentName={student.name}
                  year={student.year}
                  id={student.id}
                  key={index}
                />
              );
            }
          })}
        {search.year &&
          fakeData.map((student, index) => {
            if (search.year === student.year) {
              return (
                <StudentCard
                  studentName={student.name}
                  year={student.year}
                  id={student.id}
                  key={index}
                />
              );
            }
          })} */}
        <div className="md:h-[500px]">
          {/* {datatoShow.map((student, index) => {
            return (
              <StudentCard
                studentName={student.name}
                year={student.year}
                id={student.id}
                key={index}
              />
            );
          })} */}
          {datatoShow.map((student, index) => {
            return (
              <StudentCard
                studentName={student.studentName}
                year={student.year}
                id={student.id}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <Pagination
        dataLength={fakeData.length}
        perPage={5}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default findStudent;
