import React, { useState } from "react";

function TimeSelect() {
  // Initialize state for selected time
  const [selectedTime, setSelectedTime] = useState("00:00");

  // Function to handle change in select input
  const handleSelectChange = (event) => {
    setSelectedTime(event.target.value);
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

  return (
    <div>
      <label htmlFor="timeSelect">Select Time:</label>
      <select
        id="timeSelect"
        value={selectedTime}
        onChange={handleSelectChange}
      >
        {generateOptions()}
      </select>
      <p>Selected Time: {selectedTime}</p>
    </div>
  );
}

export default TimeSelect;
