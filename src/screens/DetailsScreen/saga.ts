import { throttle } from 'lodash';
import { AnyAction } from 'redux';
import {
  call,
  takeLatest,
  //  call, put, select,
} from 'redux-saga/effects';
import { DEFAULT_ACTION, FILL_FORM } from './constants';

export function* defaultEffect({ payload }: AnyAction) {}

// Individual exports for testing
export default function* detailsScreenSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(DEFAULT_ACTION, defaultEffect);
}
