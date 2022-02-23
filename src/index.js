import React from "react";
import logger from "redux-logger";
import { render } from "react-dom";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import App from "./App";
import rootReducer from "./slices";
import rootSaga from "sagas";

import "./index.css";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = getDefaultMiddleware();
middleware.push(sagaMiddleware);
middleware.push(logger);

const store = configureStore({
  reducer: rootReducer,
  middleware
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

// run the saga
sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
