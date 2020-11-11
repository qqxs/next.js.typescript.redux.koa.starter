import { ICounter, IStoreAction } from "../types";

// INITIAL TIMER STATE
export const initialCounterState: ICounter = 0;

/**
 * COUNTER REDUCER
 * @param {number} state counter default state value
 * @param {Action} param Action
 */
function counterReducer(
  state: ICounter = initialCounterState,
  { type }: IStoreAction<ICounter>
): ICounter {
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
