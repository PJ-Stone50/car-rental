import { useState } from "react";

import HomeBackground from "../../../public/images/backgrounds/home-bg.jpeg";
import { useMediaQuery } from "react-responsive";
import { FaCircleInfo } from "react-icons/fa6";
import AgeSelect from "../../components/header/AgeSelect";
import DatePicker from "../../components/header/DatePicker";

import CustomTooltip from "../../components/CustomTooltip";
import { RippleButton } from "../../components/navbar/RippleButton";

const text = <></>;

const content = (
  <div className="z-10">
    <p>บริษัทเช่ารถอาจเรียกเก็บค่าธรรมเนียมเพิ่มเติม หากผู้ขับขี่</p>
    <p>มีอายุไม่เกิน 21 ปีหรือ 65 ปีขึ้นไป อายุที่เลือกควรเป็นอายุ</p>
    <p>ของผู้ขับขี่ ในระหว่างการเช่าโปรดตรวจสอบข้อกำหนด</p>
    <p>และเงื่อนไขสำหรับรายละเอียดเพิ่มเติม</p>
  </div>
);

function Header() {
  const isTablet = useMediaQuery({ query: "(min-width: 1240px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 768px)" });

  const [pickupLocation, setPickupLocation] = useState("");
  const [returnLocation, setReturnLocation] = useState("");
  const [sameLocation, setSameLocation] = useState(true);

  const toggleSameLocation = () => {
    console.log("SameLocation", sameLocation);
    console.log("ReturnLocation", returnLocation);
    setSameLocation(!sameLocation);
    if (sameLocation) {
      setReturnLocation(""); // Reset return location when checkbox is checked
    }
  };

  return (
    <div className="relative w-full h-fit   flex justify-center ">
      <div
        style={{
          backgroundImage: `url(${HomeBackground})`,
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
        className={
          isMobile
            ? "w-full h-[500px] bg-white px-5 flex justify-center items-center"
            : "w-full h-[700px] px-5 flex justify-center items-center"
        }
      >
        <div
          className={
            isTablet
              ? "w-fit h-fit mx-[5rem] flex gap-3 bg-white   rounded  px-5   pb-[5rem]  absolute top-[20%] p-4 shadow-lg z-10"
              : "w-full h-fit  mx-[5rem] flex flex-col bg-white  rounded gap-3  px-5     p-4 shadow-lg z-10"
          }
        >
          <div
            className={
              isTablet
                ? "custom-checkbox  items-center flex justify-center absolute bottom-[25px] "
                : "custom-checkbox   "
            }
          >
            <input
              name="same-location-checkbox"
              type="checkbox"
              id="same-location-checkbox"
              checked={sameLocation}
              onChange={toggleSameLocation}
              className="mr-2 "
              style={{ display: "none" }} // Hide the default checkbox
            />
            <label htmlFor="same-location-checkbox" className="z-10">
              ส่งรถคืนที่เดิม
            </label>
          </div>

          <div
            className={
              isMobile
                ? "w-full flex gap-3 items-center"
                : "flex flex-col gap-3"
            }
          >
            <div
              className={
                isTablet
                  ? "w-full h-fit whitespace-nowrap cursor-pointer flex flex-col rounded bg-[#F3F6F9] py-3 px-2 pr-[10rem] border-[1.5px] border-[#E0E3E7]"
                  : "w-full h-fit whitespace-nowrap cursor-pointer  flex flex-col rounded bg-[#F3F6F9] p-3 border-[1.5px] border-[#E0E3E7]"
              }
            >
              {sameLocation ? (
                <h1 className="text-[14px] text-[#424242]">
                  สถานที่รับและคืนรถ
                </h1>
              ) : (
                <h1 className="opacity-80">สถานที่รับรถ</h1>
              )}
              {pickupLocation ? (
                <h1>{pickupLocation}</h1>
              ) : (
                <h1 className="text-[20px] font-semibold">
                  {sameLocation ? "สถานที่รับและคืนรถ" : "สถานที่รับรถ"}
                </h1>
              )}
            </div>

            <div className={sameLocation ? "hidden" : "return w-full"}>
              {!sameLocation && (
                <div
                  className={
                    isTablet
                      ? "w-full mr-[6rem] h-fit whitespace-nowrap cursor-pointer pr-[5rem] flex flex-col rounded bg-[#F3F6F9] py-3 px-2 border-[1.5px] border-[#E0E3E7]"
                      : "w-full  h-fit whitespace-nowrap cursor-pointer  flex flex-col rounded bg-[#F3F6F9] p-3 border-[1.5px] border-[#E0E3E7]"
                  }
                >
                  <h1 className="opacity-80 ">สถานที่คืนรถ</h1>

                  {returnLocation ? (
                    <h1>{returnLocation}</h1>
                  ) : (
                    <h1 className="text-[20px] font-semibold">สถานที่คืนรถ</h1>
                  )}
                </div>
              )}
            </div>
          </div>
          <div
            className={
              isTablet
                ? "container-date items-center mt-[.25rem] w-full h-full "
                : "container-date items-center  w-full h-full"
            }
          >
            <DatePicker className="p-5 " />
          </div>
          <div
            className={
              isTablet
                ? "  items-center flex justify-between  absolute bottom-[12px] w-[95%]   "
                : " md:flex justify-start  items-center py-[.5rem]  w-full "
            }
          >
            <div
              className={
                isTablet
                  ? "flex gap-2 w-full ml-[20rem] pr-[1rem] whitespace-nowrap items-center text-[16px] font-normal text-[#424242]"
                  : "flex gap-2 w-fit text-[13px] pr-[1rem] whitespace-nowrap items-center  font-normal text-[#424242]  "
              }
              // style={{ fontSize: "1.5vw" }}
            >
              <p className="">อายุของผู้ขับขี่</p>
              <CustomTooltip title={text} content={content}>
                <FaCircleInfo className="min-w-[15px] min-h-[15px] cursor-pointer" />
              </CustomTooltip>

              <p>อยู่ระหว่าง</p>
              <AgeSelect />
            </div>

            {/* <button
          htmlFor=""
          className={
            isTablet
              ? "w-fit px-[3rem] cursor-pointer items-center flex gap-2 justify-center   whitespace-nowrap text-white text-[18px] font-semibold p-3 rounded-full"
              : "w-full cursor-pointer items-center flex gap-2 justify-center  md:mt-[0rem] mt-[1rem]   whitespace-nowrap text-white text-[18px] font-semibold p-3 rounded-lg"
          }
          style={{
            background:
              "linear-gradient(90deg, rgba(254,84,28,1) 0%, rgba(239,55,68,1) 100%)",
          }}
        >
          <FaSearch className="w-[25px] h-[25px]" />
          Search
        </button> */}
            <RippleButton className="w-full">Search</RippleButton>
          </div>
        </div>
      </div>

      {/* <DatePickerAntDesign /> */}
    </div>
  );
}

export default Header;
