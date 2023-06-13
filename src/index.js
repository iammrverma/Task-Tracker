import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Navbar from "./components/navbar";
import Parent from "./components/parent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Navbar />
    <div className="container jcc">
      <Parent />
    </div>
  </>
);
