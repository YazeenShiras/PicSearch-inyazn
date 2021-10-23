import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryStateProvider } from "./util/context/QueryContext";

ReactDOM.render(
  <React.StrictMode>
    <QueryStateProvider>
      <App />
    </QueryStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
