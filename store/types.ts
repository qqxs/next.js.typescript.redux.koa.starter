import { Action } from "redux";

// REDUX ACTION TYPES
export const TICK = "TICK";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

export interface ITimerAction extends Action {
  lastUpdate?: number;
  light?: boolean;
  count?: number;
}
