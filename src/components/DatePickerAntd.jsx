import React, { useEffect, useState } from "react";
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
const disabledDateTime = () => ({
  disabledHours: () => range(0, 24).splice(4, 20),
  disabledMinutes: () => range(30, 60),
  disabledSeconds: () => [55, 56],
});
const disabledRangeTime = (_, type) => {
  if (type === "start") {
    return {
      disabledHours: () => range(0, 60).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }
  return {
    disabledHours: () => range(0, 60).splice(20, 4),
    disabledMinutes: () => range(0, 31),
    disabledSeconds: () => [55, 56],
  };
};
// Component level locale
const buddhistLocale = {
  ...en,
  lang: {
    ...en.lang,
    fieldDateFormat: "BBBB-MM-DD",
    fieldDateTimeFormat: "BBBB-MM-DD HH:mm:ss",
    yearFormat: "BBBB",
    cellYearFormat: "BBBB",
  },
};

// ConfigProvider level locale
const globalBuddhistLocale = {
  ...enUS,
  DatePicker: {
    ...enUS.DatePicker,
    lang: buddhistLocale.lang,
  },
};

const defaultValue = dayjs("2024-01-01");

const { Option } = Select;
const PickerWithType = ({ onChange }) => {
  return <DatePicker picker={"time"} onChange={onChange} />;
};

function DatePickerAntd() {
  // const [openDate, setOpenDate] = useState(false);
  // const [date, setDate] = useState({
  //   startDate: new Date(),
  //   endDate: new Date(),
  //   key: "selection",
  // });

  const [dates, setDates] = useState([]);

  const onChange = (_, dateStr) => {
    console.log("onChange:", dateStr);
  };

  useEffect(() => {
    console.log("Date: ", dates);
  }, [dates]);

  const onOk = (value) => {
    console.log("onOk: ", value);
  };

  return (
    <div className="container gap-5">
      <Space direction="vertical" size={12}>
        <div className="w-full h-full p-5 flex flex-col gap-5 bg-white shadow-xl rounded-lg border-gray">
          <h1 className="text-2xl font-bold">Version 1</h1>
          <RangePicker
            format="DD-MM-YYYY HH:mm"
            disabledDate={disabledDate}
            disabledTime={disabledDateTime}
            renderExtraFooter={() => "extra footer"}
            onChange={(values) => {
              setDates(values);
            }}
          />
          <div className="flex gap-3">
            <div className="w-full">
              <PickerWithType
                type={"time"}
                onChange={(value) => console.log(value)}
              />
            </div>
            <div className="w-full">
              <PickerWithType
                type={"time"}
                onChange={(value) => console.log(value)}
              />
            </div>
          </div>
        </div>

        <div className="w-full h-full p-5 flex flex-col gap-5 bg-white shadow-xl rounded-lg border-gray">
          <h1 className="text-2xl font-bold">Version 2</h1>

          <Space direction="vertical" size={12}>
            <RangePicker
              showTime={{
                format: "HH:mm",
              }}
              format="DD-MM-DD HH:mm"
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
