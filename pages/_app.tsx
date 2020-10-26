import { Provider } from "react-redux";
import { AppProps } from "next/app";
import { useStore } from "../store";
import "../styles/app.scss";
// This default export is required in a new `pages/_app.js` file.

export default function AppCom({
  Component,
  pageProps
}: AppProps): JSX.Element {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
