import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import { useMediaQuery } from "react-responsive";
import Supplier from "../components/supplier/Supplier";
import Question from "../components/question/Question";
import PopularDestination from "../components/popular/PopularDestination";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div className="w-screen h-screen ">
      <Navbar />

      <Header />
      <Supplier />
      <Question />
      <PopularDestination />

      <Footer />
    </div>
  );
}
