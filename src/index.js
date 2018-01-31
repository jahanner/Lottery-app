import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./styles/index.css";
import AppRouter from "./components/AppRouter.js";
import registerServiceWorker from "./registerServiceWorker";
import configureStore from "./store/configureStore";
import { createStore, combineReducers } from "redux";
import drawingDateReducer from "./reducers/lottery";
import filtersReducer from "./reducers/filtersReducer.js";
import { addLotteryApp, filtersAction } from "./actions/lottery.js";

const store = createStore(
  combineReducers({
    lottery: drawingDateReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(
  filtersAction({
    text: "text",
    date: "success"
  })
);

store.dispatch(
  addLotteryApp({
    prizeDescription: "working",
    winnerMessage: "yes",
    drawingDate: 4
  })
);

store.dispatch(
  filtersAction({
    text: "test2",
    date: "success"
  })
);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
registerServiceWorker();
