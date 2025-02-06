import React from "react";
import logo from "../../assets/logo.png";
import Dropdown from "../Dropdown";
const Navbar = () => {
  return (
    <div className="bg-lightGray w-screen h-[98px] flex justify-between shadow-md fixed z-10">
      <div className="flex pl-16 ">
        <img src={logo} className="w-[100px] relative" />
      </div>
      <div className="flex  items-center">
        <div className="flex gap-5 pr-16">
          <Dropdown
            title="Test Preparation"
            options={[
              "ILETS preparation classes",
              "PTE preparation classes",
              "SAT preparation classes",
            ]}
          />
          <Dropdown
            title="Study Abroad"
            options={[
              "Study in South Korea",
              "Study in Japan",
              "Study in UK",
              "Study in Denmark"
            ]}
          />
            <Dropdown
              title="Services"
              options={[
                "Student Screening",
                "University Application Assistance",
                "Documentation Guidance",
                "Interview Assistance",
                "Scholarship Assistance",
                "Student Visa Declaration Form",
                "Counseling",
                "Pre Departure Briefing",
                "VISA Lodgement"
              ]}
            />
          <Dropdown
            title="Popular Courses"
            options={[
              "Study Information Technology (IT) in Japan",
              "Study MBA in UK",
              "Study Arts in South Korea",
            ]}
          />
          <Dropdown
            title="About Us"
            options={[
              "Introduction",
              "Objectives",
              "Gallery"
            ]}
          />
          <Dropdown
            title="Contact Us"
            options={[
              "Enquiry"
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
