import React from "react";
import { useMediaQuery } from "react-responsive";

function Footer() {
  const isTablet = useMediaQuery({ query: "(min-width: 1080px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <ul
      className={
        isMobile
          ? `w-screen h-fit p-5 bg-[#424242] text-white whitespace-nowrap flex justify-around items-center`
          : "w-screen h-fit p-5 bg-[#424242] text-white whitespace-nowrap gap-[4rem] text-[20px] flex flex-col justify-center items-center"
      }
    >
      {/* <div className="flex justify-around text-white font-medium text-[20px]"> */}

      <li className="text-center flex flex-col gap-5">
        <h1 className="text-[32px] font-semibold">ปลายทางยอดนิยมในไทย</h1>
        <p className="cursor-pointer">เกี่ยวกับเรา</p>
        <p className="cursor-pointer">ร่วมงานกับเรา</p>
      </li>
      <li className="text-center flex flex-col gap-5">
        <h1 className="text-[32px] font-semibold">พาร์ทเนอร์</h1>
        <p className="cursor-pointer">สมัครเป็นผู้ประกอบการ</p>
        <p className="cursor-pointer">เข้าสู่ระบบผู้ประกอบการ</p>
      </li>
      <li className="text-center flex flex-col gap-5">
        <h1 className="text-[32px] font-semibold">ข้อตกลงในการใช้งาน</h1>
        <p className="cursor-pointer">ข้อตกลงในการใช้งานทั่วไป</p>
        <p className="cursor-pointer">นโยบายความเป็นส่วนตัว</p>
        <p className="cursor-pointer">นโยบายคุกกี้</p>
      </li>

      {/* </div> */}
    </ul>
  );
}

export default Footer;