import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../public/images/icons/logo-talren.png";

import LanguagePicker from "./LanguagePicker";
import Menu from "./Menu";

const text = "Are you sure delete this task?";

function Navbar() {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [navbarWidth, setNavbarWidth] = useState(0);
  const isTablet = useMediaQuery({ query: "(min-width: 1080px)" });

  //   const { cart, setShowCart } = useContext(ProductContext);
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

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  useEffect(() => {
    if (!isTablet) {
      setHamburgerMenu(false);
    }
  }, [isTablet]);

  function handleHamburgerMenu() {
    setHamburgerMenu(!hamburgerMenu);
    toggleNavbarWidth();
  }

  function toggleNavbarWidth() {
    setNavbarWidth(hamburgerMenu ? 10 : 300);
    setNavbarHeight(hamburgerMenu ? 0 : 1000);
  }

  return (
    <>
      <div className="container-nav">
        <nav
          id="navbar"
          className={`navBar  items-center py-5  shadow-lg flex gap-[1rem]  transition-[0.5s]  ${
            isTablet
              ? "pl-[3rem] bg-white justify-between pr-[3rem]"
              : "flex flex-col pb-[2rem] bg-white"
          } ${isFloating ? "shadow-xl" : "shadow-xl"}`}
          style={{
            width: hamburgerMenu ? navbarWidth : "100%",
            height: `fit-content`,
            transition: "width 0.5s",
            zIndex: "100",
          }}
        >
          {/* <h1>1</h1>
          <h1>2</h1>
          <h1>3</h1> */}
          <div
            className={
              isTablet
                ? "flex  gap-2 w-fit  justify-start"
                : "flex gap-2 w-fit  bg-white text-black justify-center"
            }
          >
            <Link to="/" className="w-fit h-fit  flex ">
              <img src={Logo} alt="" />
            </Link>
          </div>

          <Menu />

          <div className="flex gap-3 items-center">
            <LanguagePicker />

            <Link>
              <label
                className="cursor-pointer whitespace-nowrap text-white text-[18px] font-semibold p-3 rounded-full px-[2rem]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(254,84,28,1) 0%, rgba(239,55,68,1) 100%)",
                }}
              >
                เข้าสู่ระบบ
              </label>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
