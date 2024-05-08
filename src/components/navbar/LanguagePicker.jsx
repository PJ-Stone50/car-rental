import { useState } from "react";
import ThaiFlag from "../../../public/images/backgrounds/thai.png";
import EngFlag from "../../../public/images/backgrounds/english.jpeg";

import { FaCaretDown } from "react-icons/fa";
import { Menu, Dropdown } from "antd";

function LanguagePicker() {
  const [countryFlag, setCountryFlag] = useState(ThaiFlag);
  const [isOpenCountryWidget, setIsOpenCountryWidget] = useState(false);
  const menu = (
    <Menu>
      <Menu.Item key="thai" onClick={() => setCountryFlag(ThaiFlag)}>
        <div className="flex items-center gap-2">
          <div
            style={{
              width: "25px",
              height: "25px",
              borderRadius: "50%",
              backgroundImage: `url(${ThaiFlag})`,
              backgroundSize: "cover",
            }}
          />
          <span>TH</span>
        </div>
      </Menu.Item>
      <Menu.Item key="english" onClick={() => setCountryFlag(EngFlag)}>
        <div className="flex items-center gap-2">
          <div
            style={{
              width: "25px",
              height: "25px",
              borderRadius: "50%",
              backgroundImage: `url(${EngFlag})`,
              backgroundSize: "cover",
            }}
          />
          <span>EN</span>
        </div>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="right-side relative w-fit  ">
      <div className="flex gap-3">
        <Dropdown overlay={menu} placement="bottomLeft">
          <div
            onClick={() => setIsOpenCountryWidget(!isOpenCountryWidget)}
            className="countryContainer flex gap-2 items-center  cursor-pointer"
          >
            <span
              htmlFor="country"
              className=" shadow-xl bg-red-500"
              style={{
                borderRadius: "50%",
                width: "25px",
                height: "25px",
                display: "inline-block",
                backgroundImage: `url(${countryFlag})`,
                backgroundSize: "cover",
              }}
            >
              <img
                src={countryFlag}
                alt="countryFlag"
                style={{
                  borderRadius: "50%",
                  width: "25px",
                  height: "25px",
                }}
              />
            </span>
            <FaCaretDown style={{ width: "20px", height: "20px" }} />
          </div>
        </Dropdown>
      </div>
    </div>
  );
}

export default LanguagePicker;
