import {useRoute} from "#imports";

export function usePageData<T>(): T {
  const route = useRoute()
  const currentDocument =  route.path.split("/").filter(Boolean).pop();
  const key = `__hqpdf_page_state_${currentDocument}`
  return JSON.parse(localStorage.getItem(key) || "{}") as T;
}
