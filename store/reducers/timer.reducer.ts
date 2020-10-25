import {
  OmitType,
  ITimerAction,
  TIMER_TICK,
  TIMER_INCREMENT,
  TIMER_DECREMENT,
  TIMER_RESET
} from "../types";

export type TimerStateType = OmitType<ITimerAction>;

// INITIAL TIMER STATE
export const initialTimerState: TimerStateType = {
  lastUpdate: "",
  light: false,
  count: 0
};

/**
 * TIMER REDUCER
 * @param {TimerState} state timer default init value or value
 * @param {ITimerAction} action timer action
 */
function timerReducer(
  state: TimerStateType = initialTimerState,
  action: ITimerAction
) {
  switch (action.type) {
    case TIMER_TICK:
      return {
        ...state,
        lastUpdate: action.lastUpdate,
        light: !!action.light
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
