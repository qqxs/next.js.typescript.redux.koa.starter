import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import timerReducer from "./timerReducer";
import todosReducer from "./todosReducer";

// COMBINED REDUCERS
const reducers = {
  counter: counterReducer,
  timer: timerReducer,
  todos: todosReducer
};

export default combineReducers(reducers);
