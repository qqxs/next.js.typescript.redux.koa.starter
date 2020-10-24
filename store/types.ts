import { Action } from "redux";

/** 移除对象中的`type` key */
export type OmitType<T> = Omit<T, "type">;

// REDUX ACTION TYPES
// timer action types
/** */
export const TIMERTICK = "TIMERTICK";
export const TIMERINCREMENT = "TIMERINCREMENT";
export const TIMERDECREMENT = "TIMERDECREMENT";
export const TIMERRESET = "TIMERRESET";
/** timer action interface */
export interface ITimerAction extends Action {
  lastUpdate?: string;
  light?: boolean;
  count?: number;
}

// counter action types
/** counter +1 action type  */
export const COUNTERINCREMENT = "COUNTERINCREMENT";
/** counter -1 action type */
export const COUNTERDECREMENT = "COUNTERDECREMENT";
/** counter reset(0) action type */
export const COUNTERRESET = "COUNTERRESET";

/** counter action interface */
export interface ICounterAction extends Action {
  counter?: number;
}

// todos action types
/** todos push one action type */
export const TODOSPUSH = "TODOSPUSH"; // 添加
/** todos pop last one action type */
export const TODOSPOP = "TODOSPOP"; // 删除最后一个
/** todos delete one action type */
export const TODOSDELETE = "TODOSDELETE"; // 删除一个
/** todos clear all action type */
export const TODOSCLEAR = "TODOSCLEAR"; // 清空

/** todos action interface */
export interface ITodosAction extends Action {}
