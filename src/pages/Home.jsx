import { useState } from "react";
import Navbar from "../components/Navbar";
import HomeBackground from "../../public/images/backgrounds/home-bg1.png";
import { useMediaQuery } from "react-responsive";
import DatePickerAntDesign from "../components/DatePickerAntDesign";

export default function Home() {
  const isTablet = useMediaQuery({ query: "(min-width: 780px)" });
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

      <div className="relative w-full h-full bg-white flex justify-center items-center">
        <img
          src={HomeBackground}
          alt="Home background"
          className="absolute w-full h-1/2 top-0 object-cover"
        />

        <div
          className={
            isTablet
              ? "flex gap-3 bg-white rounded-lg pt-5 px-5  w-fit pb-[3rem] h-fit absolute top-[25%] p-4 shadow-lg z-10"
              : "flex flex-col bg-white rounded-lg gap-3  px-5 w-10/12 md:max-w-md h-fit absolute top-[25%] p-4 shadow-lg z-10"
          }
        >
          <div
            className={
              isTablet
                ? "custom-checkbox  items-center flex justify-center absolute bottom-[12px]  "
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

          <div className="pickup">
            <h1 className="opacity-80">สถานที่รับรถ</h1>
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
          </div>

          <div className="return">
            {!sameLocation && (
              <div>
                <h1>สถานที่คืนรถ</h1>
                <select
                  name="return-place"
                  id="return-place"
                  value={returnLocation}
                  onChange={handleReturnChange}
                  className="w-full p-2 border min-w-[182px] rounded border-gray-300 focus:border-blue-500 focus:outline-none"
                >
                  <option value="">เลือกสถานที่เพื่อคืนรถ...</option>
                  {pickupPlaces.map((place) => (
                    <option key={place.id} value={place.id}>
                      {place.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
          <div className="container-date   w-full h-full mt-[1.5rem]">
            <DatePickerAntDesign />
          </div>
          <button className="rounded-lg bg-amber-500 text-white text-[18px] px-5 py-2 mt-5 w-fit h-fit">
            ค้นหา
          </button>
        </div>

        {/* <DatePickerAntDesign /> */}
      </div>

      <h1>Home</h1>
    </div>
  );
}
