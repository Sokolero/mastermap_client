import { handleActions } from 'redux-actions';

import {
  logout,
  getTokenRequest,
  getTokenSuccess,
  getTokenFailure,
  refreshRequest,
  refreshSuccess,
  refreshFailure,
  getUserRequest,
  getUserSuccess,
  getUserFailure,
  createUserRequest,
  createUserSuccess,
  createUserFailure,
  createMasterSuccess,
  createMasterRequest,
  createMasterFailure,
  setUserLocation,
} from '../actions';

//auth reducer
export const authReducer = handleActions(
  {
    [getTokenSuccess]: (state, { payload: { data } }) => ({
      fetching: 'success', access: data.access, refresh: data.refresh,
    }),
    [getTokenRequest]: (state, action) => ({ ...state, fetching: 'request' }),
    [getTokenFailure]: (state, action) => ({ ...state, fetching: 'failure' }),
    [refreshSuccess]: (state, { payload: { data } }) => ({
      fetching: 'success', access: data.access, ...state,
    }),
    [refreshRequest]: (state, action) => ({ ...state, fetching: 'request' }),
    [refreshFailure]: (state, action) => ({ ...state, fetching: 'failure' }),
    [logout]: (state, action) => {
      console.log('oooooo')
      return {
        fetching: null,
        access: null,
        refresh: null 
      }
    },
  }, { fetching: null, access: null, refresh: null }
);

//user (get, create) reducer
export const userReducer = handleActions(
  {
    [getUserSuccess]: (state, { payload: { data } }) => ({
      ...state,
      fetching: 'success',
      id: data.id,
      email: data.email,
      icon: null,
      is_master: data.is_master,
      first_name: data.first_name,
      last_name: data.last_name,
      phone: data.phone,
      categorys: data.categorys,
      authorization_status: 'success',
    }),
    [createUserSuccess]: (state, action) => ({
       ...state,
       fetching: 'success',
       registration_status: 'success',
     }),
    [getUserRequest]: (state, action) => ({ ...state, fetching: 'request' }),
    [getUserFailure]: (state, action) => ({ ...state, fetching: 'failure' }),
    [createUserRequest]: (state, action) => ({
      ...state,
      fetching: 'request',
    }),
    [createUserFailure]: (state, action) => ({
      ...state,
      fetching: 'failure',
    }),
    [createMasterSuccess]: (state, { payload: { data } }) => ({
      ...state,
      fetching: 'success',
      is_master: data.is_master,
      first_name: data.first_name,
      last_name: data.last_name,
      phone: data.phone,
      categorys: data.categorys,
    }),
    [createMasterRequest]: (state, action) => ({ ...state, fetching: 'request' }),
    [createMasterFailure]: (state, action) => ({ ...state, fetching: 'failure' }),
    [setUserLocation]: (state, { payload: { x, y } }) => ({
      ...state,
      location: { x: x, y: y },
    }),
    [logout]: (state, action) => ({
      fetching: null,
      id: null,
      email: null,
      is_master: null,
      first_name: null,
      last_name: null,
      phone: null,
      categorys: [],
      registration_status: null,
      authorization_status: null,
      location: { x: '', y: '' },
    })
  },
  {
    fetching: null,
    id: null,
    email: null,
    is_master: null,
    first_name: null,
    last_name: null,
    phone: null,
    categorys: [],
    registration_status: null,
    authorization_status: null,
    location: { x: '', y: '' },
  }
);
