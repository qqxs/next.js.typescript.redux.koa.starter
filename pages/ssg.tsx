import { NextPage, GetServerSidePropsContext } from "next";
import Page from "../components/pages/ssg";

// export interface ISSGProps {}

const SSG: NextPage = props => {
  console.log("SSG", props);
  return <Page />;
};

// If you build and start the app, the date returned here will have the same
// value for all requests, as this method gets executed at build time.
export function getServerSideProps(context: GetServerSidePropsContext) {
  // Note that in this case we're returning the state directly, without creating
  // the store first (like in /pages/ssr.js), this approach can be better and easier
  // 在这个函数里可以获取数据传递到页面进行渲染
  return {
    props: {
      initialReduxState: {
        lastUpdate: Date.now(),
        light: false
      }
    }
  };
}

export default SSG;
