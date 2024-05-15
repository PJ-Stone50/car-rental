import { useState, useRef, useEffect } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useMediaQuery } from "react-responsive";

function DatePicker({ openDate, setOpenDate }) {
  const isTablet = useMediaQuery({ query: "(min-width: 1240px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 768px)" });

  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000), // Set endDate to 2 days after startDate
    key: "selection",
  });

  // Initialize state for selected time
  const [startTime, setStartTime] = useState(() => {
    // Get current time
    const currentTime = new Date();
    // Round the minutes up to the nearest 30 minutes
    const roundedMinutes = Math.ceil(currentTime.getMinutes() / 30) * 30;
    // Set the minutes to the rounded minutes
    currentTime.setMinutes(roundedMinutes);
    // Return formatted time
    return format(currentTime, "HH:mm");
  });

  const [endTime, setEndTime] = useState("00:00");

  // Function to handle change in select input
  const handleStartChange = (event) => {
    const selectedTime = event.target.value;
    const [selectedHour, selectedMinute] = selectedTime.split(":").map(Number);

    // Calculate the nearest 30-minute interval
    let newHour = selectedHour;
    let newMinute = selectedMinute >= 30 ? 30 : 0;

    // If the selected minute is 30, don't increment the hour
    if (selectedMinute === 30) {
      newMinute = 30;
    } else if (selectedMinute > 30) {
      // If the selected minute is greater than 30, set the minute to 0 and increment hour by 1
      newMinute = 0;
      newHour++;
    }

    // Update the startTime state with the calculated time
    const newTime = `${newHour.toString().padStart(2, "0")}:${newMinute
      .toString()
      .padStart(2, "0")}`;
    setStartTime(newTime);
  };

  // Function to handle change in select input
  const handleEndChange = (event) => {
    setEndTime(event.target.value);
  };
  const generateOptions = (isEndDate = false) => {
    const options = [];
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();

    // Get the start date from the state
    const selectedStartDate = date.startDate;

    // Calculate options for each hour and minute
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`;

        // If it's the start date and it's today, disable past times
        if (
          !isEndDate &&
          selectedStartDate.getDate() === currentDate.getDate() &&
          (hour < currentHour ||
            (hour === currentHour && minute <= currentMinute))
        ) {
          options.push(
            <option key={timeString} value={timeString} disabled>
              {timeString}
            </option>
          );
        } else {
          // Otherwise, enable the time
          options.push(
            <option key={timeString} value={timeString}>
              {timeString}
            </option>
          );
        }
      }
    }

    return options;
  };

  const handleChange = (ranges) => {
    setDate(ranges.selection);
  };

  const dateRangeRef = useRef(null);

  // useEffect hook to handle click events outside the dateRangeRef element
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if dateRangeRef exists and if the clicked element is outside it
      if (
        dateRangeRef.current &&
        !dateRangeRef.current.contains(event.target)
      ) {
        // If clicked outside, set openDate state to false
        setOpenDate(false);
      }
    };

    // Add event listener for mouse clicks on the document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up: remove event listener when component unmounts or dependencies change
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Empty dependency array ensures useEffect only runs on mount

  return (
    <div
      className={
        isTablet
          ? "containerDateRange gap-5"
          : "containerDateRange flex flex-col my-8 gap-3"
      }
    >
      <div className="flex w-full ">
        <span
          style={{
            borderTopLeftRadius: "3px",
            borderBottomLeftRadius: "3px",
          }}
          className={
            isMobile
              ? "calendar w-full max-h-[78px]  justify-end text-start pr-[8rem]  relative whitespace-nowrap border-r-[0px] font-bold  cursor-pointer  flex flex-col  border-r-none bg-[#F3F6F9] z-0   border-[1.5px] border-[#E0E3E7]"
              : "calendar w-full h-full  justify-end text-start relative whitespace-nowrap border-r-[0px] font-bold cursor-pointer  flex flex-col  border-r-none bg-[#F3F6F9]  border-[1.5px] z-0 border-[#E0E3E7]"
          }
          onClick={() => setOpenDate(!openDate)}
        >
          {date.startDate ? (
            <p className="mb-[-.5rem] ">
              {date.startDate && format(date.startDate, "MMM, dd, yyyy")}
            </p>
          ) : (
            <p className="mb-[-.5rem] ">startDate</p>
          )}
          <h1
            htmlFor=""
            className="absolute top-3 font-normal left-5 opacity-80  text-[#424242]"
          >
            วันที่และเวลารับรถ
          </h1>
        </span>
        {/* TimeSelect */}
        <div>
          <select
            id="timeSelectStart"
            value={startTime}
            onChange={handleStartChange}
            className="whitespace-nowrap cursor-pointer  w-fit px-3 h-[78px]  text-center items-center border-l-[1px] bg-[#F3F6F9]  border-[1.5px] border-[#E0E3E7]"
            style={{
              borderTopRightRadius: "5%",
              borderBottomRightRadius: "5%",
            }}
          >
            {generateOptions()}
          </select>
        </div>
      </div>

      <div className="flex w-full justify-center">
        <span
          style={{
            borderTopLeftRadius: "3px",
            borderBottomLeftRadius: "3px",
          }}
          className={
            isMobile
              ? "calendar w-full max-h-[78px]  justify-end text-start pr-[8rem]  relative whitespace-nowrap border-r-[0px] font-bold  cursor-pointer  flex flex-col  border-r-none bg-[#F3F6F9]    border-[1.5px] border-[#E0E3E7]"
              : "calendar w-full h-full  justify-end text-start relative whitespace-nowrap border-r-[0px] font-bold cursor-pointer  flex flex-col  border-r-none bg-[#F3F6F9]  border-[1.5px] border-[#E0E3E7]"
          }
          onClick={() => setOpenDate(!openDate)}
        >
          {date.endDate ? (
            <p className="mb-[-.5rem] ">
              {date.endDate && format(date.endDate, "MMM, dd, yyyy")}
            </p>
          ) : (
            <p className="mb-[-.5rem] ">endDate</p>
          )}
          <label
            htmlFor=""
            className="absolute top-3 font-normal left-5 opacity-80  text-[#424242]"
          >
            วันที่และเวลาคืนรถ
          </label>
        </span>
        {/* TimeSelect */}
        <div className="">
          {/* <label htmlFor="timeSelect">Select Time:</label> */}
          <select
            id="timeSelectEnd"
            value={endTime}
            onChange={handleEndChange}
            className=" whitespace-nowrap cursor-pointer w-fit px-3 h-[78px] border-l-[1px] text-center items-center  bg-[#F3F6F9]  border-[1.5px] border-[#E0E3E7]"
            style={{
              borderTopRightRadius: "5%",
              borderBottomRightRadius: "5%",
            }}
          >
            {generateOptions()}
          </select>
          {/* <p>Selected Time: {selectedTime}</p> */}
        </div>
      </div>
      {openDate && (
        <div ref={dateRangeRef} style={{ background: "green", zIndex: 2 }}>
          {isMobile ? (
            <DateRange
              className={
                isTablet
                  ? "absolute top-[100%] left-[-200px]   scale-110 transition-[1s]"
                  : "absolute top-[100%] left-[-40px]    scale-110 transition-[1s]"
              }
              style={{ zIndex: 2 }}
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
              editableDateInputs={true}
              onChange={(ranges) => handleChange(ranges)}
              moveRangeOnFirstSelection={false}
              ranges={[date]}
              showSelectionPreview={true}
              months={2}
              direction="vertical"
              minDate={new Date()}
              className={
                isMobile
                  ? "centered-component absolute top-[50%] left-[50%] transform translate(-50%, -50%) bg-blue-200 scale-110 transition-[1s]"
                  : "centered-component absolute top-[50%] left-[-45px] transform translate(-50%, -50%)  scale-[95%] transition-[1s]"
              }
            />
          )}
        </div>
      )}
    </div>
  );
}

export default DatePicker;
