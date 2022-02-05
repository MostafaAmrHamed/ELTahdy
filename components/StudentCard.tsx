import React from "react";
import { studentSearchData } from "../types";

const StudentCard: React.FC<studentSearchData> = ({
  studentName,
  year,
  id,
}) => {
  return (
    <div className="grid md:grid-cols-4 gap-2 place-items-center text-3xl bg-color-1 mt-5 p-3 md:p-5 rounded-lg shadow-lg text-center">
      <div className="md:col-span-2 border-b-[3px] border-component md:border-0 md:pb-0 pb-2 w-full">
        <h1 className="font-semibold text-color-3 md:hidden">الاسـم</h1>
        <p className="font-medium text-color-4">{studentName}</p>
      </div>
      <div>
        <h1 className="font-semibold text-color-3 md:hidden">الصـف</h1>
        <p className="font-medium">{year}</p>
      </div>
      <button
        type="button"
        className="bg-color-4 rounded-xl text-xl font-semibold text-color-2 mt-3 mb-2 md:my-0 px-10 py-1"
      >
        عرض
      </button>
    </div>
  );
};

export default StudentCard;
