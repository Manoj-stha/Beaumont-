import React from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import tweeter from "../../assets/tweeter.png";
import viber from "../../assets/viber.png";
import whatsapp from "../../assets/whatsapp.png";

const Topbar = () => {
  return (
    <div className="bg-green-700 text-white text-xl w-screen h-[69.59px] flex items-center justify-center">
      <p className="flex cursor-pointer hover:text-orange-300">
        <u>Privacy Policy </u>
      </p>
      <p className="pl-3">|</p>
      <p className="pl-2">
        Beaumont &#169; All Rights Reserved. Design & Developed by{" "}
        <a
          href="https://bardali.com.np/"
          className="hover:text-orange-300"
          target="_blank"
        >
          <u>Bardali</u>
        </a>
      </p>
    </div>
  );
};

export default Topbar;
