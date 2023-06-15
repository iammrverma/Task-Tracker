import ReactDOM from "react-dom/client";

import Navbar from "./components/navbar";
import Main from "./components/main";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Navbar />
    <div className="container jcc width2">
      <Main />
    </div>
  </>
);
