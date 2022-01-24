import React from "react";
import Head from "next/head";
import Card from "../components/LeaderBoard";

export default function Home() {
  const data = [
    {
      year: "الصف الاول الثانـوي",
      firstName: "محمد خالد عمرو ",
      secondName: "محمد خالد عمرو شوقي",
      thirdName: "محمد خالد عمرو شوقي",
    },
    {
      year: "الصف الثاني الثانـوي",
      firstName: "محمد خالد عمرو شوقي",
      secondName: "محمد خالد عمرو شوقي",
      thirdName: "محمد خالد عمرو شوقي",
    },
    {
      year: "الصف الثالث الثانـوي",
      firstName: "محمد خالد عمرو شوقي",
      secondName: "محمد خالد عمرو شوقي",
      thirdName: "محمد خالد عمرو شوقي",
    },
  ];
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <Head>
        <title>EL Tahdy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative bg-color-1 mt-5 w-[275px] py-5 md:w-[500px] md:py-6 rounded-full md:rounded-3xl shadow-lg">
        <h1 className="text-2xl md:text-4xl text-gray-700 text-center font-semibold ">
          الطلاب المتميزين هذا الشهر
        </h1>
        <img
          src="header.png"
          alt="icon"
          className="absolute w-[100px] top-[-45px] left-[-40px] md:w-[150px] md:top-[-65px] md:left-[-70px]"
        />
      </div>
      <h1 className="text-5xl my-8"> أ/عمرو حامد</h1>
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-0 lg:justify-evenly lg:w-full">
        {data.map((item, index) => {
          return (
            <Card
              key={index}
              year={item.year}
              firstName={item.firstName}
              secondName={item.secondName}
              thirdName={item.thirdName}
            />
          );
        })}
      </div>
    </div>
  );
}
