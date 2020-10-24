import { Action } from "redux";
import * as types from "../types";

/**
 * TODO todo list
 * @param {number} state todos default state value
 * @param {Action} param action
 */
function todosReducer(state: number = 0, { type }: Action) {
  switch (type) {
    case types.TIMERINCREMENT:
      return state + 1;
    case types.TIMERDECREMENT:
      return state - 1;
    case types.TIMERRESET:
      return 0;
    default:
      return state;
  }
}

export default todosReducer;
