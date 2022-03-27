import React from "react";
import { convDate } from "../logical/date";
import { studentexam } from "../types";
const ExamCard: React.FC<studentexam> = (studentExam) => {
  return (
    <div className="bg-color-2 p-3 w-[270px] rounded-lg space-y-5 shadow-sm">
      <h1 className="bg-color-4 text-color-1 text-3xl text-center px-3 py-1 rounded-md">
        {studentExam.exam.subject}
      </h1>
      <div className="text-2xl font-semibold">
        <p>
          مدة الامتحان:{" "}
          <span className="text-color-3">
            {studentExam.exam.duration} دقيقة
          </span>
        </p>
        <p>
          تاريخ الامتحان:{" "}
          <span className="text-color-3">
            {convDate(studentExam.exam.published_time).date}
          </span>
        </p>
        <p>
          الدرجة:{" "}
          <span className="text-color-3">
            {studentExam.total_earn} من {studentExam.total_degree}
          </span>
        </p>
      </div>
      <div className="text-center space-y-3 text-color-2 text-2xl">
        <button
          type="button"
          className="bg-cancel min-w-[150px] py-1 rounded-lg"
        >
          عرض الاجابات
        </button>
        <button type="button" className="bg-true min-w-[150px] py-1 rounded-lg">
          إعادة الامتحان
        </button>
      </div>
    </div>
  );
};

export default ExamCard;
