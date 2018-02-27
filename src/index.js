import React from "react";
import "./styles/index.css";
import AppRouter from "./components/AppRouter.js";
import { reduxSetup } from "redux-easy";
import "./reducers";
import moment from "moment";

const initialState = {
  lotteryApp: {
    lotteryDate: moment().valueOf(),
    prizeDescription: "",
    winnerMessage: "",
    error: "",
    numberOfEntries: 0,
    calendarFocused: false,
    name: "",
    email: ""
  }
};

reduxSetup({ component: <AppRouter />, initialState });
