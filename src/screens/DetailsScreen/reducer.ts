/*
 *
 * DetailsScreen reducer
 *
 */

import produce from 'immer';
import { DEFAULT_ACTION, FILL_FORM } from './constants';

export const initialState = {
  data: 'old data',
  form: { name: '' },
  test: 'data',
};

/* eslint-disable default-case, no-param-reassign */
const detailsScreenReducer = produce((draft, action) => {
  switch (action.type) {
    case DEFAULT_ACTION:
      // draft.data = action.payload;
      break;
    case FILL_FORM:
      draft.form = { ...action.payload };
      break;
  }
}, initialState);

export default detailsScreenReducer;
