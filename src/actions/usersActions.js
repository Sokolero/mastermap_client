import { createAction } from 'redux-actions';
import axios from 'axios';



//actions of the Authentication by JWT
export const getTokenRequest = createAction('GET_TOKEN_REQUEST');
export const getTokenSuccess = createAction('GET_TOKEN_SUCCESS');
export const getTokenFailure = createAction('GET_TOKEN_FAILURE');

export const getToken = (email, password) => async (dispatch) => {
  dispatch(getTokenRequest());
  try {
    const response = await axios.post(
      'http://localhost:8000/auth/token/',
      {
          email: email,
          password: password,
      }
    );
    dispatch(getTokenSuccess({ data: response.data }));
    dispatch(getUser(response.data.access));
    localStorage.setItem('access', response.data.access);
    localStorage.setItem('refresh', response.data.refresh);
  } catch (e) {
    console.log(e.data);
    dispatch(getTokenFailure());
    throw e;
  }
};



//actions of the refresh authenticate token
export const refreshRequest = createAction('REFRESH_REQUEST');
export const refreshSuccess = createAction('REFRESH_SUCCESS');
export const refreshFailure = createAction('REFRESH_FAILURE');

export const refresh = (refresh) => async (dispatch) => {
  dispatch(refreshRequest());
  try {
    const response = await axios.post(
      'http://localhost:8000/auth/refresh/',
      {
        'refresh': refresh,
      }
    );
    dispatch(getTokenSuccess({ data: response.data }));
  } catch (e) {
    console.log(e.data);
    dispatch(getTokenFailure());
  }
};

//logout actions
export const logout = createAction('LOGOUT');


//actions of the getting user data (token is required)
export const getUserRequest = createAction('GET_USER_REQUEST');
export const getUserSuccess = createAction('GET_USER_SUCCESS');
export const getUserFailure = createAction('GET_USER_FAILURE');

export const getUser = (token) => async (dispatch) => {
  dispatch(getUserRequest());
  try {
    const response = await axios.get(
      'http://localhost:8000/auth/me/',
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );
    dispatch(getUserSuccess({ data: response.data }));
  } catch (e) {
    console.log(e.data)
    dispatch(getUserFailure());
    if (e.response) {
      throw e;
    }
  }
};



//actions of the create new user (Registration)
export const createUserRequest = createAction('CREATE_USER_REQUEST');
export const createUserSuccess = createAction('CREATE_USER_SUCCESS');
export const createUserFailure = createAction('CREATE_USER_FAILURE');

export const createUser = (email, password) => async (dispatch) => {
  dispatch(createUserRequest());
  try {
    const response = await axios.post(
      'http://localhost:8000/auth/registration/',
      {
        'email': email,
        'password': password,
      }
    );
    dispatch(createUserSuccess({ data: response.data }));
  } catch (e) {
    console.log(e.data);
    dispatch(createUserFailure());
  }
};


//actions of the creation master profile based-custom-user
export const createMasterRequest = createAction('CREATE_USER_REQUEST');
export const createMasterSuccess = createAction('CREATE_USER_SUCCESS');
export const createMasterFailure = createAction('CREATE_USER_FAILURE');

export const createMaster = (token, first_name, last_name, phone, categorys) => async (dispatch) => {
  dispatch(createMasterRequest());
  try {
    const response = await axios.patch(
      `http://localhost:8000/auth/create_master/`,
      {
        'first_name': first_name,
        'last_name': last_name,
        'phone': phone,
        'categorys': categorys,
      },
      {
        headers: {
          'Authorization': `Authorization ${token}`
        }
      }
    );
    dispatch(createMasterSuccess({ data: response.data }));
  } catch (e) {
    console.log(e.data);
    dispatch(createMasterFailure());
  }
};


//action to set location current user
export const setUserLocation = createAction('SET_USER_LOCATION');
