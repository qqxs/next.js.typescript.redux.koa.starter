import React, { useEffect } from "react";
import { NextPage, GetStaticPropsContext } from "next";
import { useSelector } from "react-redux";
import { IStoreStateType } from "@store/types";
import { fetchGet } from "@utils/fetch";

import styles from "@styles/pages/login.module.scss";

const Login: NextPage = props => {
  console.log(props);

  useEffect(() => {
    fetchGet("/album").then(res => {
      console.log(res);
    });
  }, []);

  const state = useSelector((state: IStoreStateType) => {
    return {
      counter: state.counter
    };
  });

  return <div className={styles.container}>{JSON.stringify(state)}</div>;
};
// getStaticProps return result GetStaticPropsResult
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getStaticProps(context: GetStaticPropsContext) {
  const data = await fetchGet("/album");

  console.log(context);

  return {
    props: {
      data: data
    }
  };
}

export default Login;
