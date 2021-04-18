import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the params state domain
 */

const selectParamsDomain = (state: any) => state.params || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Params
 */

const makeSelectParams = () =>
  createSelector(selectParamsDomain, (substate) => substate);

export default makeSelectParams;
export { selectParamsDomain };
