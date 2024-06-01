import * as qs from "qs";

export const toQueryString = (object: object): string => {
   return qs.stringify(object, {
      allowDots: true,
   });
};
