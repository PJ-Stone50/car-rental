import React from "react";
import { useMediaQuery } from "react-responsive";
import Partner1 from "../../../public/images/suppliers/partner-1.jpg";
import Partner2 from "../../../public/images/suppliers/partner-2.png";
import Partner3 from "../../../public/images/suppliers/partner-3.jpg";
import Partner4 from "../../../public/images/suppliers/drive1.png";
import Partner5 from "../../../public/images/suppliers/partner-5.jpg";
import Partner6 from "../../../public/images/suppliers/partner-6.jpg";
import Partner7 from "../../../public/images/suppliers/partner-7.jpg";
import "./supplier.css";
// const suppliers = [
//   Partner1,
//   Partner2,
//   Partner3,
//   Partner4,
//   Partner5,
//   Partner6,
//   Partner7,
// ];
const suppliers = [Partner1];

function Supplier() {
  const isTablet = useMediaQuery({ query: "(min-width: 1080px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <div className={isTablet ? "container-tablet" : "container-mobile"}>
      <h1
        className={`text-[${
          isMobile ? 28 : 24
        }px] duration-500 text-[#424242] font-medium`}
      >
        ให้บริการโดยผู้ประกอบการชั้นนำ
      </h1>

      <div className={isTablet ? "content-tablet" : "content-mobile"}>
        <div
          className={
            isMobile ? "img-container-tablet " : "img-container-mobile "
          }
        >
          <img
            src={Partner1}
            alt={`partner1`}
            className={
              isMobile
                ? "rounded w-fit p-3 h-[80px] object-cover "
                : "rounded w-fit p-3 h-fit object-cover "
            }
          />
        </div>
        <div
          className={
            isMobile ? "img-container-tablet " : "img-container-mobile "
          }
        >
          <img
            src={Partner2}
            alt={`partner1`}
            className={
              isMobile
                ? "rounded w-fit p-3 h-[80px] object-cover "
                : "rounded w-fit p-3 h-fit object-cover "
            }
          />
        </div>
        <div
          className={
            isMobile ? "img-container-tablet " : "img-container-mobile "
          }
        >
          <img
            src={Partner3}
            alt={`partner1`}
            className={
              isMobile
                ? "rounded w-full p-3 h-[80px] object-cover "
                : "rounded w-fit p-3 h-full object-cover "
            }
          />
        </div>
        <div
          className={
            isMobile ? "img-container-tablet " : "img-container-mobile "
          }
        >
          <img
            src={Partner4}
            alt={`partner1`}
            className={
              isMobile
                ? "rounded w-full p-3 h-[80px] object-cover "
                : "rounded w-fit p-3 h-full object-cover "
            }
          />
        </div>

        <div
          className={
            isMobile ? "img-container-tablet " : "img-container-mobile "
          }
        >
          <img
            src={Partner5}
            alt={`partner1`}
            className={
              isMobile
                ? "rounded w-fit  p-3 object-cover "
                : "rounded w-fit h-fit p-3 object-cover "
            }
          />
        </div>
        <div
          className={
            isMobile ? "img-container-tablet " : "img-container-mobile "
          }
        >
          <img
            src={Partner6}
            alt={`partner1`}
            className={
              isMobile
                ? "rounded w-fit h-[80px] p-3 object-cover "
                : "rounded w-fit h-fit p-3 object-cover "
            }
          />
        </div>
        <div
          className={
            isMobile ? "img-container-tablet " : "img-container-mobile "
          }
        >
          <img
            src={Partner7}
            alt={`partner1`}
            className={
              isMobile
                ? "rounded w-fit  h-[80px] p-3 object-cover "
                : "rounded w-fit  h-fit p-3 object-cover "
            }
          />
        </div>

        {/* <div className="w-full h-full items-center flex justify-center bg-white">
          <img src={Partner1} alt="partner1" className="rounded" />
        </div>
        <div className="w-full h-full items-center flex justify-center bg-white">
          <img src={Partner1} alt="partner1" className="rounded" />
        </div>
        <div className="w-full h-full items-center flex justify-center bg-white">
          <img src={Partner1} alt="partner1" className="rounded" />
        </div>
        <div className="w-full h-full items-center flex justify-center bg-white">
          <img src={Partner1} alt="partner1" className="rounded" />
        </div> */}
      </div>
    </div>
  );
}

export default Supplier;
