import "./Css/Dropdown.css";
import { IoIosArrowDown } from "react-icons/io";

function Dropdown({ title, options }) {
  return (
    <div className="dropdown">
      <button className="dropdown-trigger flex items-center text-[14px]">{title}<IoIosArrowDown/></button>
      <div className="dropdown-content">
        {options.map((option, index) => (
          <div
            key={index}
            className="dropdown-item text-[12px]"
            onClick={() => console.log(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;


