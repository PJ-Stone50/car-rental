import React, { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

function Dropdown({ title, children }) {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    if (isOpenDropdown) {
      setContainerHeight(contentRef.current.scrollHeight);
    } else {
      setContainerHeight(0);
    }
  }, [isOpenDropdown]);

  return (
    <div className="w-full h-fit bg-amber-200 flex flex-col">
      <div
        onClick={() => setIsOpenDropdown(!isOpenDropdown)}
        className="w-full h-fit cursor-pointer items-center bg-[#F7F7F7]  flex justify-start"
      >
        {isOpenDropdown ? (
          <FaChevronDown
            className="w-[25px] h-[25px] text-[#424242] duration-1000 transition-[1s]"
            style={{ marginLeft: "1.5rem" }}
          />
        ) : (
          <FaChevronRight
            className="w-[25px] h-[25px] text-[#424242] duration-1000 transition-[1s]"
            style={{ marginLeft: "1.5rem" }}
          />
        )}

        <h1 className="text-[22px] font-semibold p-[1.5rem] ">{title}</h1>
      </div>
      <div
        ref={containerRef}
        className="overflow-hidden transition-height"
        style={{ height: `${containerHeight}px` }}
      >
        <div
          ref={contentRef}
          className="bg-white border-2  p-3 mb-3 duration-1000 transition-[height]"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function Question() {
  const isTablet = useMediaQuery({ query: "(min-width: 1240px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <div
      className={
        isMobile
          ? "w-full h-fit py-[3rem] bg-white px-[5rem] pt-[3rem] flex flex-col gap-5"
          : "w-full h-fit  px-5  bg-white pb-[3rem] flex flex-col gap-2"
      }
    >
      <h1 className="text-[28px] text-[#424242] font-semibold mb-[1.5rem]">
        คำถามที่พบบ่อย2
      </h1>

      <Dropdown
        title="นโยบายการยกเลิกคืออะไร?"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque beatae doloribus eum laborum non molestiae quos iusto architecto in reprehenderit, fugiat temporibus quasi quae rem numquam tempore ullam adipisci sapiente? Maiores fugiat atque rerum voluptates laboriosam velit ratione dolorem saepe quos, labore quidem. Minus pariatur voluptatum fugit nisi ad."
      >
        <h1>123</h1>
      </Dropdown>
      <Dropdown title="Dropdown 2 Title" content="Dropdown 2 Content" />
      <Dropdown title="Dropdown 3 Title" content="Dropdown 3 Content" />
      <Dropdown title="Dropdown 4 Title" content="Dropdown 4 Content" />
    </div>
  );
}

export default Question;
