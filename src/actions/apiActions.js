import { createAction } from 'redux-actions';
import axios from 'axios';

//actions of the Objects API
export const getObjectsRequest = createAction('GET_OBJECTS_REQUEST');
export const getObjectsSuccess = createAction('GET_OBJECTS_SUCCESS');
export const getObjectsFailure = createAction('GET_OBJECTS_FAILURE');

export const getObjects = () => async (dispatch) => {
  dispatch(getObjectsRequest());
  try {
    const response = await axios.get('http://localhost:8000/api/objects/');
    dispatch(getObjectsSuccess({ data: response.data }));
  } catch (e) {
    dispatch(getObjectsFailure());
  }
};

//actions of the Categorys API
export const getCategorysRequest = createAction('GET_CATEGORYS_REQUEST');
export const getCategorysSuccess = createAction('GET_CATEGORYS_SUCCESS');
export const getCategorysFailure = createAction('GET_CATEGORYS_FAILURE');

export const getCategorys = () => async (dispatch) => {
  dispatch(getCategorysRequest());
  try {
    const response = await axios.get('http://localhost:8000/api/categorys/');
    dispatch(getCategorysSuccess({ data: response.data }));
  } catch (e) {
    dispatch(getCategorysFailure());
  }
};


//actions of the Masters API
export const getMastersRequest = createAction('GET_MASTERS_REQUEST');
export const getMastersSuccess = createAction('GET_MASTERS_SUCCESS');
export const getMastersFailure = createAction('GET_MASTERS_FAILURE');

export const getMasters = () => async (dispatch) => {
  dispatch(getMastersRequest());
  try {
    const response = await axios.get('http://localhost:8000/api/masters/');
    dispatch(getMastersSuccess({ data: response.data }));
  } catch (e) {
    dispatch(getMastersFailure());
  }
};


//actions of the Gallerys API
export const getGallerysRequest = createAction('GET_GALLERYS_REQUEST');
export const getGallerysSuccess = createAction('GET_GALLERYS_SUCCESS');
export const getGallerysFailure = createAction('GET_GALLERYS_FAILURE');

export const getGallerysByObjectId = (objectId) => async (dispatch) => {
  dispatch(getGallerysRequest());
  try {
    const response = await axios.get(`http://localhost:8000/api/gallerys/?object=${objectId}`);
    dispatch(getGallerysSuccess({ data: response.data }));
  } catch (e) {
    dispatch(getGallerysFailure());
  }
};
