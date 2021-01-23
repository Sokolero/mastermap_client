import { createAction } from 'redux-actions';
import axios from 'axios';
import { toggleObjectModal } from './';

//actions in order to create object with photos
export const createObjectRequest = createAction('CREATE_OBJECT_REQUEST');
export const createObjectSuccess = createAction('CREATE_OBJECT_SUCCESS');
export const createObjectFailure = createAction('CREATE_OBJECT_FAILURE');
export const getObjectsProfileRequest = createAction('GET_OBJECTS_PROFILE_REQUEST');
export const getObjectsProfileSuccess = createAction('GET_OBJECTS_PROFILE_SUCCESS');
export const getObjectsProfileFailure = createAction('GET_OBJECTS_PROFILE_FAILURE');

//appending data from the list object or values
const multiAppendFormData = (key, array, formDataObject) => {
  for (let i = 0; i < array.length; i++) {
    formDataObject.append(`${key}[${i}]`, array[i]);
  }
};


//action dispatcher createObject
export const createObject = (token, x, y, selectedCategorys, files) => async (dispatch) => {
  //-----------------------------
  const formData = new FormData();
  multiAppendFormData('files', files, formData);
  multiAppendFormData('selected_categorys', selectedCategorys, formData);
  formData.append("X", x);
  formData.append("Y", y);
  //---------------------
  dispatch(createObjectRequest());
  try {
    await axios({
      method: 'post',
      url: `http://localhost:8000/profiles_api/objects/`,
      data: formData,
      headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json',
        },
      }
    );
    dispatch(createObjectSuccess());
    dispatch(toggleObjectModal());
  } catch (e) {
    // if (e.response) {
    //   console.log(e.response.data);
    //   // console.log(e.response.status);
    //   // console.log(e.response.headers);
    // } else if (e.request) {
    //   console.log(e.request);
    // } else {
    //   console.log('Error', e.message);}
    // console.log(e.config);
    dispatch(createObjectFailure());
    throw e;
  };
};

//-------------get own object list---------------------------------
export const getObjectsProfile = (token) => async (dispatch) => {
  dispatch(getObjectsProfileRequest())
  try {
    const response = await axios({
      method: 'get',
      url: 'http://localhost:8000/profiles_api/objects/',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    console.log(response.data)
    dispatch(getObjectsProfileSuccess({ data: response.data }))
  } catch (e) {
    dispatch(getObjectsProfileFailure())
  }
};
