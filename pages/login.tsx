import React from "react";
import { NextPage } from "next";
import { useSelector } from "react-redux";

const Login: NextPage = props => {
  const state = useSelector((state: any) => {
    return {
      counter: state.counter
    };
  });
  return <div className="">{JSON.stringify(state)}</div>;
};

export default Login;
