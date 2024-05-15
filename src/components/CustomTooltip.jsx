import React, { useState } from "react";

const CustomTooltip = ({ title, content, children, openDate, setOpenDate }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className={openDate ? "w-fit  z-[-1]" : "w-fit  z-10"}
      style={{ position: "relative" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && (
        <div
          className="w-[410px] "
          style={{
            position: "absolute",
            top: "20px",
            left: "-100px",
            background: "#fff",
            border: "1px solid #ccc",
            padding: "15px",
          }}
        >
          <div>{title}</div>
          <div>{content}</div>
        </div>
      )}
    </div>
  );
};

export default CustomTooltip;
