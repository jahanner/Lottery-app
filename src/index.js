import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./styles/index.css";
import AppRouter from "./components/AppRouter.js";
import registerServiceWorker from "./registerServiceWorker";
import configureStore from "./store/configureStore";
import { createStore, combineReducers } from "redux";
import drawingDateReducer from "./reducers/lottery";

// const store = configureStore();
const store = createStore(
  combineReducers({
    lottery: drawingDateReducer
  })
);
console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
registerServiceWorker();
