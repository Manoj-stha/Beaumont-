import React, { useState, useEffect } from "react";
import Topbar from "../Topbar/Topbar";
import Navbar from "../Topbar/Navbar";
import cover from "../../assets/cover.jpg";
import Welcome from "./Welcome";
import Destination from "./Destination"
import Services from "./Student-service"
import Footer from "./Footer";
import Register from "./Register";
import useDisclouse from "../hooks/useDisclouse";
import Registration from "../Global/Registration";

const Home = () => {
  const {isOpen, onClose, onOpen} = useDisclouse();
  return (
    <div className="overflow-x-hidden">
      <div>
        <Navbar />
      </div>
      <div className="pt-[98px]">
        <img
          src={cover}
          className={`w-screen h-[1000px] object-cover` }
          alt="Cover"
        />
         <div className="absolute top-[48rem] left-[10rem]">
          <button
            className="bg-orange-400 text-white text-[25px] py-3 px-8 rounded-md hover:bg-orange-600 transition"
            onClick={onOpen}
          >
            Register
          </button>
        </div>
      </div>
      <Welcome/>
      <Destination/>
      <Services/>
      <Footer/>

      <Topbar/>
      {isOpen && <Registration onClose={onClose} isOpen={isOpen}/>}
    </div>
    
  );
};

export default Home;
