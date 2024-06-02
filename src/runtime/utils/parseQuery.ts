import { type LocationQuery, stringifyQuery } from "vue-router";
import * as qs from "qs"

export const parseQuery = (query: LocationQuery): object => {
  return qs.parse(stringifyQuery(query), {
    decodeDotInKeys: true,
  });
};
