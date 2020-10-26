import React from "react";
import { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";
import styles from "@styles/pages/todolist.module.scss";
import { IStoreStateType, ITodo } from "@store/types";

import { todosToggleComplateAction } from "@store/actions/todos.action";

import Input from "@components/pages/todolist/Input";

const TodoList: NextPage = props => {
  const todos: ITodo[] = useSelector((state: IStoreStateType) => {
    return state.todos;
  });

  const dispatch = useDispatch();

  const handleToggleStatus = (id: number) => {
    dispatch(todosToggleComplateAction(id));
  };

  return (
    <div className={styles.container}>
      <header>
        <Input />
      </header>
      <main>
        <ul className={styles.list}>
          {todos.map((todo: ITodo) => (
            <li className={styles.item} key={todo.id}>
              {todo.text}
              <span
                className={styles.status}
                onClick={() => {
                  handleToggleStatus(todo.id);
                }}
              >
                {todo.completed ? "完成" : "未完成"}
              </span>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default TodoList;
