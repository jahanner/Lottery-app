import React from "react";
import "./styles/index.css";
import AppRouter from "./components/AppRouter.js";
import { reduxSetup } from "redux-easy";
import "./reducers";
import moment from "moment";
import "./firebase/firebase.js";

const initialState = {
  lotteryApp: {
    lotteryDate: moment().valueOf(),
    prizeDescription: "",
    winnerName: "Jesse",
    nameEmailError: "",
    lotteryError: "",
    numberOfEntries: 0,
    calendarFocused: false,
    name: "",
    email: ""
  }
};

reduxSetup({ component: <AppRouter />, initialState });
