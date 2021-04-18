/*
 *
 * DetailsScreen actions
 *
 */

import { DEFAULT_ACTION, FILL_FORM } from './constants';

export function defaultAction(payload: string) {
  return {
    type: DEFAULT_ACTION,
    payload,
  };
}

export function fillFormAction(payload: object) {
  return {
    type: FILL_FORM,
    payload,
  };
}
