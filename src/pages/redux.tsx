import { useSelector } from "react-redux";
import Link from "next/link";
import { NextPage } from "next";
import { IStoreStateType } from "@store/types";

const codeStyle = {
  background: "#ebebeb",
  width: 400,
  padding: 10,
  border: "1px solid grey",
  marginBottom: 10
};

const ShowReduxState: NextPage = () => {
  const state = useSelector((state: IStoreStateType) => state);

  return (
    <>
      <pre style={codeStyle}>
        <code>{JSON.stringify(state, null, 4)}</code>
      </pre>
      <Link href="/">
        <a href="/">Go Back Home</a>
      </Link>
    </>
  );
};

export default ShowReduxState;
