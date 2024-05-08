import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../public/images/icons/logo-talren.png";

import LanguagePicker from "./LanguagePicker";

const text = "Are you sure delete this task?";

function Navbar() {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [navbarWidth, setNavbarWidth] = useState(0);
  const isTablet = useMediaQuery({ query: "(min-width: 780px)" });

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
      <div className="pb-[3.5rem] container-nav">
        <nav
          id="navbar"
          className={`navBar fixed items-center min-h-[60px] pr-[5rem] shadow-lg flex gap-3 justify-between pl-[10rem] transition-[0.5s] ${
            hamburgerMenu
              ? "bg-white w-[300px] text-black  border-r-4"
              : "bg-white text-black border-b-7"
          } ${isTablet ? "pl-[10rem]" : "flex flex-col  bg-amber-200"} ${
            isFloating ? "shadow-xl" : "shadow-xl"
          }`}
          style={{
            width: hamburgerMenu ? navbarWidth : "100%",
            height: `fit-content`,
            transition: "width 0.5s",
            zIndex: "100",
          }}
        >
          <div
            className={
              !hamburgerMenu
                ? "flex  gap-2 w-full pl-[2rem] m-auto bg-red-500"
                : "flex gap-2 w-full ml-[-5rem] mt-[3rem] bg-white text-black"
            }
          >
            <Link to="/" className="w-fit h-fit  flex ">
              <h1
                className={
                  hamburgerMenu
                    ? "hidden"
                    : "font-semibold absolute top-3 left-[80px] text-[24px]"
                }
              >
                RTalrens
              </h1>
            </Link>
            {(isTablet || hamburgerMenu) && (
              <ul
                className={`flex ${
                  !isTablet && hamburgerMenu
                    ? "flex-col gap-[3rem] w-full  h-screen  items-center justify-start"
                    : "flex items-center justify-center  gap-[30px]"
                }`}
              >
                <li className="cursor-pointer opacity-70 hover:opacity-100 ">
                  <button
                    onClick={() => navigate(`/productlist/${key}`)}
                    className="text-[16px]"
                  >
                    menu1
                  </button>
                </li>
                <li className="cursor-pointer opacity-70 hover:opacity-100 ">
                  <button
                    onClick={() => navigate(`/productlist/${key}`)}
                    className="text-[16px]"
                  >
                    menu2
                  </button>
                </li>
              </ul>
            )}
          </div>

          <div className="flex gap-3 items-center">
            <LanguagePicker />
            <Link className="cursor-pointer">
              <h1 className="text-[18px] font-semibold">สมัครสมาชิก</h1>
            </Link>
            <Link>
              <label
                className="cursor-pointer whitespace-nowrap text-white text-[18px] font-semibold p-3 rounded-lg"
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
