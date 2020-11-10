import { Provider } from "react-redux";
import { NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";
import { useStore, initializeStore } from "../store";
import "../styles/app.scss";
// import { todosAddAction } from "@store/actions/todos.action";
// This default export is required in a new `pages/_app.js` file.

export interface ModifiedAppInitialProps<A = { [key in string]: string }> {
  appProps: A;
}

export interface ExtendedAppProps<
  P = { [key in string]: string },
  A = { [key in string]: string }
> extends AppProps<P>,
    ModifiedAppInitialProps<A> {}

const AppCom: NextComponentType<
  AppContext,
  ModifiedAppInitialProps,
  ExtendedAppProps
> = ({ Component, pageProps, appProps }) => {
  const store = useStore(appProps.initialReduxState);

  // console.log("Component", Component);
  // console.log("pageProps", pageProps);
  // console.log("appProps", appProps);

  return (
    <Provider store={store}>
      <Component {...appProps} {...pageProps} />
    </Provider>
  );
};

AppCom.getInitialProps = async (context: AppContext) => {
  const reduxStore = initializeStore();

  // const { store, req, pathname, query, res } = context.ctx;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { dispatch } = reduxStore;

  // console.log("getServerSideProps", store, req, pathname, query, res);

  // dispatch(
  //   todosAddAction({
  //     id: 0,
  //     completed: false,
  //     text: "this is server",
  //     timer: new Date().getTime() + ""
  //   })
  // );

  return {
    appProps: {
      initialReduxState: reduxStore.getState()
    }
  };
};

export default AppCom;
