import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import { useMediaQuery } from "react-responsive";
import Supplier from "../components/supplier/Supplier";
import Question from "../components/question/Question";
import PopularDestination from "../components/popular/PopularDestination";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function Home() {
  const isTablet = useMediaQuery({ query: "(min-width: 1240px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <div className="w-screen h-screen ">
      <Navbar />

      <Header />
      <div
        className={
          isTablet
            ? "flex flex-col px-[15%] duration-500"
            : "flex flex-col px-[1.5rem] duration-500"
        }
      >
        <Supplier />
        <Question />
        <PopularDestination />
      </div>

      <Footer />
    </div>
  );
}
