import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Store } from "./Redux/Store.jsx";
import { Provider } from "react-redux";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
