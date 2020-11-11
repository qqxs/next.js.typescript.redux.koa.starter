import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import styles from "./Input.module.scss";
import { todosAddAction } from "@store/actions/todos.action";

const Input: React.FC = () => {
  const [text, setText] = useState<string>("");

  const dispatch = useDispatch();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
    },
    [setText]
  );
  const handleAdd = useCallback(() => {
    if (text == "") return;
    dispatch(
      todosAddAction({
        id: new Date().getTime(),
        completed: false,
        timer: new Date().getTime() + "",
        text
      })
    );
    setText("");
  }, [text, setText]);

  return (
    <div className={styles.inputWrapper}>
      <input value={text} onChange={handleChange} className={styles.input} />
      <button onClick={handleAdd} className={styles.button}>
        ADD
      </button>
    </div>
  );
};

export default Input;
