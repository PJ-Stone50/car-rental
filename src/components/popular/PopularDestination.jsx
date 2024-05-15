import React from "react";
import { useMediaQuery } from "react-responsive";
import "./popularDestination.css"; // Import the CSS file

function PopularDestination() {
  const isTablet = useMediaQuery({ query: "(min-width: 1240px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <div className="popular-destination ">
      <h3>ปลายทางยอดนิยมในไทย</h3>
      <ul className="gap-1">
        <li>เช่ารถ ภูเก็ต |</li>
        <li>เช่ารถ เชียงราย |</li>
        <li>เช่ารถ กระบี่ |</li>
        <li>เช่ารถ นครศรีธรรมราช |</li>
        <li>เช่ารถ พัทยา |</li>
        <li>เช่ารถ น่าน |</li>
        <li>เช่ารถ หัวหิน |</li>
        <li>เช่ารถ กรุงเทพฯ |</li>
        <li>เช่ารถ น่าน</li>
      </ul>
    </div>
  );
}

export default PopularDestination;
