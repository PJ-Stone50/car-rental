import React from "react";
import { useMediaQuery } from "react-responsive";
import Partner1 from "../../../public/images/suppliers/partner-1.png";
import Partner2 from "../../../public/images/suppliers/partner-2.png";
import Partner3 from "../../../public/images/suppliers/partner-3.png";
import Partner4 from "../../../public/images/suppliers/drive1.png";
import Partner5 from "../../../public/images/suppliers/partner-5.jpg";
import Partner6 from "../../../public/images/suppliers/partner-6.png";
import Partner7 from "../../../public/images/suppliers/partner-7.png";
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
            isMobile ? "img-container-tablet  h-full" : "img-container-mobile "
          }
        >
          <img
            id="suppliers-img"
            src={Partner1}
            alt={`partner1`}
            className={
              isMobile
                ? "rounded w-full min-w-[150px]  h-[80px] object-cover m-auto block"
                : "rounded w-full  h-full object-cover "
            }
          />
        </div>
        <div
          className={
            isMobile ? "img-container-tablet  h-full" : "img-container-mobile "
          }
        >
          <img
            id="suppliers-img"
            src={Partner2}
            alt={`partner1`}
            className={
              isMobile
                ? "rounded w-full min-w-[150px]  h-[80px] object-cover "
                : "rounded w-full h-full object-cover "
            }
          />
        </div>
        <div
          className={
            isMobile ? "img-container-tablet  h-full" : "img-container-mobile "
          }
        >
          <img
            id="suppliers-img"
            src={Partner3}
            alt={`partner1`}
            className={
              isMobile
                ? "rounded w-full min-w-[150px]  h-[80px] object-cover "
                : "rounded w-full h-full object-cover "
            }
          />
        </div>
        {/* #4 */}
        <div
          className={
            isMobile ? "img-container-tablet  h-full" : "img-container-mobile "
          }
        >
          <img
            id="suppliers-img"
            src={Partner4}
            alt={`partner1`}
            className={
              isMobile
                ? "rounded w-full min-w-[150px]  h-[80px] object-cover m-auto block"
                : "rounded w-full  h-full object-cover "
            }
          />
        </div>
        <div
          className={
            isMobile ? "img-container-tablet " : "img-container-mobile"
          }
        >
          <img
            id=""
            src={Partner5}
            alt={`partner1`}
            className={
              isMobile
                ? "thaiRent rounded min-w-[150px]  h-full  object-contain p-2"
                : "thaiRent rounded w-full  h-full object-contain p-2 "
            }
          />
        </div>
        <div
          className={
            isMobile ? "img-container-tablet  h-full" : "img-container-mobile "
          }
        >
          <img
            id="suppliers-img"
            src={Partner6}
            alt={`partner1`}
            className={
              isMobile
                ? "rounded w-full min-w-[150px]  h-[80px] object-cover "
                : "rounded w-full h-full object-cover "
            }
          />
        </div>
        <div
          className={
            isMobile
              ? "img-container-tablet  h-fit"
              : "img-container-mobile h-fit w-fit"
          }
        >
          <img
            id="suppliers-img"
            src={Partner7}
            alt={`partner1`}
            className={
              isMobile
                ? "rounded w-full min-w-[150px]  h-[80px] object-cover "
                : "rounded w-fit  h-fit object-cover "
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Supplier;
