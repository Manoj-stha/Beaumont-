import React from "react";
import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import tweeter from "../../assets/tweeter.png";
import viber from "../../assets/viber.png";
import whatsapp from "../../assets/whatsapp.png";
import tiktok from "../../assets/tiktok.jpg";
import { FaGlobeAmericas, FaPhoneSquareAlt } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
const Footer = () => {
  return (
    <div className=" flex justify-around">
      <div className="font-montserrat px-[10rem] pt-[2rem] flex flex-col justify-center-center ">
        <h1 className="text-[25px] ">Beaumont Consultancy</h1>
        <p>Itahari, Sunsari</p>
        <div className="flex flex-col">
          <div className="flex py-2 items-center gap-1 text-black ">
            <FaGlobeAmericas />
            <h1>Beaumont.com.np</h1>
          </div>
          <div className="flex py-2 items-center gap-1 text-black ">
            <FaPhoneSquareAlt />
            <h1>+977 985-2054171</h1>
          </div>
        </div>
      </div>

      <div className=" flex justify-center items-center w-">
        <ul className="flex flex-col ">
          <li className="flex">
            <div className="flex items-center">
              <MdKeyboardArrowRight />
            </div>
            Home
          </li>
          <li className="flex">
            <div className="flex items-center">
              <MdKeyboardArrowRight />
            </div>
            About Us
          </li>
          <li className="flex">
            <div className="flex items-center">
              <MdKeyboardArrowRight />
            </div>
            Services
          </li>
          <li className="flex">
            <div className="flex items-center">
              <MdKeyboardArrowRight />
            </div>
            Terms of service
          </li>
        </ul>
      </div>

      <div className="">
        <h1 className="text-black text-[36px] font-poppins pb-5 text-center">
          Contact Us
        </h1>
        <div className="flex">
          <div className="flex flex-col items-center ">
            <div className="grid grid-cols-3 gap-3  pr-[50px] grid-rows-2 ">
              <div>
                <img
                  src={facebook}
                  className="w-[40px] rounded-full cursor-pointer transform transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div>
                <img
                  src={whatsapp}
                  className="w-[40px] rounded-full cursor-pointer transform transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div>
                <img
                  src={instagram}
                  className="w-[40px] rounded-full cursor-pointer transform transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div>
                <img
                  src={viber}
                  className="w-[40px] rounded-full cursor-pointer transform transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div>
                <img
                  src={tweeter}
                  className="w-[40px] rounded-full cursor-pointer transform transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div>
                <img
                  src={tiktok}
                  className="w-[40px] rounded-full cursor-pointer transform transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
