import React from "react";
import { leaderBoard } from "../types";

const LeaderBoard: React.FC<leaderBoard> = ({
  year,
  firstName,
  secondName,
  thirdName,
}) => {
  return (
    <div className="relative max-w-[300px] xl:max-w-[320px] bg-component mt-5 p-7 rounded-lg">
      <div className="flex justify-center">
        <img
          src="cup.png"
          alt="cup"
          className="absolute w-[100px] top-[-50px]"
        />
      </div>
      <h1 className="text-2xl text-center font-bold text-component bg-color-4 py-2 mt-5 rounded-md">
        {year}
      </h1>
      <div>
        <div className="flex items-center gap-2 mt-5">
          <p className="text-2xl font-semibold bg-background px-3 rounded-full">
            1
          </p>
          <h1 className="bg-background text-2xl w-[250px] px-2 xl:px-4 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-color-4">
            {firstName}
          </h1>
        </div>
        <div className="flex items-center gap-2 mt-5">
          <p className="text-2xl font-semibold bg-background px-3 rounded-full">
            2
          </p>
          <h1 className="bg-background text-2xl w-[250px] px-2 xl:px-4 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-color-4">
            {secondName}
          </h1>
        </div>
        <div className="flex items-center gap-2 mt-5">
          <p className="text-2xl font-semibold bg-background px-3 rounded-full ">
            3
          </p>
          <h1 className="bg-background text-2xl w-[250px] px-2 xl:px-4 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-color-4">
            {thirdName}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
