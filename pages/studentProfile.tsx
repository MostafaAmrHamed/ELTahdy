import React, { useState } from "react";
import EditStudentForm from "../components/EditStudentForm";
import { FaUserCircle } from "react-icons/fa";
import ExamCard from "../components/ExamCard";
const studentProfile = () => {
  const [editStudent, setEditStudent] = useState(false);
  return (
    <div className="container mx-auto space-y-5">
      <div className="flex justify-end ml-5 md:ml-10">
        <button
          type="button"
          className="bg-color-4 w-fit px-7 py-1 text-2xl md:text-3xl text-color-2 rounded-lg text-center"
        >
          رجوع
        </button>
      </div>
      <div className="flex flex-col items-center space-y-7">
        <div className="text-color-4 text-8xl md:text-[150px]">
          <FaUserCircle />
        </div>
        <div className="text-xl md:text-2xl text-center font-semibold space-y-1">
          <h1>مصطفي عمرو حامد</h1>
          <h1>الثاني علمي</h1>
          <h1 className="text-color-4">01223456789</h1>
        </div>
        <div className="flex w-full md:w-fit items-center justify-around md:flex-row md:justify-center md:gap-10">
          <button
            type="button"
            className="bg-true w-fit px-7 py-1 text-2xl md:text-3xl text-color-2 rounded-lg"
            onClick={() => {
              setEditStudent(!editStudent);
            }}
          >
            تعديل
          </button>
          <button
            type="button"
            className="bg-cancel w-fit px-7 py-1 text-2xl md:text-3xl text-color-2 rounded-lg"
          >
            حـذف
          </button>
        </div>
        {editStudent && <EditStudentForm />}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          <ExamCard />
          <ExamCard />
          <ExamCard />
          <ExamCard />
          <ExamCard />
          <ExamCard />
        </div>
      </div>
    </div>
  );
};

export default studentProfile;
