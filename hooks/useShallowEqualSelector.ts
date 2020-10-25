import { shallowEqual, useSelector } from "react-redux";

/**
 * 封装 `useSelector` 使用浅比较
 * @param selector
 */
export function useShallowEqualSelector(selector: any): unknown {
  return useSelector(selector, shallowEqual);
}
