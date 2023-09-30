import { configure } from "@testing-library/react";
import { routerMiddleware } from "connected-react-router";
import { createEpicMiddleware } from "redux-observable";
import history from "./history";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootreducer";

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: () => [routerMiddleware(history)],
});
