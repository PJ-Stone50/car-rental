import React, { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import FirstQuestion from "./FirstQuestion";

function Dropdown({ title, children, isOpen, onClick }) {
  const contentRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setContainerHeight(contentRef.current.scrollHeight);
    } else {
      setContainerHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="w-full h-fit  flex flex-col">
      <div
        onClick={onClick}
        className="w-full h-fit cursor-pointer items-center bg-[#F7F7F7] border-2 border-[#E0E0E0] flex justify-start"
      >
        {isOpen ? (
          <FaChevronDown
            className="w-[25px] h-[25px] text-[#424242] transition-transform duration-300 "
            style={{ marginLeft: "1.5rem" }}
          />
        ) : (
          <FaChevronRight
            className="w-[25px] h-[25px] text-[#424242] transition-transform duration-300"
            style={{ marginLeft: "1.5rem" }}
          />
        )}

        <h1 className="text-[22px] font-semibold p-[1.5rem] ">{title}</h1>
      </div>
      <div
        ref={contentRef}
        className="overflow-hidden transition-height"
        style={{ height: `${containerHeight}px` }}
      >
        <div className="bg-white border-2  p-3">{children}</div>
      </div>
    </div>
  );
}

function Question() {
  const isTablet = useMediaQuery({ query: "(min-width: 1240px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 768px)" });

  const [dropdownStates, setDropdownStates] = useState([
    false,
    false,
    false,
    false,
  ]);

  const toggleDropdown = (index) => {
    const newDropdownStates = dropdownStates.map((state, i) =>
      i === index ? !state : false
    );
    setDropdownStates(newDropdownStates);
  };

  return (
    <div
      className={
        isMobile
          ? "w-full h-fit py-[3rem] bg-white px-[5rem] pt-[3rem] flex flex-col"
          : "w-full h-fit  px-5  bg-white pb-[3rem] flex flex-col"
      }
    >
      <h1 className="text-[28px] text-[#424242] font-semibold pb-[1.5rem]">
        คำถามที่พบบ่อย
      </h1>

      <Dropdown
        title="นโยบายการยกเลิกคืออะไร?"
        isOpen={dropdownStates[0]}
        onClick={() => toggleDropdown(0)}
        className="px-[3rem]"
      >
        <FirstQuestion />
      </Dropdown>
      <Dropdown
        title="ฉันต้องนำเอกสารอะไรไปบ้างเมื่อรับรถ?"
        isOpen={dropdownStates[1]}
        onClick={() => toggleDropdown(1)}
      >
        <h1>456</h1>
      </Dropdown>
      <Dropdown
        title="ฉันสามารถตรวจสอบความคุ้มครองประกันรถเช่าได้ที่ไหน?"
        isOpen={dropdownStates[2]}
        onClick={() => toggleDropdown(2)}
      >
        <h1>789</h1>
      </Dropdown>
      <Dropdown
        title="ฉันสามารถรับรถที่จุดหนึ่งและคืนที่จุดอื่นได้หรือไม่?"
        isOpen={dropdownStates[3]}
        onClick={() => toggleDropdown(3)}
      >
        <h1>ABC</h1>
      </Dropdown>

      <div className="buttonContainer w-full h-fit flex justify-center my-[3rem]">
        <Link>
          <label
            className="cursor-pointer whitespace-nowrap text-white text-[18px] font-semibold p-3 rounded-full px-[2rem]"
            style={{
              background:
                "linear-gradient(90deg, rgba(254,84,28,1) 0%, rgba(239,55,68,1) 100%)",
            }}
          >
            ดูคำถามที่พบบ่อยทั้งหมด
          </label>
        </Link>
      </div>
    </div>
  );
}

export default Question;
