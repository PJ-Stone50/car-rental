import React from "react";
import { useMediaQuery } from "react-responsive";
import "./footer.css"; // Import the CSS file

function Footer() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1080px)" });

  return (
    <div className="flex flex-col">
      <ul className="footer">
        <li className="contentContainer text-center flex flex-col gap-5  w-full">
          <h1>เกี่ยวกับ Talrens</h1>
          <p>เกี่ยวกับเรา</p>
          <p>ร่วมงานกับเรา</p>
        </li>
        <li className="contentContainer text-center flex flex-col gap-5  w-full">
          <h1>พาร์ทเนอร์</h1>
          <p>สมัครเป็นผู้ประกอบการ</p>
          <p>เข้าสู่ระบบผู้ประกอบการ</p>
        </li>
        <li className="contentContainer text-center flex flex-col gap-5  w-full">
          <h1>ข้อตกลงในการใช้งาน</h1>
          <p>ข้อตกลงในการใช้งานทั่วไป</p>
          <p>นโยบายความเป็นส่วนตัว</p>
          <p>นโยบายคุกกี้</p>
        </li>
      </ul>
      <div
        className={
          isTablet
            ? "w-full h-full  p-5 bg-[#424242] text-white font-medium text-center"
            : "w-full h-full  p-5 bg-[#424242] text-white font-medium px-[6.5rem]"
        }
      >
        <p className="whitespace-nowrap">
          © 2024 AS Talrens.com All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
