import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the detailsScreen state domain
 */

const selectDetailsScreenDomain = (state: any) =>
  state.detailsScreen || initialState;

/**
 * Other specific selectors
 */

const makeSelectTest = createSelector(
  selectDetailsScreenDomain,
  (substate) => substate.test,
);
const makeSelectForm = createSelector(
  selectDetailsScreenDomain,
  (substate) => substate.form,
);

/**
 * Default selector used by DetailsScreen
 */

const makeSelectDetailsScreen = () =>
  createSelector(selectDetailsScreenDomain, (substate) => substate);

export default makeSelectDetailsScreen;
export { selectDetailsScreenDomain, makeSelectTest, makeSelectForm };
