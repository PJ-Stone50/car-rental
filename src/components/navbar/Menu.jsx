import React from "react";

import { useMediaQuery } from "react-responsive";

function Menu() {
  const isTablet = useMediaQuery({ query: "(min-width: 1080px)" });
  return (
    <></>
    // <ul
    //   className={`flex ${
    //     !isTablet
    //       ? "flex flex-wrap  gap-3 w-fit  h-fit  items-center justify-center "
    //       : "flex items-center px-5 justify-center  gap-[30px] "
    //   }`}
    // >
    //   <li
    //     className="cursor-pointer whitespace-nowrap opacity-70 hover:opacity-100 text-[24px] font-medium"
    //     style={{ color: "#EF3744" }}
    //   >
    //     <button className="text-[16px]">โปรโมชั่น</button>
    //   </li>
    //   <li
    //     className="cursor-pointer whitespace-nowrap opacity-70 hover:opacity-100 text-[24px] font-medium"
    //     style={{ color: "#EF3744" }}
    //   >
    //     <button className="text-[16px]">เกี่ยวกับเรา</button>
    //   </li>
    //   <li
    //     className="cursor-pointer whitespace-nowrap opacity-70 hover:opacity-100 text-[24px] font-medium"
    //     style={{ color: "#EF3744" }}
    //   >
    //     <button className="text-[16px]">เช่ารายสัปดาห์/รายเดือน</button>
    //   </li>
    //   <li
    //     className="cursor-pointer whitespace-nowrap opacity-70 hover:opacity-100 text-[24px] font-medium"
    //     style={{ color: "#EF3744" }}
    //   >
    //     <button className="text-[16px]">เอกสารเช่ารถ</button>
    //   </li>
    //   <li
    //     className="cursor-pointer whitespace-nowrap opacity-70 hover:opacity-100 text-[24px] font-medium"
    //     style={{ color: "#EF3744" }}
    //   >
    //     <button className="text-[16px]">ติดต่อเรา</button>
    //   </li>
    // </ul>
  );
}

export default Menu;
