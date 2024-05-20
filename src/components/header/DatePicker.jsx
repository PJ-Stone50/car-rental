import { useState, useRef, useEffect } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useMediaQuery } from "react-responsive";
import { BsCalendar2Date } from "react-icons/bs";
import "./datePicker.css";
import { CalendarOutlined } from "@ant-design/icons";

function DatePicker({ openDate, setOpenDate }) {
  const isTablet = useMediaQuery({ query: "(min-width: 1240px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 768px)" });
  const isMobile2 = useMediaQuery({ query: "(min-width: 460px)" });

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

  const [endTime, setEndTime] = useState("18:00");

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

  const generateOptionsStartTime = () => {
    const options = [];
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();

    // Get the start date from the state
    const selectedStartDate = date.startDate;

    // Calculate the current hour and minute
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`;

        // Check if the selected start date is today
        const isToday = selectedStartDate.getDate() === currentDate.getDate();

        // Disable times from 0:00 to 05:30
        if (
          hour < 5 ||
          (hour === 5 && minute <= 30) ||
          (isToday &&
            (hour < currentHour ||
              (hour === currentHour && minute <= currentMinute)))
        ) {
          options.push(
            <option key={timeString} value={timeString} disabled>
              {timeString}
            </option>
          );
        } else {
          // Allow selecting other times
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

  // Function to generate options for end time selection
  const generateOptionsEndTime = () => {
    const options = [];

    // Calculate options for each hour and minute
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`;

        // Disable times from 0:00 to 6:00
        if (hour < 6 || (hour === 6 && minute === 0)) {
          options.push(
            <option key={timeString} value={timeString} disabled>
              {timeString}
            </option>
          );
        } else {
          // Allow selecting other times
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

  // Function to handle change in select input for endTime
  const handleEndChange = (event) => {
    const selectedEndTime = event.target.value;
    setEndTime(selectedEndTime);
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
          ? "containerDateRange   mb-[1rem]"
          : "containerDateRange flex flex-col  "
      }
      style={{ zIndex: 2 }}
    >
      <div
        className={
          isTablet
            ? "relative flex w-full items-center"
            : "relative flex w-full items-center  pb-[1rem]"
        }
      >
        <div
          className={
            isTablet
              ? "startDateContainer flex w-full h-full mr-[1rem]"
              : "startDateContainer flex w-full h-full "
          }
        >
          <label
            htmlFor=""
            className={
              isTablet
                ? "absolute top-[18px] right-[125px]"
                : "absolute top-[16px] right-[110px]"
            }
            style={{ zIndex: "2" }}
          >
            <CalendarOutlined
              onClick={() => setOpenDate(!openDate)}
              className={
                isMobile2
                  ? "scale-[140%] opacity-60 duration-500"
                  : "scale-[140%] opacity-60 duration-500"
              }
            />
            {/* <h1>TEST</h1> */}
          </label>
          <span
            id="openStartDate"
            name="openStartDate"
            style={{
              borderTopLeftRadius: "3px",
              borderBottomLeftRadius: "3px",
            }}
            className={
              isTablet
                ? "calendar w-full  h-fit pt-[1.5rem]  justify-end text-start pr-[8rem]  relative whitespace-nowrap border-r-[0px] font-normal  cursor-pointer  flex flex-col  border-r-none bg-[#F3F6F9] z-0   border-[1.5px] border-[#E0E3E7]"
                : "calendar w-full  h-full  justify-end text-start relative whitespace-nowrap border-r-[0px] font-normal cursor-pointer  flex flex-col  border-r-none bg-[#F3F6F9]  border-[1.5px] z-0 border-[#E0E3E7]"
            }
            onClick={() => setOpenDate(!openDate)}
          >
            {date.startDate ? (
              <p className="mb-[-0.75rem] ml-[-0.5rem] text-[16px]">
                {date.startDate && format(date.startDate, "MMM, dd, yyyy")}
              </p>
            ) : (
              <p className="mb-[-.5rem] ">startDate</p>
            )}
            <h1
              htmlFor=""
              className="absolute top-[7.5px] font-normal text-[11px] left-3   text-[#424242]"
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
              className="whitespace-nowrap cursor-pointer  w-fit px-3 h-full  text-center items-center border-l-[1px] bg-[#F3F6F9]  border-[1.5px] border-[#E0E3E7]"
              style={{
                borderTopRightRadius: "5%",
                borderBottomRightRadius: "5%",
              }}
            >
              {generateOptionsStartTime()}
            </select>
          </div>
        </div>
      </div>

      <div className="relative flex w-full items-center">
        <label
          htmlFor=""
          className="absolute top-[18px] right-[110px]"
          style={{ zIndex: "2" }}
        >
          <CalendarOutlined
            onClick={() => setOpenDate(!openDate)}
            className={
              isMobile2
                ? "scale-[140%] opacity-60 duration-500"
                : "scale-[140%] opacity-60 duration-500"
            }
          />
        </label>
        <span
          style={{
            borderTopLeftRadius: "3px",
            borderBottomLeftRadius: "3px",
          }}
          className={
            isMobile
              ? "calendar w-full  h-fit pt-[1.5rem]  justify-end text-start pr-[8rem]  relative whitespace-nowrap border-r-[0px] font-normal  cursor-pointer  flex flex-col  border-r-none bg-[#F3F6F9] z-0   border-[1.5px] border-[#E0E3E7]"
              : "calendar w-full  h-full  justify-end text-start relative whitespace-nowrap border-r-[0px] font-normal cursor-pointer  flex flex-col  border-r-none bg-[#F3F6F9]  border-[1.5px] z-0 border-[#E0E3E7]"
          }
          onClick={() => setOpenDate(!openDate)}
        >
          {date.endDate ? (
            <p className="mb-[-0.75rem] ml-[-0.5rem] text-[16px]">
              {date.endDate && format(date.endDate, "MMM, dd, yyyy")}
            </p>
          ) : (
            <p className="mb-[-.5rem] ">endDate</p>
          )}
          <label
            htmlFor="openStartDate"
            className="absolute  top-[7.5px] font-normal text-[11px] left-3   text-[#424242]"
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
            className="whitespace-nowrap cursor-pointer  w-fit px-3 h-[58px]  text-center items-center border-l-[1px] bg-[#F3F6F9]  border-[1.5px] border-[#E0E3E7]"
            style={{
              borderTopRightRadius: "5%",
              borderBottomRightRadius: "5%",
            }}
          >
            {generateOptionsEndTime()}
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
                  ? "absolute top-[115%] left-[35px] z-[]  scale-110 transition-[1s]"
                  : "absolute top-[100%] left-[-120px]  z-[]  scale-110 transition-[1s]"
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
              className="centered-component "
            />
          )}
        </div>
      )}
    </div>
  );
}

export default DatePicker;
