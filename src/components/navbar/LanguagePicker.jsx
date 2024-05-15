import React, { useState } from "react";
import { Menu, Dropdown } from "antd";
import { FaCaretDown } from "react-icons/fa";
import ThaiFlag from "../../../public/images/backgrounds/thai.png";
import EngFlag from "../../../public/images/backgrounds/eng.png";
import "./languagePicker.css"; // Import the CSS file

function LanguagePicker() {
  const [countryFlag, setCountryFlag] = useState(ThaiFlag);
  const [isOpenCountryWidget, setIsOpenCountryWidget] = useState(false);
  const menu = (
    <Menu>
      <Menu.Item key="thai" onClick={() => setCountryFlag(ThaiFlag)}>
        <div className="flex items-center gap-2">
          <div
            className="country-flag"
            style={{
              backgroundImage: `url(${ThaiFlag})`,
              backgroundPosition: "center",
            }}
          />
          <span>TH</span>
        </div>
      </Menu.Item>
      <Menu.Item key="english" onClick={() => setCountryFlag(EngFlag)}>
        <div className="flex items-center gap-2">
          <div
            className="country-flag"
            style={{
              backgroundImage: `url(${EngFlag})`,
              backgroundPosition: "center",
            }}
          />
          <span>EN</span>
        </div>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="language-picker">
      <div className="flex gap-3 items-center">
        <Dropdown overlay={menu} placement="bottomLeft">
          <div
            onClick={() => setIsOpenCountryWidget(!isOpenCountryWidget)}
            className="country-container"
          >
            <span
              className="country-flag"
              style={{
                backgroundImage: `url(${countryFlag})`,
                backgroundPosition: "center",
              }}
            />
            <FaCaretDown className="caret-icon" />
          </div>
        </Dropdown>
      </div>
    </div>
  );
}

export default LanguagePicker;
