import {all} from 'redux-saga/effects';
import botsSagas from './bots';

export default function* sagas() {
  yield all([...botsSagas]);
}
