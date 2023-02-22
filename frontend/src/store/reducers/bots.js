import {createReducer} from 'reduxsauce';
import Types from '../actions';

export const initialState = {
  bots: [],
  isMore: false,
  fetchedBot: null,

  // list bots
  listRequestType: null,
  listErrorMessage: '',

  // create bot
  createRequestType: null,
  createErrorMessage: '',

  // fetch bot
  fetchRequestType: null,
  fetchErrorMessage: '',

  // update bot
  updateRequestType: null,
  updateErrorMessage: '',

  // remove bot
  removeRequestType: null,
  removeErrorMessage: '',
};

// list bots
const botsListRequest = (state, action) => ({
  ...state,
  listRequestType: action.type,
  listErrorMessage: '',
});

const botsListSuccess = (state, action) => ({
  ...state,
  listRequestType: action.type,
  listErrorMessage: '',
  bots: action.payload.bots,
  isMore: action.payload.isMore,
});

const botsListFailure = (state, action) => ({
  ...state,
  listRequestType: action.type,
  listErrorMessage: action.error,
});

// create bot
const botsCreateRequest = (state, action) => ({
  ...state,
  createRequestType: action.type,
  createErrorMessage: '',
});

const botsCreateSuccess = (state, action) => ({
  ...state,
  createRequestType: action.type,
  createErrorMessage: '',
});

const botsCreateFailure = (state, action) => ({
  ...state,
  createRequestType: action.type,
  createErrorMessage: action.error,
});

// fetch bot
const botsFetchRequest = (state, action) => ({
  ...state,
  fetchRequestType: action.type,
  fetchErrorMessage: '',
});

const botsFetchSuccess = (state, action) => ({
  ...state,
  fetchRequestType: action.type,
  fetchErrorMessage: '',
  fetchedBot: action.payload.bot,
});

const botsFetchFailure = (state, action) => ({
  ...state,
  fetchRequestType: action.type,
  fetchErrorMessage: action.error,
});

// update bot
const botsUpdateRequest = (state, action) => ({
  ...state,
  updateRequestType: action.type,
  updateErrorMessage: '',
});

const botsUpdateSuccess = (state, action) => ({
  ...state,
  updateRequestType: action.type,
  updateErrorMessage: '',
});

const botsUpdateFailure = (state, action) => ({
  ...state,
  updateRequestType: action.type,
  updateErrorMessage: action.error,
});

// remove bot
const botsRemoveRequest = (state, action) => ({
  ...state,
  removeRequestType: action.type,
  removeErrorMessage: '',
});

const botsRemoveSuccess = (state, action) => ({
  ...state,
  removeRequestType: action.type,
  removeErrorMessage: '',
});

const botsRemoveFailure = (state, action) => ({
  ...state,
  removeRequestType: action.type,
  removeErrorMessage: action.error,
});

const actionHandlers = {
  [Types.BOTS_LIST_REQUEST]: botsListRequest,
  [Types.BOTS_LIST_SUCCESS]: botsListSuccess,
  [Types.BOTS_LIST_FAILURE]: botsListFailure,
  [Types.BOTS_CREATE_REQUEST]: botsCreateRequest,
  [Types.BOTS_CREATE_SUCCESS]: botsCreateSuccess,
  [Types.BOTS_CREATE_FAILURE]: botsCreateFailure,
  [Types.BOTS_FETCH_REQUEST]: botsFetchRequest,
  [Types.BOTS_FETCH_SUCCESS]: botsFetchSuccess,
  [Types.BOTS_FETCH_FAILURE]: botsFetchFailure,
  [Types.BOTS_UPDATE_REQUEST]: botsUpdateRequest,
  [Types.BOTS_UPDATE_SUCCESS]: botsUpdateSuccess,
  [Types.BOTS_UPDATE_FAILURE]: botsUpdateFailure,
  [Types.BOTS_REMOVE_REQUEST]: botsRemoveRequest,
  [Types.BOTS_REMOVE_SUCCESS]: botsRemoveSuccess,
  [Types.BOTS_REMOVE_FAILURE]: botsRemoveFailure,
};

export default createReducer(initialState, actionHandlers);
