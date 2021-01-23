import { combineReducers } from 'redux';

import { formsReducer } from './formsReducers';
import {
  objectsReducer,
  categorysReducer,
  mastersReducer,
  gallerysReducer,
} from './apiReducers';
import {
  authReducer,
  userReducer,
} from './usersReducers';
import { uiStateReducer } from './uiStateReducers';
import { profileReducer } from './profileReducers';

//-----Root reducer
export default combineReducers({
  auth: authReducer,
  user: userReducer,
  forms: formsReducer,
  objects: objectsReducer,
  categorys: categorysReducer,
  masters: mastersReducer,
  gallerys: gallerysReducer,
  uiState: uiStateReducer,
  profile: profileReducer,
});
