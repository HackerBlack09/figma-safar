import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DataContext from ".//context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <DataContext>
        <App />
      </DataContext>
  </React.StrictMode>
);
