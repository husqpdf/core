import {useRoute} from "#imports";
import { parseQuery } from "../utils/parseQuery"

export function usePageData<T>(): T {
  const route = useRoute()
  return parseQuery(route.query) as T
}
