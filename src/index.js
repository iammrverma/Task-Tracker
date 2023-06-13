import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/navbar";
import Main from "./components/main";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Navbar />
    <div className="container jcc">
      <Main />
    </div>
  </>
);
