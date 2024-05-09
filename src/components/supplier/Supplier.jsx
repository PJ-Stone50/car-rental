import React from "react";
import { useMediaQuery } from "react-responsive";
import Partner1 from "../../../public/images/suppliers/partner-1.jpg";
import Partner2 from "../../../public/images/suppliers/partner-3.jpg";
import Partner3 from "../../../public/images/suppliers/partner-4.jpg";
import Partner4 from "../../../public/images/suppliers/partner-5.png";
import Partner5 from "../../../public/images/suppliers/partner-6.jpg";
import Partner6 from "../../../public/images/suppliers/partner-7.jpg";
import Partner7 from "../../../public/images/suppliers/partner-8.png";

const suppliers = [
  Partner1,
  Partner2,
  Partner3,
  Partner4,
  Partner5,
  Partner6,
  Partner7,
];

function Supplier() {
  const isTablet = useMediaQuery({ query: "(min-width: 1240px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <div
      className={
        isMobile
          ? "w-full h-fit py-[3rem] bg-white px-[5rem] pt-[3rem] flex flex-col gap-5"
          : "w-full h-fit pt-[3rem] px-5  bg-white flex flex-col gap-2"
      }
    >
      {isMobile ? (
        <h1 className="text-[32px] duration-500 text-[#424242] font-semibold">
          ให้บริการโดยผู้ประกอบการชั้นนำ
        </h1>
      ) : (
        <>
          <h1 className="text-[28px] duration-500 text-[#424242]  font-semibold">
            ให้บริการโดยผู้ประกอบการชั้นนำ
          </h1>
          {/* <h1 className="text-[32px] pl-[2rem] text-[#424242] font-semibold">
            ผู้ประกอบการชั้นนำ
          </h1> */}
        </>
      )}
      <div
        className={
          isTablet
            ? "w-full h-full flex    gap-5"
            : "w-full h-full grid grid-cols-3 md:grid-cols-4 gap-5 pb-[3rem]"
        }
      >
        {suppliers.map((element, index) => (
          <div
            key={index}
            className={
              isMobile
                ? "w-full h-[100px] ml-auto mr-auto block shadow-lg rounded items-center  bg-white"
                : " w-full h-full shadow-lg rounded items-center flex justify-center bg-white"
            }
          >
            <img
              src={element}
              alt="partner1"
              className={
                isMobile
                  ? "rounded w-full h-full object-cover "
                  : "rounded w-full h-full object-cover "
              }
            />
          </div>
        ))}

        {/* <div className="w-full h-full items-center flex justify-center bg-green-200">
          <img src={Partner1} alt="partner1" className="rounded" />
        </div>
        <div className="w-full h-full items-center flex justify-center bg-green-200">
          <img src={Partner1} alt="partner1" className="rounded" />
        </div>
        <div className="w-full h-full items-center flex justify-center bg-green-200">
          <img src={Partner1} alt="partner1" className="rounded" />
        </div>
        <div className="w-full h-full items-center flex justify-center bg-green-200">
          <img src={Partner1} alt="partner1" className="rounded" />
        </div> */}
      </div>
    </div>
  );
}

export default Supplier;
