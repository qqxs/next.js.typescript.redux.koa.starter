import {
  OmitType,
  ITimerAction,
  TIMERTICK,
  TIMERINCREMENT,
  TIMERDECREMENT,
  TIMERRESET
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
    case TIMERTICK:
      return {
        ...state,
        lastUpdate: action.lastUpdate,
        light: !!action.light
      };
    case TIMERINCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case TIMERDECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    case TIMERRESET:
      return {
        ...state,
        count: initialTimerState.count
      };
    default:
      return state;
  }
}

export default timerReducer;
