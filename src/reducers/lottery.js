import React from "react";
import { createStore } from "redux";

const date = "January tho";

const drawingDateReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_DRAWING_DATE":
      return { drawDate: date };
    default:
      return state;
  }
};

export default drawingDateReducer;
