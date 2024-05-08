import React from "react";

export default function ButtonTalrens({ children }) {
  return <button onClick={() => console.log("Click")}>{children}</button>;
}
