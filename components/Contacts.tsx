import React from "react";
import { contacts } from "../types";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
const Contacts: React.FC<contacts> = ({ facebook, youtube, whatsApp }) => {
  return (
    <div className="flex flex-col gap-4 lg:gap-0 md:flex-row justify-evenly md:w-full mt-10">
      <a
        className="bg-component flex flex-row items-center justify-around py-2 w-[300px] rounded-lg hover:scale-105 transition ease-in-out"
        href={facebook}
        target="_blank"
      >
        <p className="text-2xl font-semibold text-gray-700">صفحة الفيسبوك</p>
        <FaFacebookSquare className="text-5xl text-[#4267B2]" />
      </a>
      <a
        className="bg-component flex flex-row items-center justify-around py-2 w-[300px] rounded-lg hover:scale-105 transition ease-in-out"
        href={youtube}
        target="_blank"
      >
        <p className="text-2xl font-semibold text-gray-700">قناة اليوتيوب</p>
        <FaYoutube className="text-5xl text-[#FF0000]" />
      </a>
      <a
        className="bg-component flex flex-row items-center justify-around py-2 w-[300px] rounded-lg hover:scale-105 transition ease-in-out"
        href="https://www.facebook.com"
        target="_blank"
      >
        <p className="text-2xl font-semibold text-gray-700">للتواصل</p>
        <div className="flex flex-row items-center gap-2">
          <div className="text-xl font-semibold">
            <p>{whatsApp.Number1}</p>
            <p>{whatsApp.Number2}</p>
          </div>
          <IoLogoWhatsapp className="text-4xl text-[#25D366]" />
        </div>
      </a>
    </div>
  );
};

export default Contacts;
