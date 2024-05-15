import React from "react";
import { createRoot } from "react-dom/client";
import { useMediaQuery } from "react-responsive";
import { IoSearch } from "react-icons/io5";

export const RippleButton = ({ children, onClick, includedIcon }) => {
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
      style={{ zIndex: 0 }}
      className={
        isMobile
          ? "w-fit ripple-button button-primary whitespace-nowrap px-[3rem] cursor-pointer items-center flex gap-2 justify-center text-white text-[18px] font-semibold p-3 rounded-full"
          : isTablet
          ? "w-[100px] ripple-button ml-0 button-primary whitespace-nowrap cursor-pointer items-center flex gap-2 justify-center md:mt-[0rem] mt-[1rem] text-white text-[18px] font-semibold p-3 rounded-lg"
          : "w-full ripple-button ml-0 button-primary whitespace-nowrap cursor-pointer items-center flex gap-2 justify-center md:mt-[0rem] mt-[1rem] text-white text-[18px] font-semibold p-3 rounded-lg"
      }
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
      {includedIcon && (
        <IoSearch
          style={{ zIndex: 100 }}
          className="min-w-[30px] min-h-[30px]"
        />
      )}

      <span className="content z-[-1]">{children}</span>
    </button>
  );
};

export default RippleButton;
