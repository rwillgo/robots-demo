import {put, call, takeLatest} from 'redux-saga/effects';
import Types from '../actions';
import {list, create, fetch, update, remove} from '../api/bots';
import {filterError} from './filter';

function* BotsList(action) {
  try {
    const response = yield call(list);
    const {data} = response;
    yield put({type: Types.BOTS_LIST_SUCCESS, payload: data});
  } catch (error) {
    const filteredError = filterError(error);
    console.log('bots list request error - ', filteredError);
    yield put({type: Types.BOTS_LIST_FAILURE, error: filteredError});
  }
}

function* BotsCreate(action) {
  try {
    const response = yield call(create, action.params);
    const {data} = response;
    yield put({type: Types.BOTS_CREATE_SUCCESS, payload: data});
  } catch (error) {
    const filteredError = filterError(error);
    console.log('bots create request error - ', filteredError);
    yield put({type: Types.BOTS_CREATE_FAILURE, error: filteredError});
  }
}

function* BotsFetch(action) {
  try {
    const response = yield call(fetch, action.params);
    const {data} = response;
    yield put({type: Types.BOTS_FETCH_SUCCESS, payload: data});
  } catch (error) {
    const filteredError = filterError(error);
    console.log('bots fetch request error - ', filteredError);
    yield put({type: Types.BOTS_FETCH_FAILURE, error: filteredError});
  }
}

function* BotsUpdate(action) {
  try {
    const response = yield call(update, action.params);
    const {data} = response;
    yield put({type: Types.BOTS_UPDATE_SUCCESS, payload: data});
  } catch (error) {
    const filteredError = filterError(error);
    console.log('bots update request error - ', filteredError);
    yield put({type: Types.BOTS_UPDATE_FAILURE, error: filteredError});
  }
}

function* BotsRemove(action) {
  try {
    const response = yield call(remove, action.params);
    const {data} = response;
    yield put({type: Types.BOTS_REMOVE_SUCCESS, payload: data});
  } catch (error) {
    const filteredError = filterError(error);
    console.log('bots remove request error - ', filteredError);
    yield put({type: Types.BOTS_REMOVE_FAILURE, error: filteredError});
  }
}

export default [
  takeLatest(Types.BOTS_LIST_REQUEST, BotsList),
  takeLatest(Types.BOTS_CREATE_REQUEST, BotsCreate),
  takeLatest(Types.BOTS_FETCH_REQUEST, BotsFetch),
  takeLatest(Types.BOTS_UPDATE_REQUEST, BotsUpdate),
  takeLatest(Types.BOTS_REMOVE_REQUEST, BotsRemove),
];
