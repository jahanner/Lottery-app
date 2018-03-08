import React from "react";
import "./styles/index.css";
import AppRouter from "./components/AppRouter.js";
import { reduxSetup } from "redux-easy";
import "./reducers";
import "./firebase/firebase.js";

const initialState = {
  lotteryApp: {
    lotteryDate: "",
    prizeDescription: "",
    nameEmailError: "",
    lotteryError: "",
    numberOfEntries: 0,
    calendarFocused: false,
    users: [],
    winnerName: "",
    emails: []
  }
};

reduxSetup({ component: <AppRouter />, initialState });
