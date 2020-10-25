import React, { useCallback, useState } from "react";
import { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";

import styles from "@styles/pages/todolist.module.scss";
import { ITodo } from "@store/types";
import { todosAddAction } from "@store/actions/todos.action";

const TodoList: NextPage = props => {
  console.log(props);

  const [text, setText] = useState<string>("");

  const dispatch = useDispatch();

  const todos: ITodo[] = useSelector((state: any) => {
    return state.todos;
  });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
    },
    [setText]
  );

  const handleAdd = useCallback(() => {
    dispatch(
      todosAddAction({
        id: new Date().getTime(),
        completed: false,
        timer: new Date().getTime() + "",
        text
      })
    );
    setText("");
  }, []);

  console.log(todos);

  return (
    <div className={styles.container}>
      <header>
        <input onChange={handleChange} value={text} />
        <button onClick={handleAdd}>ADD</button>
      </header>
      <main>
        <ul>
          {todos.map((todo: ITodo) => (
            <li className={styles.item} key={todo.id}>
              {todo.text}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default TodoList;
