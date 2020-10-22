import App from "next/app";
import { Provider } from "react-redux";
import { useStore } from "../store";
import "../styles/app.scss";
// This default export is required in a new `pages/_app.js` file.

export default function AppCom({ Component, pageProps }: any) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
