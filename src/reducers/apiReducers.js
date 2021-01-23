import { handleActions } from 'redux-actions';
import {
  getObjectsRequest,
  getObjectsSuccess,
  getObjectsFailure,
  getCategorysRequest,
  getCategorysSuccess,
  getCategorysFailure,
  getMastersRequest,
  getMastersSuccess,
  getMastersFailure,
  getGallerysRequest,
  getGallerysSuccess,
  getGallerysFailure,
} from '../actions';

//objects reducer
export const objectsReducer = handleActions(
  {
    [getObjectsSuccess]: (state, { payload: { data } }) => ({
      fetching: 'success', data: data,
    }),
    [getObjectsRequest]: (state, action) => ({ ...state, fetching: 'request' }),
    [getObjectsFailure]: (state, action) => ({ ...state, fetching: 'failure' }),
  }, { fetching: null, data: [] }
);

//categorys reducer
export const categorysReducer = handleActions(
  {
    [getCategorysSuccess]: (state, { payload: { data } }) => ({
      fetching: 'success', data: data,
    }),
    [getCategorysRequest]: (state, action) => ({ ...state, fetching: 'request' }),
    [getCategorysFailure]: (state, action) => ({ ...state, fetching: 'failure' }),
  }, { fetching: null, data: [] }
);

//masters reducer
export const mastersReducer = handleActions(
  {
    [getMastersSuccess]: (state, { payload: { data } }) => ({
      fetching: 'success', data: data,
    }),
    [getMastersRequest]: (state, action) => ({ ...state, fetching: 'request' }),
    [getMastersFailure]: (state, action) => ({ ...state, fetching: 'failure' }),
  }, { fetching: null, data: [] }
);

//gallerys reducer
export const gallerysReducer = handleActions(
  {
    [getGallerysSuccess]: (state, { payload: { data } }) => ({
      fetching: 'success', data: data,
    }),
    [getGallerysRequest]: (state, action) => ({ ...state, fetching: 'request' }),
    [getGallerysFailure]: (state, action) => ({ ...state, fetching: 'failure' }),
  }, { fetching: null, data: [] }
);
