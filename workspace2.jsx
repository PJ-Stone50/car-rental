import { useState } from "react";

import HomeBackground from "../../../public/images/backgrounds/home-bg.jpeg";
import { useMediaQuery } from "react-responsive";
import { FaCircleInfo } from "react-icons/fa6";
import AgeSelect from "../../components/header/AgeSelect";
import DatePicker from "../../components/header/DatePicker";

import CustomTooltip from "../../components/CustomTooltip";
import { RippleButton } from "../../components/navbar/ripple/RippleButton";

import PickupPlace from "./PickupPlace";
import ReturnPlace from "./ReturnPlace";
import "./header.css";

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

  const [openDate, setOpenDate] = useState(false);
  const [pickupLocation, setPickupLocation] = useState("");
  const [returnLocation, setReturnLocation] = useState("");
  const [sameLocation, setSameLocation] = useState(true);
  const [includedIcon, setIncludedIcon] = useState(true);

  const toggleSameLocation = () => {
    console.log("SameLocation", sameLocation);
    console.log("ReturnLocation", returnLocation);
    setSameLocation(!sameLocation);
    if (sameLocation) {
      setReturnLocation(""); // Reset return location when checkbox is checked
    }
  };

  return (
    <div className="relative w-full h-fit  flex justify-center">
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
            ? "w-full h-[500px] duration-1000 bg-white px-5 flex justify-center items-center"
            : "w-full h-[650px] duration-1000 px-5 flex justify-center items-center"
        }
      >
        <diva
          className={`contentContainer mb-[10rem] bg-white w-fit h-fit mx-[5rem] max-w-[1230px] flex gap-3  rounded px-5  absolute top-[15%] py-3 shadow-lg z-10
    ${isTablet ? " pb-[3rem]" : " w-3/4 md:w-[50%] h-fit flex-col"}
    ${sameLocation && "max-w-[1020px] "}`}
        >
          <div
            className={
              isTablet
                ? "custom-checkbox items-center flex justify-center absolute bottom-[25px] z-10"
                : "custom-checkbox"
            }
          >
            <input
              name="same-location-checkbox"
              type="checkbox"
              id="same-location-checkbox"
              checked={sameLocation}
              onChange={toggleSameLocation}
              className=""
              style={{ display: "none" }} // Hide the default checkbox
            />
            <label
              htmlFor="same-location-checkbox"
              className="z-0"
              style={{ paddingLeft: "2rem " }}
            >
              ส่งรถคืนที่เดิม
            </label>
          </div>

          <div
            className={
              isMobile
                ? "w-full flex gap-3 mb-[1rem] items-center pb-[2rem] md:pb-0 xl:pb-0"
                : "flex flex-col gap-3 mb-[1rem]"
            }
          >
            <PickupPlace
              sameLocation={sameLocation}
              pickupLocation={pickupLocation}
              setPickupLocation={setPickupLocation}
            />
            {!sameLocation && (
              <ReturnPlace
                sameLocation={sameLocation}
                pickupLocation={pickupLocation}
              />
            )}
          </div>
          <div
            className={
              isTablet
                ? "container-date items-center w-full h-fit z-10"
                : "container-date items-start w-full h-fit"
            }
          >
            <DatePicker
              openDate={openDate}
              setOpenDate={setOpenDate}
              className="p-"
            />
          </div>
          <div
            className={
              isTablet
                ? "items-center flex justify-between absolute bottom-[12px] w-[97%] "
                : "md:flex justify-between items-center py-[.5rem] w-full"
            }
          >
            <div
              className={
                isTablet
                  ? "w-full flex items-center justify-center pt-[.75rem] gap-1 whitespace-nowrap text-[#424242]"
                  : "w-full flex items-center justify-start pt-[.75rem] gap-1 whitespace-nowrap text-[#424242]"
              }
            >
              <p className="" style={{}}>
                อายุของผู้ขับขี่
              </p>
              <CustomTooltip
                openDate={openDate}
                setOpenDate={setOpenDate}
                title={text}
                content={content}
              >
                <FaCircleInfo
                  // style={{ zIndex: "-1" }}
                  className="min-w-[15px] min-h-[15px] cursor-pointer"
                />
                {/* <h1>Info</h1> */}
              </CustomTooltip>
              <p>อยู่ระหว่าง</p>
              <AgeSelect />
            </div>

            <RippleButton
              includedIcon={includedIcon}
              style={{ display: "flex" }}
              className="flex "
            >
              Search
            </RippleButton>
          </div>
        </diva>
      </div>
    </div>
  );
}

export default Header;
