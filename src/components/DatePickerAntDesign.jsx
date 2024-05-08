import React, { useEffect, useState, useMemo } from "react";
// import "../components/datePicker.css";
import { useMediaQuery } from "react-responsive";
import en from "antd/es/date-picker/locale/en_US";
import enUS from "antd/es/locale/en_US";
import buddhistEra from "dayjs/plugin/buddhistEra";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
dayjs.extend(buddhistEra);

// const dayjs = require("dayjs"); // Make sure to import or include dayjs library
const range = (start, end) =>
  Array.from({ length: end - start }, (_, i) => start + i);

//Antd
import { Space, TimePicker, DatePicker, Typography, Select } from "antd";
const { Title } = Typography;

// import moment from "moment";
const { RangePicker } = DatePicker;

const defaultValue = dayjs("2024-01-01");

const { Option } = Select;
const PickerWithType = ({ onChange }) => {
  return <DatePicker picker={"time"} onChange={onChange} />;
};

function DatePickerAntDesign() {
  const [dates, setDates] = useState([]);
  const [totalDays, setTotalDays] = useState(0); // State to store the total number of days
  const isTablet = useMediaQuery({ query: "(min-width: 1080px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 768px)" });

  useEffect(() => {
    console.log("Date: ", dates);
  }, [dates]);

  const onOk = (value) => {
    console.log("onOk: ", value);
  };

  const disabledDate = (current) => {
    const today = dayjs().startOf("day");
    const startDate =
      dates && dates.length > 0
        ? dayjs(dates[0], "DD-MM-YYYY HH:mm").startOf("day")
        : null;
    const endDate =
      dates && dates.length > 0
        ? dayjs(dates[1], "DD-MM-YYYY HH:mm").startOf("day")
        : null;

    console.log("Dates", dates);
    // console.log("End", endDate.$D);
    console.log("Cur", current);
    console.log("Today", today);
    console.log("Cur < Today", current < today);

    // Disable dates before today
    if (current && current < today) {
      return true;
    }

    // If start date is today, disable selecting the same date for the end date
    if (startDate && startDate.isSame(today, "day")) {
      return current && current.isSame(startDate, "day");
    }

    // Disable end date if it's before the day after the start date
    if (startDate && current && startDate.isSame(today, "day")) {
      const nextDay = today.add(1, "day").startOf("day");
      return current < nextDay;
    }

    return false;
  };

  const disabledDateTime = (current) => {
    const now = dayjs();
    const nowPlus30Minutes = now.add(30, "minutes");
    const selectedDate = current ? dayjs(current) : dayjs();
    // console.warn("nowPlus30", nowPlus30Minutes.$d);

    if (selectedDate.isSame(now, "day")) {
      // If selected date is today
      if (nowPlus30Minutes.isAfter(now)) {
        // If current time plus 30 minutes is after the current time
        return {
          disabledHours: () => range(0, nowPlus30Minutes.hour()),
          disabledMinutes: () =>
            nowPlus30Minutes.hour() === now.hour()
              ? range(0, nowPlus30Minutes.minute())
              : [],
          disabledSeconds: () => [],
        };
      } else {
        // If current time plus 30 minutes is not after the current time
        return {
          disabledHours: () => range(0, 24),
          disabledMinutes: () => range(0, 60),
          disabledSeconds: () => [55, 56],
        };
      }
    } else {
      // If not today
      return {
        disabledHours: () => [],
        disabledMinutes: () => [],
        disabledSeconds: () => [55, 56],
      };
    }
  };

  // Dynamically update disabled dates for the end date based on the selected start date
  const disabledEndDate = (current) => {
    if (dates.length === 1) {
      const startDate = dayjs(dates[0], "DD-MM-YYYY HH:mm").startOf("day");
      const nextDay = dayjs().add(1, "day").startOf("day");

      if (startDate.isSame(dayjs(), "day")) {
        // If start date is today, disable all dates before tomorrow
        return current && current <= nextDay;
      }
    }
    return false;
  };

  return (
    <div className="relative  w-full">
      <Space direction="vertical" size={12} className="w-full">
        {/* Version2 */}
        <div className=" w-full h-full flex flex-col ">
          <Space
            direction="vertical"
            size={12}
            className="relative w-full text-center "
          >
            <RangePicker
              placement={"topLeft"}
              popupStyle={
                isMobile
                  ? {
                      textAlign: "center",
                      alignItems: "center",
                      // background: "red",
                      // position: "absolute",
                      // top: "50%",
                      // left: "10%",

                      // justifyContent: "center",
                    }
                  : {
                      textAlign: "center",
                      alignItems: "center",
                      position: "fixed",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }
              }
              className={
                isMobile
                  ? "w-full bg-[#F3F6F9] text-center items-center py-5 text-[32px] flex  font-semibold   "
                  : "w-full bg-[#F3F6F9] text-center items-center py-5 text-[32px] flex font-semibold   "
              }
              showTime={{
                format: "HH:mm",
              }}
              placeholder={["วันรับรถ", "วันคืนรถ"]}
              format="DD-MM-YYYY HH:mm"
              disabledDate={disabledDate}
              disabledTime={disabledDateTime}
              // disabledEndDate={disabledEndDate} // corrected prop name
              renderExtraFooter={() => "extra footer"}
              onChange={(value, dateString) => {
                console.log("Selected Time: ", value);
                console.log("Formatted Selected Time: ", dateString);
                setDates(dateString);
              }}
            />

            {/* <div className="absolute top-[0px] left-[33%] bg-black text-white w-fit p-2">
              {totalDays} days
            </div> */}
            {/* Display the total number of days */}
          </Space>
        </div>
      </Space>
    </div>
  );
}

export default DatePickerAntDesign;
