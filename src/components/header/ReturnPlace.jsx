import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { CalendarOutlined } from "@ant-design/icons";
import { FaLocationDot } from "react-icons/fa6";

const ReturnPlace = ({ sameLocation, pickupLocation }) => {
  const isTablet = useMediaQuery({ query: "(min-width: 1240px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 460px)" });

  return (
    <div className="flex w-full  justify-start z-10">
      <FlyoutLink href="#" FlyoutContent={PricingContent} className="w-full">
        <div
          className={
            isTablet
              ? "relative w-full pl-[1.25rem] h-fit z-0 whitespace-nowrap cursor-pointer flex flex-col rounded bg-[#F3F6F9] py-4 px-2 pr-[10rem] border-[1.5px] border-[#E0E3E7]"
              : "relative w-full pl-[1.25rem] h-fit z-0 whitespace-nowrap cursor-pointer  flex flex-col rounded bg-[#F3F6F9] p-3 border-[1.5px] border-[#E0E3E7]"
          }
        >
          <h1 className="opacity-80 font-normal text-[12px] text-[#424242]">
            สถานที่คืนรถ
          </h1>
          <h1 className="text-[16px] font-normal text-black">สถานที่คืนรถ</h1>
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
            />
          </div>
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
      className="relative w-full h-fit z-40 "
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
                ? "absolute left-0 top-20 bg-red-500 text-black"
                : "absolute left-1/2 top-20 bg-red-500 text-black"
            }
          >
            {/* <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" /> */}
            {/* <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" /> */}
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = ({ pickupLocation }) => {
  const isTablet = useMediaQuery({ query: "(min-width: 1240px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    // iv
    //   className={
    //     isMobile
    //       ? "w-[700px] flex flex-col bg-green-500 p-5 shadow-lg justify-center items-center"
    //       : "w-[400px] flex flex-col bg-green-200 p-5 shadow-lg justify-center items-center"
    //   }
    // ></iv>
    <></>
  );
};

export default ReturnPlace;
