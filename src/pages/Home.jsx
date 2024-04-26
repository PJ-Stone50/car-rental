import React from "react";
import DatePickerAntd from "../components/DatePickerAntd";

function Home() {
  return (
    <div className="w-full h-screen bg-white flex flex-col justify-center items-center ">
      {/* <h1>Home page</h1> */}
      <DatePickerAntd />
    </div>
  );
}

export default Home;
