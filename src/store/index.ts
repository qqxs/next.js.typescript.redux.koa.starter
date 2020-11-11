import { useMemo } from "react";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers";

let store;

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    // 开发模式打印redux信息
    const { logger } = require("redux-logger");
    middleware.push(logger);
    return composeWithDevTools(applyMiddleware(...middleware));
  }

  middleware.push(thunkMiddleware);

  return applyMiddleware(...middleware);
};

function initStore(initialState) {
  const middleware = bindMiddleware([]);
  return createStore(reducers, initialState, middleware);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const initializeStore = (preloadedState?: unknown[]) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState
    });

    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
