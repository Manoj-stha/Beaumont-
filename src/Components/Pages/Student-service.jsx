import "../Css/Student-service.css";
import Card from "../Global/Card";
import screening from "../../assets/services/screening.jpg";
import application from "../../assets/services/application.jpg"
import documentation from "../../assets/services/documentation.jpg"
import interview from "../../assets/services/interview.jpg"
import scholarship from "../../assets/services/scholarship.jpg"
import form from "../../assets/services/form.jpg"

const services = () => {
  return (
    <div className="flex flex-col items-center h-[800px] pt-[50px]" id="student-service">
      <div>
        <div className="flex flex-col items-center w-[1200px] h-[600px]">
          <h1 className="font-playfair" id="service-header">
            student services
          </h1>
          <p className="font-montserrat text-center" id="service-desc">
            Take Advantage of Out Notch Student Services from Highly Qualified
            Education Counselors and Visa Expert Teams
          </p>
          <div className="flex gap-10 mt-[65px]">
            <Card
              image={screening}
              label={`Student Screening`}
              about={`The "Student Assistance Team" of Next consultancy is an experienced agency in background checks of Students eligibility for enrollment.`}
            />
            <Card
              image={application}
              label={`University Application Assistance`}
              about={`An application assistance team is available to you through Beaumont Education Consultancy to help you complete the university admission process.`}
            />
            <Card
              image={documentation}
              label={`Documentation Guidance`}
              about={`The Beaumont's Document Department is designed to guidance documents for students prepare their own documents and comply with court procedural requirements.`}
            />
            <Card
              image={interview}
              label={`Interview Assistance`}
              about={`While interviews are not part of every university's admission process, many institutions will ask students to meet online before accepting their application.`}
            />
            <Card
              image={scholarship}
              label={`Scholarship Assistance`}
              about={`The Scholarship Assistance Program works to inform students about the process of applying for private/ outside scholarships.`}
            />
            <Card
              image={form}
              label={`Student Visa Declaration Form`}
              about={`For convenience and in order to serve Japanese Universities and Colleges better, Beaumont has formed its own Compliance Department.`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default services;
