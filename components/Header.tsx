import React from "react";
type header = {
  title: string;
};
const Header: React.FC<header> = (header) => {
  return (
    <div className="bg-color-4 py-2 w-[300px] md:w-[350px] md:py-3 text-center rounded-md mx-auto mt-2">
      <h1 className="text-color-2 font-semibold text-3xl md:text-4xl">
        {header.title}
      </h1>
    </div>
  );
};

export default Header;
