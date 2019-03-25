import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers';


const store = createStore(
  allReducers,
  applyMiddleware(thunk, promise, logger)
);


ReactDOM.render(<App />, document.getElementById("root"));
