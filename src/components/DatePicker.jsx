import React, { useState } from "react";
import "../components/datePicker.css";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

function DatePicker() {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleChange = (ranges) => {
    setDate(ranges.selection);
  };

  const handleClick = () => {
    setOpenDate((prev) => !prev);
  };

  return (
    <div className="container">
      <span onClick={handleClick} className="calender">
        {`${format(date.startDate, "dd,MMM,yyyy")} to ${format(
          date.endDate,
          "dd,MMM,yyyy"
        )} `}
      </span>
      {openDate && (
        <DateRangePicker
          className="dateRange"
          ranges={[date]}
          minDate={new Date()}
          onChange={handleChange}
        />
      )}
    </div>
  );
}

export default DatePicker;
