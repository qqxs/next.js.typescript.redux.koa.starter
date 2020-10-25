import React from "react";
import { NextPage } from "next";
import { useSelector } from "react-redux";
import { IStoreStateType } from "@store/types";

const Login: NextPage = props => {
  console.log(props);
  const state = useSelector((state: IStoreStateType) => {
    return {
      counter: state.counter
    };
  });
  return <div className="">{JSON.stringify(state)}</div>;
};

export default Login;
