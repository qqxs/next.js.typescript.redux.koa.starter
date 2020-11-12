import React, { useEffect } from "react";
import { NextPage } from "next";
import Link from "next/link";
import styles from "./index.module.scss";
import { fetchGet } from "@utils/fetch";
import Logo from "@components/Logo";

const Index: NextPage = () => {
  useEffect(() => {
    fetchGet("/api/v1/login").then(res => {
      // console.log(res);
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/home">
          {/* 由于Link 的bug 自定义组件要是用`a`标签包裹 */}
          {/* https://github.com/vercel/next.js/issues/7915 */}
          <a>
            <Logo />
          </a>
        </Link>
      </div>
      {/* <img src='https://www.nextjs.cn/static/images/nextjs-logo.png' alt='next.js'/> */}
      <h2 className={styles.title}>Welcome to next.js!</h2>
    </div>
  );
};

export default Index;
