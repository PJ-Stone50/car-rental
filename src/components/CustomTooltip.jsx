import React, { useState } from "react";

const CustomTooltip = ({ title, content, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && (
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: 0,
            background: "#fff",
            border: "1px solid #ccc",
            padding: "15px",
            zIndex: "10",
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
