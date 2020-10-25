import { Action } from "redux";

export interface IStoreStateType {
  counter: number;
  timer: number;
  todos: ITodo[];
}

/** 移除对象中的`type` key */
export type OmitType<T> = Omit<T, "type">;

// REDUX ACTION TYPES
// timer action types
/** */
export const TIMER_TICK = "TIMER_TICK";
export const TIMER_INCREMENT = "TIMER_INCREMENT";
export const TIMER_DECREMENT = "TIMER_DECREMENT";
export const TIMER_RESET = "TIMER_RESET";
/** timer action interface */
export interface ITimerAction extends Action {
  lastUpdate?: string;
  light?: boolean;
  count?: number;
}

// counter action types
/** counter +1 action type  */
export const COUNTER_INCREMENT = "COUNTER_INCREMENT";
/** counter -1 action type */
export const COUNTER_DECREMENT = "COUNTER_DECREMENT";
/** counter reset(0) action type */
export const COUNTER_RESET = "COUNTER_RESET";

/** counter action interface */
export interface ICounterAction extends Action {
  counter?: number;
}

// todos action types
/**
 * todo interface
 */
export interface ITodo {
  id?: number;
  text?: string;
  timer?: string;
  completed?: boolean;
}

/** todos multiple todo action type */
export const TODOS_CONCAT = "TODOS_CONCAT"; // 批量添加todo
/** todos push one action type */
export const TODOS_ADD = "TODOS_ADD"; // 在数组最前面添加
/** todos delete one action type */
export const TODOS_DELETE = "TODOS_DELETE"; // 删除一个
/** todos clear all action type */
export const TODOS_CLEAR = "TODOS_CLEAR"; // 清空
/** todos toggle complete action type */
export const TODOS_TOGGLE_COMPLETE = "TODOS_TOGGLE_COMPLETE"; // 更新完成状态

/** todos action interface */
export interface IStoreAction<T> extends Action {
  payload?: T;
}
