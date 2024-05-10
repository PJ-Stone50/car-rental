import React from "react";
import { createRoot } from "react-dom/client";
import { useMediaQuery } from "react-responsive";

export const RippleButton = ({ children, onClick }) => {
  const isTablet = useMediaQuery({ query: "(min-width: 1240px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 768px)" });

  const [coords, setCoords] = React.useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = React.useState(false);

  React.useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else setIsRippling(false);
  }, [coords]);

  React.useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);

  return (
    <button
      className={
        isTablet
          ? "w-fit ripple-button button-primary whitespace-nowrap px-[3rem] cursor-pointer items-center flex gap-2 justify-center    text-white text-[18px] font-semibold p-3 rounded-full"
          : "w-full ripple-button ml-0 button-primary whitespace-nowrap cursor-pointer items-center flex gap-2 justify-center  md:mt-[0rem] mt-[1rem]    text-white text-[18px] font-semibold p-3 rounded-lg"
      }
      // className="ripple-button cursor-pointer button-primary whitespace-nowrap text-white text-[18px] font-semibold p-3 rounded-full px-[2rem] flex justify-center"
      onClick={(e) => {
        const rect = e.target.getBoundingClientRect();
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        onClick && onClick(e);
      }}
    >
      {isRippling ? (
        <span
          className="ripple"
          style={{
            left: coords.x,
            top: coords.y,
          }}
        />
      ) : (
        ""
      )}
      <span className="content">{children}</span>
    </button>
  );
};

// Create or get the root
const root = createRoot(document.getElementById("root"));
