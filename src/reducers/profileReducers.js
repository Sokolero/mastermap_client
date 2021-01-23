import { handleActions } from 'redux-actions';
import {
  createObjectRequest,
  createObjectSuccess,
  createObjectFailure,
  getObjectsProfileRequest,
  getObjectsProfileSuccess,
  getObjectsProfileFailure,
} from '../actions';


//========================Profiles API==========================================
export const profileReducer = handleActions(
  {
    [createObjectSuccess]: (state, action) => ({ ...state, fetching: 'success' }),
    [createObjectRequest]: (state, action) => ({ ...state, fetching: 'request' }),
    [createObjectFailure]: (state, action) => ({ ...state, fetching: 'failure' }),
    [getObjectsProfileRequest]: (state, action) => ({ ...state, fetching: 'request' }),
    [getObjectsProfileSuccess]: (state, { payload: { data } }) => ({
      ...state,
      fetching: 'success',
      objects: data,
    }),
    [getObjectsProfileFailure]: (state, action) => ({ ...state, fetching: 'failure' }),
  },
  {
    objects: [],
    fetching: 'null',
  }
);
