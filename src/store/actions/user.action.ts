import { ITodo, IStoreAction, TODOS_CONCAT } from "../types";

/**
 * 批量 todo 添加
 * @param {ITodo[]} todos
 *
 * @returns {Required<IStoreAction<ITodo[]>>} Required<IStoreAction<ITodo[]>>
 */
export function todosConcatAction(
  todos: ITodo[]
): Required<IStoreAction<ITodo[]>> {
  return {
    type: TODOS_CONCAT,
    payload: todos
  };
}
