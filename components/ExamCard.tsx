import React from "react";

const ExamCard = () => {
  return (
    <div className="bg-color-2 p-5 w-[250px] rounded-lg space-y-5 shadow-sm">
      <h1 className="bg-color-4 text-color-1 text-3xl text-center px-3 py-1 rounded-md">
        هندسة فراغية
      </h1>
      <div className="text-2xl font-semibold">
        <p>
          مدة الامتحان: <span className="text-color-3"> 10:00</span>
        </p>
        <p>
          مدة الامتحان: <span className="text-color-3"> 10:00</span>
        </p>
        <p>
          مدة الامتحان: <span className="text-color-3"> 10:00</span>
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
