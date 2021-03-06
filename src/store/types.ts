import { Action } from "redux";

export interface IStoreStateType {
  counter: number;
  timer: ITimer;
  todos: ITodo[];
}

/** 移除对象中的`type` key */
// export type OmitType<T> = Omit<T, "type">;

// REDUX ACTION TYPES
// timer action types
/** timer state interface */
export interface ITimer {
  lastUpdate?: string;
  light?: boolean;
  count?: number;
}
/** */
export const TIMER_TICK = "TIMER_TICK";
export const TIMER_INCREMENT = "TIMER_INCREMENT";
export const TIMER_DECREMENT = "TIMER_DECREMENT";
export const TIMER_RESET = "TIMER_RESET";

// counter action types
export type ICounter = number;
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

export interface IUser {
  id: number;
  name: string;
  email: string;
}

/** user add action type */
export const USER_ADD = "USER_ADD";
/** user delete user action type */
export const USER_DELETE = "USER_DELETE"; // 删除

/** all action interface */
export interface IStoreAction<T> extends Action {
  payload?: T;
}
