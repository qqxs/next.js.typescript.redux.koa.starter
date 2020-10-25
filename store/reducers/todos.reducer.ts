import {
  TODOS_ADD,
  TODOS_DELETE,
  TODOS_CLEAR,
  TODOS_TOGGLE_COMPLETE,
  ITodo,
  IStoreAction,
  TODOS_CONCAT
} from "../types";

const initialTodoList: ITodo[] = [];

/**
 * TODO todo list
 * @param {number} state todos default state value
 * @param {Action} param action
 */
function todosReducer(
  state: ITodo[] = initialTodoList,
  { type, payload }: IStoreAction<ITodo>
): ITodo[] {
  console.log("IStoreAction", type, payload);
  switch (type) {
    case TODOS_CONCAT:
      return [].concat(state, payload);
    case TODOS_ADD:
      state.unshift(payload);
      return [...state];
    case TODOS_DELETE:
      return state.filter((todo: ITodo) => {
        return payload.id !== todo.id;
      });
    case TODOS_TOGGLE_COMPLETE:
      return state.map((todo: ITodo) => {
        todo.completed = !todo.completed;
        return todo;
      });
    case TODOS_CLEAR:
      return [];
    default:
      return state;
  }
}

export default todosReducer;
