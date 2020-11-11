import {
  TIMER_TICK,
  TIMER_INCREMENT,
  TIMER_DECREMENT,
  TIMER_RESET,
  ITimer,
  IStoreAction
} from "../types";

// INITIAL TIMER STATE
export const initialTimerState: ITimer = {
  lastUpdate: "",
  light: false,
  count: 0
};

/**
 * TIMER REDUCER
 * @param {ITimer} state timer default init value or value
 * @param {ITimerAction} action timer action
 */
function timerReducer(
  state: ITimer = initialTimerState,
  action: IStoreAction<ITimer>
): ITimer {
  switch (action.type) {
    case TIMER_TICK:
      return {
        ...state,
        lastUpdate: action.payload.lastUpdate,
        light: !!action.payload.light
      };
    case TIMER_INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case TIMER_DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    case TIMER_RESET:
      return {
        ...state,
        count: initialTimerState.count
      };
    default:
      return state;
  }
}

export default timerReducer;
