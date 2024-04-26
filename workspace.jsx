import React, { useEffect, useState, useMemo } from "react";
import "../components/datePicker.css";

import en from "antd/es/date-picker/locale/en_US";
import enUS from "antd/es/locale/en_US";
import buddhistEra from "dayjs/plugin/buddhistEra";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
dayjs.extend(buddhistEra);

//Antd
import { Space, TimePicker, DatePicker, Typography, Select } from "antd";
const { Title } = Typography;

// import moment from "moment";
const { RangePicker } = DatePicker;

const range = (start, end) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
};

// eslint-disable-next-line arrow-body-style
const disabledDate = (current) => {
  // Can not select days before today and today
  return current && current < dayjs().endOf("day");
};

const defaultValue = dayjs("2024-01-01");

const { Option } = Select;
const PickerWithType = ({ onChange }) => {
  return <DatePicker picker={"time"} onChange={onChange} />;
};

function DatePickerAntd() {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    console.log("Date: ", dates);
  }, [dates]);

  const onOk = (value) => {
    console.log("onOk: ", value);
  };

  const disabledDateTime = (current) => {
    console.log("Current");
    const nowPlus30Minutes = dayjs().add(30, "minutes");
    const selectedDate = current ? dayjs(current) : dayjs();

    if (dayjs().isSame(selectedDate, "day")) {
      // If selected date is today
      if (nowPlus30Minutes.isAfter(dayjs())) {
        // If current time plus 30 minutes is after the current time
        return {
          disabledHours: () => range(0, nowPlus30Minutes.hour()),
          disabledMinutes: () => {
            if (dayjs().hour() === nowPlus30Minutes.hour()) {
              return range(0, 60).splice(0, nowPlus30Minutes.minute());
            }
            return [];
          },
          disabledSeconds: () => [55, 56],
        };
      } else {
        // If current time plus 30 minutes is not after the current time
        return {
          disabledHours: () => range(0, 24),
          disabledMinutes: () => [],
          disabledSeconds: () => [55, 56],
        };
      }
    } else {
      // If selected date is not today, allow any time
      return null;
    }
  };

  return (
    <div className="container gap-5">
      <Space direction="vertical" size={12}>
        {/* Version1 */}
        <div className="w-full h-full p-5 flex flex-col gap-5 bg-white shadow-xl rounded-lg border-gray">
          <h1 className="text-2xl font-bold">Version 1</h1>
          <RangePicker
            // value="test"
            format="DD-MM-YYYY HH:mm"
            disabledDate={disabledDate}
            disabledTime={disabledDateTime}
            renderExtraFooter={() => "extra footer"}
            onChange={(values) => {
              setDates(values);
            }}
          />
          <div className="flex gap-3">
            <div className="w-full flex gap-3">
              <h1 className="whitespace-nowrap">เวลารับรถ</h1>
              <PickerWithType
                type={"time"}
                disabledTime={disabledDateTime}
                onChange={(value) => console.log(value)}
              />
            </div>
            <div className="w-full  flex gap-3">
              <h1 className="whitespace-nowrap">เวลาคืนรถ</h1>
              <PickerWithType
                type={"time"}
                onChange={(value) => console.log(value)}
              />
            </div>
          </div>
        </div>
        {/* Version2 */}
        <div className="w-full h-full p-5 flex flex-col gap-5 bg-white shadow-xl rounded-lg border-gray">
          <h1 className="text-2xl font-bold">Version 2</h1>

          <Space direction="vertical" size={12}>
            <RangePicker
              showTime={{
                format: "HH:mm",
              }}
              format="DD-MM-DD  HH:mm"
              disabledDate={disabledDate}
              disabledTime={disabledDateTime}
              renderExtraFooter={() => "extra footer"}
              onChange={(value, dateString) => {
                console.log("Selected Time: ", value);
                console.log("Formatted Selected Time: ", dateString);
              }}
              onOk={onOk}
            />
          </Space>
        </div>
      </Space>
    </div>
  );
}

export default DatePickerAntd;
