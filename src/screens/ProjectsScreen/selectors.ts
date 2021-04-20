import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the projectsScreen state domain
 */

const selectProjectsScreenDomain = (state: any) =>
  state.projectsScreen || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ProjectsScreen
 */

const makeSelectProjectsScreen = () =>
  createSelector(selectProjectsScreenDomain, (substate) => substate);

export default makeSelectProjectsScreen;
export { selectProjectsScreenDomain };
