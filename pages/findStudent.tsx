import React, { useEffect, useState } from "react";
import { InferGetStaticPropsType } from "next";
import Header from "../components/Header";
import StudentCard from "../components/StudentCard";
import Pagination from "../components/Pagination";
import { findStudentData, findStudent } from "../types";
const findStudent = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [students, setStudent] = useState<findStudentData>(data);
  const [search, setSearch] = useState({ year: "", studentName: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const datatoShow = students.slice((currentPage - 1) * 5, currentPage * 5);

  const handleSubmit = () => {
    setCurrentPage(1);
    const temp: findStudentData = [];
    if (search.studentName && !search.year) {
      data.forEach((student) => {
        if (student.username.includes(search.studentName)) {
          temp.push(student);
        }
      });
      setStudent(temp);
    } else if (!search.studentName && search.year) {
      data.forEach((student) => {
        if (student.year.includes(search.year)) {
          temp.push(student);
        }
      });
      setStudent(temp);
    } else if (search.studentName && search.year) {
      data.forEach((student) => {
        if (
          student.username.includes(search.studentName) &&
          student.year.includes(search.year)
        ) {
          temp.push(student);
        }
      });
      setStudent(temp);
    } else {
      setStudent(data);
    }
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
          <option value="اولي">اولي</option>
          <option value="ثانيه علمي">ثانيه علمي</option>
          <option value="ثانيه ادبي">ثانيه ادبي</option>
          <option value="ثالثه">ثالثه</option>
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

        <div className="md:h-[500px]">
          {students.length ? (
            datatoShow.map((student, index) => {
              return (
                <StudentCard
                  studentName={student.username}
                  year={student.year}
                  id={student.id}
                  key={index}
                />
              );
            })
          ) : (
            <div className="md:text-4xl text-2xl text-center font-bold mt-5">
              <h1 className="mb-2"> لا يوجد الطالب: {search.studentName}</h1>
              {search.year && <h1> في الصف: {search.year} </h1>}
            </div>
          )}
        </div>
      </div>
      <Pagination
        dataLength={students.length}
        perPage={5}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
export const getStaticProps = async () => {
  const res = await fetch("https://eltahdy.herokuapp.com/api/students/");
  const data: findStudent[] = await res.json();
  return {
    props: {
      data,
    },
  };
};

export default findStudent;
