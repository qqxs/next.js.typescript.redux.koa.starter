import React, { useEffect } from "react";
import { NextPage, GetStaticProps } from "next";
import { useSelector, useDispatch } from "react-redux";
import styles from "@styles/pages/todolist.module.scss";
import { IStoreStateType, ITodo } from "@store/types";

import { todosToggleComplateAction } from "@store/actions/todos.action";

import Input from "@components/pages/todolist/Input";

const TodoList: NextPage = props => {
  console.log(props);

  const todos: ITodo[] = useSelector((state: IStoreStateType) => {
    return state.todos;
  });

  const dispatch = useDispatch();
  const handleToggleStatus = (id: number) => {
    dispatch(todosToggleComplateAction(id));
  };

  useEffect(() => {
    fetch("https://api.github.com/users/rich-harris")
      .then(res => res.json())
      .then(res => console.log(res));
  }, []);

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

export const getStaticProps: GetStaticProps = async context => {
  console.log(context);
  const res = await fetch("https://api.github.com/users/rich-harris");
  const posts = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts
    }
  };
};

export default TodoList;
