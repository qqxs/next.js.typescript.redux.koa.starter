import React from "react";
import Head from "next/head";

interface IHead {
  title?: string;
}

const LayoutHead: React.FC<IHead> = ({ title, children }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
};

export default LayoutHead;
