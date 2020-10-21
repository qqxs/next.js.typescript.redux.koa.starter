import { Provider } from "react-redux";
import { useStore } from "../store/store";
import "../styles/app.scss";
// This default export is required in a new `pages/_app.js` file.

export default function App({ Component, pageProps }: any) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
