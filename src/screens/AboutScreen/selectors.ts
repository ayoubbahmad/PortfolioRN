import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the aboutScreen state domain
 */

const selectAboutScreenDomain = (state: any) =>
  state.aboutScreen || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AboutScreen
 */

const makeSelectAboutScreen = () =>
  createSelector(selectAboutScreenDomain, (substate) => substate);

export default makeSelectAboutScreen;
export { selectAboutScreenDomain };
