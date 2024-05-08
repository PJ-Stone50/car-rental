import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import HomeBackground from "../../public/images/backgrounds/home-bg.jpeg";
import { useMediaQuery } from "react-responsive";
import DatePickerAntDesign from "../components/DatePickerAntDesign";

export default function Home() {
  const isTablet = useMediaQuery({ query: "(min-width: 1080px)" });
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
              ? "w-fit h-fit flex gap-3 bg-white mx-[3rem]  rounded-lg pt-5 px-5   pb-[5rem]  absolute top-[20%] p-4 shadow-lg z-10"
              : "w-full h-fit flex flex-col bg-white mx-[3rem] rounded-lg gap-3  px-5     p-4 shadow-lg z-10"
          }
        >
          <div
            className={
              isTablet
                ? "custom-checkbox  items-center flex justify-center absolute bottom-[20px]  "
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

          <div className="flex gap-3">
            {/* <div className="pickup w-full">
              {sameLocation ? (
                <h1 className="opacity-80">สถานที่รับและคืนรถ</h1>
              ) : (
                <h1 className="opacity-80">สถานที่รับรถ</h1>
              )}
              <select
                name="pickup-place"
                id="pickup-place"
                value={pickupLocation}
                onChange={handlePickupChange}
                className={
                  sameLocation && isTablet
                    ? "w-[385px] min-w-[180px] p-2 border rounded border-gray-300 focus:border-blue-500 focus:outline-none"
                    : "w-full min-w-[180px] p-2 border rounded border-gray-300 focus:border-blue-500 focus:outline-none"
                }
              >
                <option value="" className="whitespace-nowrap w-full">
                  เลือกสถานที่เพื่อรับรถ...
                </option>
                {pickupPlaces.map((place) => (
                  <option key={place.id} value={place.id}>
                    {place.name}
                  </option>
                ))}
              </select>
            </div> */}
            <div className="w-full h-fit whitespace-nowrap pr-[5rem] flex flex-col rounded-md bg-[#F3F6F9] p-3 border-[1.5px] border-[#E0E3E7] ">
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
                <div className="w-full h-fit pr-[5rem] whitespace-nowrap flex flex-col rounded-md bg-[#F3F6F9] p-3 border-[1.5px] border-[#E0E3E7] ">
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
                ? "container-date   w-full h-full mt-[1.5rem]"
                : "container-date   w-full h-full"
            }
          >
            <DatePickerAntDesign />
          </div>
          <div
            className={
              isTablet
                ? " items-center flex justify-center absolute bottom-[12px] right-5 "
                : "ml-auto py-[.5rem]"
            }
          >
            <label
              className="cursor-pointer whitespace-nowrap text-white text-[18px] font-semibold p-3 rounded-lg"
              style={{
                background:
                  "linear-gradient(90deg, rgba(254,84,28,1) 0%, rgba(239,55,68,1) 100%)",
              }}
            >
              ค้นหา
            </label>
          </div>
        </div>

        {/* <DatePickerAntDesign /> */}
      </div>
    </div>
  );
}
