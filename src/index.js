import React from "react";
import ReactDOM from "react-dom";
import App from "./main/App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter,HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./res/styles/index.css";
import "typeface-roboto";
import configureStore from "./main/store/configureStore";
const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);

