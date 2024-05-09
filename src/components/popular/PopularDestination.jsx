import React from "react";
import { useMediaQuery } from "react-responsive";

function PopularDestination() {
  const isTablet = useMediaQuery({ query: "(min-width: 1240px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <div
      className={
        isMobile
          ? "w-full h-fit pt-[1.5rem] pb-[3rem] gap-3 px-[6rem] flex flex-col"
          : "w-full h-fit pt-[1.5rem] pb-[3rem] gap-3 px-[1.5rem] flex flex-col"
      }
    >
      <h3 className="text-[18px] font-medium">ปลายทางยอดนิยมในไทย</h3>
      <ul
        className={
          isMobile
            ? "w-full h-fit flex flex-wrap gap-1 whitespace-nowrap"
            : "w-full h-fit flex flex-wrap gap-1 whitespace-nowrap"
        }
      >
        <li className="text-[#424242] hover:opacity-100 hover:text-black duration-500 cursor-pointer opacity-70">
          เช่ารถ ภูเก็ต{" "}
        </li>
        |
        <li className="text-[#424242] hover:opacity-100 hover:text-black duration-500 cursor-pointer opacity-70">
          เช่ารถ เชียงราย{" "}
        </li>
        |
        <li className="text-[#424242] hover:opacity-100 hover:text-black duration-500 cursor-pointer opacity-70">
          เช่ารถ กระบี่{" "}
        </li>
        |
        <li className="text-[#424242] hover:opacity-100 hover:text-black duration-500 cursor-pointer opacity-70">
          เช่ารถ นครศรีธรรมราช{" "}
        </li>
        |
        <li className="text-[#424242] hover:opacity-100 hover:text-black duration-500 cursor-pointer opacity-70">
          เช่ารถ พัทยา{" "}
        </li>
        |
        <li className="text-[#424242] hover:opacity-100 hover:text-black duration-500 cursor-pointer opacity-70">
          เช่ารถ น่าน{" "}
        </li>
        |
        <li className="text-[#424242] hover:opacity-100 hover:text-black duration-500 cursor-pointer opacity-70">
          เช่ารถ หัวหิน{" "}
        </li>
        |
        <li className="text-[#424242] hover:opacity-100 hover:text-black duration-500 cursor-pointer opacity-70">
          เช่ารถ กรุงเทพฯ{" "}
        </li>
        |
        <li className="text-[#424242] hover:opacity-100 hover:text-black duration-500 cursor-pointer opacity-70">
          เช่ารถ น่าน{" "}
        </li>
        |
      </ul>
    </div>
  );
}

export default PopularDestination;
