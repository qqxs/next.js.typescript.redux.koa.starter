import {
  TODOS_ADD,
  ITodo,
  IStoreAction,
  TODOS_CONCAT,
  TODOS_DELETE,
  TODOS_CLEAR,
  TODOS_TOGGLE_COMPLETE
} from "../types";

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

/**
 * 添加一条todo数据
 * @param {ITodo} todo todo 数据
 *
 * @returns {IStoreAction<ITodo>} IStoreAction<ITodo>
 */
export function todosAddAction(todo: Required<ITodo>): IStoreAction<ITodo> {
  return {
    type: TODOS_ADD,
    payload: todo
  };
}
/**
 * 根据id删除一条todo 数据
 * @param {number} id todo id
 *
 * @returns {Required<IStoreAction<Required<Pick<ITodo, "id">>>>} Required<IStoreAction<Required<Pick<ITodo, "id">>>>
 */
export function todosDeleteAction(
  id: number
): Required<IStoreAction<Required<Pick<ITodo, "id">>>> {
  return {
    type: TODOS_DELETE,
    payload: { id }
  };
}

/**
 * 清空todos list
 * @returns {IStoreAction<ITodo>} IStoreAction<ITodo>
 */
export function todosClearAction(): IStoreAction<ITodo> {
  return {
    type: TODOS_CLEAR
  };
}
/**
 * 更改id 对应todo 的状态
 * @param {number} id todo id
 *
 * @returns {Required<IStoreAction<Required<Pick<ITodo, "id">>>>} Required<IStoreAction<Required<Pick<ITodo, "id">>>>
 */
export function todosToggleComplateAction(
  id: number
): Required<IStoreAction<Required<Pick<ITodo, "id">>>> {
  return {
    type: TODOS_TOGGLE_COMPLETE,
    payload: { id }
  };
}
