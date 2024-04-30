import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../public/images/icons/logo-talren.png";

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
          className={`navBar fixed items-center min-h-[60px]  shadow-lg flex gap-3 justify-between pl-[10rem] transition-[0.5s] ${
            hamburgerMenu
              ? "bg-white w-[300px] text-black  border-r-4"
              : "bg-black text-white border-b-7"
          } ${isTablet ? "pl-[10rem]" : "p-3"} ${
            isFloating ? "shadow-xl" : "shadow-xl"
          }`}
          style={{
            width: hamburgerMenu ? navbarWidth : "100%",
            height: `${navbarHeight}px`,
            transition: "width 0.5s",
            zIndex: "100",
          }}
        >
          <div
            className={
              !hamburgerMenu
                ? "flex gap-2 w-full pl-[2rem] m-auto bg-black text-white"
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
          {!isTablet && (
            <div
              className={`absolute left-0  flex flex-col gap-3 cursor-pointer p-4`}
              onClick={handleHamburgerMenu}
            >
              <div className="flex gap-3 items-center">
                {!hamburgerMenu ? (
                  <>
                    <div className="flex flex-col  p-3">
                      <span
                        className={
                          hamburgerMenu
                            ? "w-[20px] h-[2px] mt-1 bg-white rounded-lg"
                            : "w-[20px] h-[2px] mt-1 bg-white rounded-lg"
                        }
                      ></span>
                      <span
                        className={
                          isTablet
                            ? "w-[20px] h-[2px] mt-1 bg-white rounded-lg"
                            : "w-[20px] h-[2px] mt-1 bg-white rounded-lg"
                        }
                      ></span>
                      <span
                        className={
                          isTablet
                            ? "w-[20px] h-[2px] mt-1 bg-white rounded-lg"
                            : "w-[20px] h-[2px] mt-1 bg-white rounded-lg"
                        }
                      ></span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col absolute top-[-450px] left-[15px] p-5 ">
                      <span
                        className={
                          hamburgerMenu
                            ? "absolute left-[0px] top-[0px] px-3 w-[20px] h-[2px] bg-black rounded-lg rotate-45 transition-transform duration-500 ease-in-out "
                            : "absolute left-[0px] top-[0px] px-3 w-[20px] h-[2px] bg-white rounded-lg rotate-45 transition-transform duration-500 ease-in-out "
                        }
                      ></span>

                      <span className="absolute left-[0px] px-3 top-[0px] w-[20px] h-[2px] bg-black rounded-lg -rotate-45 transition-transform duration-500 ease-in-out  "></span>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}

export default Navbar;
