import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../public/images/icons/logo-talren.png";

import LanguagePicker from "./LanguagePicker";
import Menu from "./Menu";

import { RippleButton } from "./ripple/RippleButton";

function Navbar() {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [navbarWidth, setNavbarWidth] = useState(0);
  const isTablet = useMediaQuery({ query: "(min-width: 1080px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 768px)" });

  const navigate = useNavigate();
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 10) {
        setIsFloating(true);
      } else {
        setIsFloating(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isTablet) {
      setHamburgerMenu(false);
    }
  }, [isTablet]);

  return (
    <>
      <div
        className={
          isMobile
            ? "container-nav px-[16rem] shadow-lg"
            : "container-nav px-[3rem] shadow-lg"
        }
      >
        <nav
          id="navbar"
          className={`navBar  items-center py-3  flex gap-[1rem] transition-[0.5s] ${
            isTablet
              ? "pl-[3rem] bg-white justify-between pr-[3rem]"
              : "flex flex-col pb-[1rem] bg-white"
          } `}
          style={{
            width: hamburgerMenu ? navbarWidth : "100%",
            height: `fit-content`,
            transition: "width 0.5s",
            zIndex: "100",
          }}
        >
          <div
            className={
              isTablet
                ? "flex gap-2 w-fit justify-start"
                : "flex gap-2 w-fit bg-white text-black justify-center"
            }
          >
            <Link to="/" className="w-fit h-fit flex">
              <img src={Logo} alt="" className="min-w-[260px] min-h-[57px]" />
            </Link>
          </div>

          <Menu />

          <div className="flex gap-3 items-center">
            <LanguagePicker />
            <Link onClick={() => console.log("TEST")}>
              <RippleButton>เข้าสู่ระบบ</RippleButton>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
