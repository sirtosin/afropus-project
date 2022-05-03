import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import { store } from "./features/store";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);