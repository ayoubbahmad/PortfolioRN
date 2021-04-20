import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the contactScreen state domain
 */

const selectContactScreenDomain = (state: any) =>
  state.contactScreen || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ContactScreen
 */

const makeSelectContactScreen = () =>
  createSelector(selectContactScreenDomain, (substate) => substate);

export default makeSelectContactScreen;
export { selectContactScreenDomain };
