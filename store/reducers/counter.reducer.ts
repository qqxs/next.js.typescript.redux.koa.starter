import { OmitType, ICounterAction } from "../types";

export type CounterStateType = OmitType<ICounterAction>;

// INITIAL TIMER STATE
export const initialCounterState: CounterStateType = {
  counter: 0
};

/**
 * COUNTER REDUCER
 * @param {number} state counter default state value
 * @param {Action} param Action
 */
function counterReducer(
  state: CounterStateType = initialCounterState,
  { type }: ICounterAction
): CounterStateType {
  switch (type) {
    // case types.INCREMENT:
    //   return state + 1;
    // case types.DECREMENT:
    //   return state - 1;
    // case types.RESET:
    //   return 0;
    default:
      return state;
  }
}

export default counterReducer;
