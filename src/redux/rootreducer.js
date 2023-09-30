import { combineReducers } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";
import history from "./history";

export const updateReducer = (asyncReducer) => {
  return combineReducers({
    router: connectRouter(history),
  });
};

export const rootReducer = updateReducer();
