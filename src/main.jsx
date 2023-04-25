import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BUtton from "./Button-ii.jsx";
import Time from "./Time.jsx";
import Watch from "./Watch.jsx";
import Bg from "./Bgclr.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <h1>To Change background:</h1>
    <Bg />
    <Watch />
    <App />
    <BUtton />
    <Time />
  </>
);
