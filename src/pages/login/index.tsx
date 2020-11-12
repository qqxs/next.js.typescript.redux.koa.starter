import React, { useEffect } from "react";
import { NextPage, GetServerSidePropsContext } from "next";
import { useSelector } from "react-redux";
import { IStoreStateType } from "@store/types";
import { fetchPut } from "@utils/fetch";

import LoginPage from "@components/pages/login";

import styles from "./login.module.scss";

const Login: NextPage = props => {
  useEffect(() => {
    // fetchPut("/api/user/1").then(res => {
    //   console.log(res);
    // });
  }, []);

  const state = useSelector((state: IStoreStateType) => {
    return {
      counter: state.counter
    };
  });

  return (
    <div className={styles.container}>
      <LoginPage />
    </div>
  );
};
// getServerSideProps return result
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getServerSideProps(context: GetServerSidePropsContext) {
  // const data = await fetchGet("/album");

  return {
    props: {
      data: {}
    }
  };
}

export default Login;
