import React from "react";

const Footer = () => {
  return (
    <div
      className="grid place-content-center md:grid-cols-2 lg:grid-cols-3 items-center bg-color-4 text-color-1 font-medium mt-5 py-2 pl-10 w-full"
      style={{ direction: "ltr" }}
    >
      <p>&copy;2022 EL-Tahdy. All rights reserved</p>
      <p>Developed by: Mostafa Amr & Amr Eid</p>
    </div>
  );
};

export default Footer;
