import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./styles/index.css";
import AppRouter from "./components/AppRouter.js";
import registerServiceWorker from "./registerServiceWorker";
import { reduxSetup } from "redux-easy";
import "./reducers";
import moment from "moment";

const initialState = {
  lotteryApp: {
    lotteryDate: moment(),
    prizeDescription: "",
    winnerMessage: "",
    error: "",
    numberOfEntries: 0,
    calendarFocused: false,
    name: "",
    email: ""
  }
};

const store = reduxSetup({ initialState, render });

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <AppRouter />
    </Provider>,
    document.getElementById("root")
  );
}

render();
registerServiceWorker();
