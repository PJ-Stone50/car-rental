import React from "react";
import DatePicker from "../components/DatePicker";

function Home() {
  return (
    <div className="w-full h-full bg-white flex flex-col justify-items-start">
      <h1>Home page</h1>
      <DatePicker />
    </div>
  );
}

export default Home;
