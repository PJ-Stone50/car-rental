// PickupPlace.js

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { RippleButton } from "../navbar/ripple/RippleButton";
import { CalendarOutlined } from "@ant-design/icons";
import { FaLocationDot } from "react-icons/fa6";

const PickupPlace = ({ sameLocation, pickupLocation, setPickupLocation }) => {
  const isTablet = useMediaQuery({ query: "(min-width: 1240px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 460px)" });

  useEffect(() => {
    console.log("PickupLocation", pickupLocation);
  }, [pickupLocation]);

  return (
    <div className="flex w-full justify-start z-0">
      <FlyoutLink
        href="#"
        FlyoutContent={() => (
          <PricingContent
            pickupLocation={pickupLocation}
            setPickupLocation={setPickupLocation}
          />
        )}
        className="w-full"
      >
        <div
          className={
            isTablet
              ? "relative w-full  h-fit pl-[1.25rem] py-4 whitespace-nowrap cursor-pointer flex flex-col rounded bg-[#F3F6F9]  px-2 pr-[10rem] border-[1.5px] border-[#E0E3E7]"
              : "relative w-full  h-fit pl-[1.25rem] whitespace-nowrap cursor-pointer  flex flex-col rounded bg-[#F3F6F9] p-3 border-[1.5px] border-[#E0E3E7]"
          }
        >
          {sameLocation ? (
            <div className="">
              <h1 className="text-[12px] text-[#424242] ">
                สถานที่รับและคืนรถ
              </h1>
              <div
                className={
                  isMobile
                    ? "absolute top-[30px] right-[130px] text-black opacity-60"
                    : "absolute top-[30px] right-[30px] text-black opacity-60"
                }
                style={{ zIndex: "2" }}
              >
                <FaLocationDot
                  className={
                    isMobile
                      ? "scale-[200%] duration-500"
                      : "scale-[150%] duration-500"
                  }
                  width={100}
                  height={100}
                />
              </div>
            </div>
          ) : (
            <div className="">
              <h1 className="opacity-80 text-[#424242] text-[12px]">
                สถานที่รับรถ
              </h1>
              <div
                className="absolute top-[25px] right-[30px] text-black opacity-60"
                style={{ zIndex: "2" }}
              >
                <FaLocationDot
                  className={
                    isMobile
                      ? "scale-[200%] duration-500"
                      : "scale-[150%] duration-500"
                  }
                  width={100}
                  height={100}
                />
              </div>
            </div>
          )}
          {pickupLocation ? (
            <h1 className="text-black font-semibold text-[20px]">
              {pickupLocation}
            </h1>
          ) : (
            <h1 className="text-[16px] font-normal text-black">
              {sameLocation ? "สถานที่รับและคืนรถ" : "สถานที่รับรถ"}
            </h1>
          )}
        </div>
      </FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(min-width: 768px)" });
  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-full h-fit z-30 "
    >
      <a href={href} className="relative text-white">
        {children}
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={
              isMobile
                ? "absolute left-full top-20 bg-white text-black"
                : "absolute left-1/2 top-20 bg-white text-black"
            }
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = ({ pickupLocation, setPickupLocation }) => {
  const isTablet = useMediaQuery({ query: "(min-width: 1240px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    // <div
    //   className={
    //     isMobile
    //       ? "w-[700px] flex flex-col bg-amber-500 p-5 shadow-lg"
    //       : "w-[400px] flex flex-col bg-amber-200 p-5 shadow-lg"
    //   }
    // >
    //   <ul className="flex flex-wrap gap-2 cursor-pointer">
    //     <li value="location1" onClick={(e) => setPickupLocation("กรุงเทพ")}>
    //       location1
    //     </li>
    //     <li value="location2" onClick={(e) => setPickupLocation("พัทยา")}>
    //       location2
    //     </li>
    //     <li value="location3" onClick={(e) => setPickupLocation("เชียงใหม่")}>
    //       location3
    //     </li>
    //     <li value="location4" onClick={(e) => setPickupLocation("เชียงราย")}>
    //       location4
    //     </li>
    //   </ul>
    // </div>
    <></>
  );
};

export default PickupPlace;
