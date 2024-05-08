import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import HomeBackground from "../../public/images/backgrounds/home-bg.jpeg";
import { useMediaQuery } from "react-responsive";
import DatePickerAntDesign from "../components/DatePickerAntDesign";
import { BsInfoCircle } from "react-icons/bs";
import AgeSelect from "../components/AgeSelect";

export default function Home() {
  const isTablet = useMediaQuery({ query: "(min-width: 1080px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 768px)" });
  const [pickupLocation, setPickupLocation] = useState("");
  const [returnLocation, setReturnLocation] = useState("");
  const [sameLocation, setSameLocation] = useState(true);

  const handlePickupChange = (event) => {
    setPickupLocation(event.target.value);
  };

  const handleReturnChange = (event) => {
    setReturnLocation(event.target.value);
  };

  const toggleSameLocation = () => {
    console.log("SameLocation", sameLocation);
    console.log("ReturnLocation", returnLocation);
    setSameLocation(!sameLocation);
    if (sameLocation) {
      setReturnLocation(""); // Reset return location when checkbox is checked
    }
  };

  const pickupPlaces = [
    { id: "bangkok", name: "Bangkok" },
    { id: "chiang_mai", name: "Chiang Mai" },
    { id: "phuket", name: "Phuket" },
    { id: "krabi", name: "Krabi" },
    { id: "pattaya", name: "Pattaya" },
    { id: "hua_hin", name: "Hua Hin" },
    { id: "koh_samui", name: "Koh Samui" },
    { id: "udon_thani", name: "Udon Thani" },
    { id: "khon_kaen", name: "Khon Kaen" },
    { id: "nakhon_ratchasima", name: "Nakhon Ratchasima" },
  ];

  return (
    <div className="w-screen h-screen">
      <Navbar />

      <div
        className="relative w-full h-full py-[3rem]  flex justify-center "
        // style={{
        //   backgroundImage: `url(${HomeBackground})`,
        // }}
      >
        <img
          src={HomeBackground}
          alt="Home background"
          className="  w-full h-1/2 absolute top-0 object-cover"
        />
        <div
          className={
            isTablet
              ? "w-fit h-fit flex gap-3 bg-white mx-[1rem] pt-[4rem] rounded-lg pt-5 px-5   pb-[5rem]  absolute top-[20%] p-4 shadow-lg z-10"
              : "w-full h-fit flex flex-col bg-white mx-[3rem] rounded-lg gap-3  px-5     p-4 shadow-lg z-10"
          }
        >
          <div
            className={
              isTablet
                ? "custom-checkbox  items-center flex justify-center absolute top-[20px]  "
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
            <label htmlFor="same-location-checkbox" className="">
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
                  ? "w-full h-fit whitespace-nowrap cursor-pointer pr-[3rem] flex flex-col rounded-md bg-[#F3F6F9] py-3 px-2 border-[1.5px] border-[#E0E3E7]"
                  : "w-full h-fit whitespace-nowrap cursor-pointer  flex flex-col rounded-md bg-[#F3F6F9] p-3 border-[1.5px] border-[#E0E3E7]"
              }
            >
              {sameLocation ? (
                <h1 className="opacity-80 ">สถานที่รับและคืนรถ</h1>
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
                      ? "w-full h-fit whitespace-nowrap cursor-pointer pr-[5rem] flex flex-col rounded-md bg-[#F3F6F9] py-3 px-2 border-[1.5px] border-[#E0E3E7]"
                      : "w-full h-fit whitespace-nowrap cursor-pointer  flex flex-col rounded-md bg-[#F3F6F9] p-3 border-[1.5px] border-[#E0E3E7]"
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
            <DatePickerAntDesign />
          </div>
          <div
            className={
              isMobile
                ? " items-center flex justify-center absolute bottom-[12px] right-5  w-full pl-[2.5rem]"
                : "flex flex-col gap-3 justify-between items-center py-[.5rem]  w-full "
            }
          >
            <div className="flex gap-2 w-full pr-[1rem] whitespace-nowrap items-center text-[18px] font-medium">
              <p className="">อายุของผู้ขับขี่</p>
              <BsInfoCircle /> : <p>อยู่ระหว่าง</p>
              <AgeSelect />
            </div>
            {/* <label
              className={
                isMobile
                  ? "cursor-pointer px-5 py-3 w-full bg-black whitespace-nowrap text-white text-[18px] font-semibold p-3 rounded-lg"
                  : "cursor-pointer px-5 py-3 w-full bg-amber-200 whitespace-nowrap text-white text-[18px] font-semibold p-3 rounded-lg"
              }
              // style={{
              //   background:
              //     "linear-gradient(90deg, rgba(254,84,28,1) 0%, rgba(239,55,68,1) 100%)",
              // }}
            >
              ค้นหา
            </label> */}
            <button
              htmlFor=""
              className={
                isTablet
                  ? "cursor-pointer px-5 py-3 w-1/3 bg-amber-200 whitespace-nowrap text-white text-[18px] font-semibold p-3 rounded-lg"
                  : "cursor-pointer px-5 py-3 w-full bg-amber-500  whitespace-nowrap text-white text-[18px] font-semibold p-3 rounded-lg"
              }
              // style={{
              //   background:
              //     "linear-gradient(90deg, rgba(254,84,28,1) 0%, rgba(239,55,68,1) 100%)",
              // }}
            >
              Search
            </button>
          </div>
        </div>

        {/* <DatePickerAntDesign /> */}
      </div>
    </div>
  );
}
