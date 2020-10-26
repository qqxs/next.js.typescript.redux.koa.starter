import { shallowEqual, useSelector } from "react-redux";

/**
 * 封装 `useSelector` 使用浅比较
 * @param selector
 */
export function useShallowEqualSelector<T>(
  selector: (stat: T) => unknown
): unknown {
  return useSelector(selector, shallowEqual);
}
