import { useState, useRef, useEffect } from "react";
import { DateRangePicker, DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useMediaQuery } from "react-responsive";
import { RiH1 } from "react-icons/ri";

function DatePicker() {
  const isTablet = useMediaQuery({ query: "(min-width: 1260px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 768px)" });

  const smallDevice = window.matchMedia("(max-width: 400px)").matches;
  // const orientation = smallDevice
  //   ? VERTICAL_ORIENTATION
  //   : HORIZONTAL_ORIENTATION;

  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: null,
    key: "selection",
  });

  // Initialize state for selected time
  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("00:00");

  // Function to handle change in select input
  const handleStartChange = (event) => {
    setStartTime(event.target.value);
  };
  // Function to handle change in select input
  const handleEndChange = (event) => {
    setEndTime(event.target.value);
  };

  // Generate options for select input
  const generateOptions = () => {
    const options = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`;
        options.push(
          <option key={timeString} value={timeString}>
            {timeString}
          </option>
        );
      }
    }
    return options;
  };

  const handleChange = (ranges) => {
    setDate(ranges.selection);
  };

  const dateRangeRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dateRangeRef.current &&
        !dateRangeRef.current.contains(event.target)
      ) {
        setOpenDate(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

    console.log("Status", openDate);
  }, []);

  return (
    <div
      className={
        isTablet
          ? "containerDateRange gap-5"
          : "containerDateRange flex flex-col my-8 gap-3"
      }
    >
      <div className="flex w-full">
        <span
          className={
            isMobile
              ? "calendar rounded pr-[8rem] pt-[2rem] relative whitespace-nowrap border-r-[0px] font-bold w-full h-fit cursor-pointer  flex flex-col  border-r-none bg-[#F3F6F9]  justify-center  border-[1.5px] border-[#E0E3E7]"
              : "calendar rounded  pt-[2rem] relative whitespace-nowrap border-r-[0px] font-bold w-full h-fit cursor-pointer  flex flex-col  border-r-none bg-[#F3F6F9]  justify-center  border-[1.5px] border-[#E0E3E7]"
          }
          onClick={() => setOpenDate(!openDate)}
        >
          {date.startDate ? (
            date.startDate && format(date.startDate, "MMM, dd, yyyy")
          ) : (
            <h1>startDate</h1>
          )}
          <h1
            htmlFor=""
            className="absolute top-3 left-5 font-normal text-[14px] text-[#424242]"
          >
            วันที่และเวลารับรถ
          </h1>
        </span>
        {/* TimeSelect */}
        <div>
          {/* <label htmlFor="timeSelect">Select Time:</label> */}
          <select
            id="timeSelect"
            value={startTime}
            onChange={handleStartChange}
            className=" whitespace-nowrap cursor-pointer w-fit  h-[78px] text-center items-center border-l-[0px] bg-[#F3F6F9]  border-[1.5px] border-[#E0E3E7]"
          >
            {generateOptions()}
          </select>
          {/* <p>Selected Time: {selectedTime}</p> */}
        </div>
      </div>

      <div className="flex w-full">
        <span
          className={
            isMobile
              ? "calendar pr-[8rem] pt-[2rem] relative whitespace-nowrap border-r-[0px] font-bold w-full h-fit cursor-pointer  flex flex-col  border-r-none bg-[#F3F6F9]  justify-center  border-[1.5px] border-[#E0E3E7]"
              : "calendar  pt-[2rem] relative whitespace-nowrap border-r-[0px] font-bold w-full h-fit cursor-pointer  flex flex-col  border-r-none bg-[#F3F6F9]  justify-center  border-[1.5px] border-[#E0E3E7]"
          }
          onClick={() => setOpenDate(!openDate)}
        >
          {date.endDate ? (
            date.endDate && format(date.endDate, "MMM, dd, yyyy")
          ) : (
            <h1>endDate</h1>
          )}
          <label
            htmlFor=""
            className="absolute top-3 left-5 font-normal text-[#424242]"
          >
            วันที่และเวลาคืนรถ
          </label>
        </span>
        {/* TimeSelect */}
        <div>
          {/* <label htmlFor="timeSelect">Select Time:</label> */}
          <select
            id="timeSelect"
            value={endTime}
            onChange={handleEndChange}
            className=" whitespace-nowrap cursor-pointer w-fit px-3 h-[78px] border-l-[0px] text-center items-center  bg-[#F3F6F9]  border-[1.5px] border-[#E0E3E7]"
          >
            {generateOptions()}
          </select>
          {/* <p>Selected Time: {selectedTime}</p> */}
        </div>
      </div>
      {openDate && (
        <div ref={dateRangeRef}>
          {isMobile ? (
            <DateRange
              className={
                isTablet
                  ? "absolute top-[100%] left-[-200px] bg-white z-10 scale-110 transition-[1s]"
                  : "absolute top-[100%] left-[0px] bg-white  z-10 scale-60 transition-[1s]"
              }
              onChange={(ranges) => handleChange(ranges)}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={[date]} // Pass date directly instead of wrapping it in an array
              direction="horizontal"
              minDate={new Date()} // Set minDate to the current date to disable past dates
            />
          ) : (
            <DateRange
              className={
                isMobile
                  ? "absolute top-[10px] left-[10px] z-10 bg-white"
                  : "absolute top-[100%] flex flex-col left-[-50px] z-10 bg-white"
              }
              withPortal={window.matchMedia("(max-width: 400px)").matches}
              onChange={(ranges) => handleChange(ranges)}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={[date]} // Pass date directly instead of wrapping it in an array
              direction="horizontal"
              minDate={new Date()} // Set minDate to the current date to disable past dates
            />
          )}
        </div>
      )}
    </div>
  );
}

export default DatePicker;
