import React, { useState, useRef, useEffect } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import FirstQuestion from "./FirstQuestion";
import SecondQuestion from "./SecondQuestion";
import ThirdQuestion from "./ThirdQuestion";
import FouthQuestion from "./FouthQuestion";
import { RippleButton } from "../navbar/ripple/RippleButton";
import { useMediaQuery } from "react-responsive";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";

function Dropdown({ title, children, isOpen, onClick }) {
  const isTablet = useMediaQuery({ query: "(min-width: 1240px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 768px)" });

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
        className="w-full h-[70px] cursor-pointer items-center bg-[#F7F7F7] border-2 border-b-0 flex justify-start"
      >
        {isOpen ? (
          <FaAngleDown
            className="w-[18px] h-[18px]  transition-transform duration-300 "
            style={{ marginLeft: "1.5rem", color: "rgba(0, 0, 0, 0.54)" }}
          />
        ) : (
          <FaAngleRight
            className="w-[18px] h-[18px]  transition-transform duration-300"
            style={{ marginLeft: "1.5rem", color: "rgba(0, 0, 0, 0.54)" }}
          />
        )}

        <h1
          className={
            isMobile
              ? "text-[24px] text-black font-medium p-[1.5rem] duration-500"
              : "text-[20px] text-black font-medium p-[1.5rem] duration-500"
          }
        >
          <p className="font-medium text-[20px]">{title}</p>
        </h1>
      </div>
      <div
        ref={contentRef}
        className="overflow-hidden transition-height"
        style={{ height: `${containerHeight}px` }}
      >
        <div className="bg-white border-2   p-3">{children}</div>
      </div>
    </div>
  );
}

function Question() {
  const isTablet = useMediaQuery({ query: "(min-width: 1080px)" });
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
    <div className={isTablet ? "tablet" : "labtop"}>
      <h1 className="text-[28px] text-[#424242] font-medium pb-[1.5rem]">
        คำถามที่พบบ่อย
      </h1>

      <Dropdown
        title="นโยบายการยกเลิกคืออะไร?"
        isOpen={dropdownStates[0]}
        onClick={() => toggleDropdown(0)}
        className="px-[3rem] "
      >
        <FirstQuestion />
      </Dropdown>
      <Dropdown
        title="ฉันต้องนำเอกสารอะไรไปบ้างเมื่อรับรถ?"
        isOpen={dropdownStates[1]}
        onClick={() => toggleDropdown(1)}
      >
        <SecondQuestion />
      </Dropdown>
      <Dropdown
        title="ฉันสามารถตรวจสอบความคุ้มครองประกันรถเช่าได้ที่ไหน?"
        isOpen={dropdownStates[2]}
        onClick={() => toggleDropdown(2)}
      >
        <ThirdQuestion />
      </Dropdown>
      <Dropdown
        title="ฉันสามารถรับรถที่จุดหนึ่งและคืนที่จุดอื่นได้หรือไม่?"
        isOpen={dropdownStates[3]}
        onClick={() => toggleDropdown(3)}
      >
        <FouthQuestion />
      </Dropdown>

      <div className="buttonContainer w-full h-fit flex justify-center my-[3rem]">
        <Link>
          <RippleButton className="rounded-full">
            ดูคำถามที่พบบ่อยทั้งหมด
          </RippleButton>
        </Link>
      </div>
    </div>
  );
}

export default Question;
