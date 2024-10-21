/* eslint-disable import/prefer-default-export */

import { format } from 'date-fns';
import { transform } from 'lodash';
import { currencyFormat } from 'simple-currency-format';

const isObject = (value: string) => {
  const type = typeof value;
  return (
    type === 'function' ||
    (type === 'object' && !Array.isArray(value) && !!value)
  );
};

// Deeply remove keys from an object
// @param - obj: Object - the object to remove the key from
// @params - keysToOmit: Array/String - string or array of strings of keys to remove
export const deepOmit = (obj: any, keysToOmit: string[]) => {
  const keysToOmitIndex = Array.isArray(keysToOmit) ? keysToOmit : [keysToOmit];

  function omitFromObject(o: any) {
    // the inner function which will be called recursivley
    return transform(o, (result: any, value, key: string) => {
      // transform to a new object
      if (keysToOmitIndex.indexOf(key) !== -1) {
        // if the key is in the index skip it
        return;
      }

      // eslint-disable-next-line no-param-reassign
      result[key] = isObject(value) ? omitFromObject(value) : value; // if the key is an object run it through the inner function - omitFromObject
    });
  }

  return omitFromObject(obj); // return the inner function result
};

export function currency(value = 0, currencyCode = 'GBP') {
  return currencyFormat(value, 'en-GB', currencyCode, 2);
}

export function dateFormat(value: string, dateFormat = 'dd/MM/yyyy - HH:mm') {
  return format(new Date(value), dateFormat);
}
