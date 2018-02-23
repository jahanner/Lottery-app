import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./styles/index.css";
import AppRouter from "./components/AppRouter.js";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers } from "redux";
import lotteryReducer from "./reducers/lottery";
import dateReducer from "./reducers/dateReducer.js";
import { addLotteryApp, dateAction } from "./actions/lottery.js";

const store = createStore(
  combineReducers({
    lottery: lotteryReducer,
    drawingdate: dateReducer
  })
);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
registerServiceWorker();
