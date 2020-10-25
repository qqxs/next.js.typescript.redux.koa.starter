import { combineReducers, Reducer, AnyAction } from "redux";
import counterReducer from "./counter.reducer";
import timerReducer from "./timer.reducer";
import todosReducer from "./todos.reducer";
import { IStoreStateType } from "../types";

// COMBINED REDUCERS
const reducers: {
  [P in keyof IStoreStateType]: Reducer<unknown, AnyAction>;
} = {
  counter: counterReducer,
  timer: timerReducer,
  todos: todosReducer
};

export default combineReducers(reducers);
