import { handleActions } from 'redux-actions';

import {
  updateText,
  updateSelect,
  toggleObjectModal,
  toggleVisibility,
} from '../actions';

const initStateMapping = {
  loginForm: { email: '', password: '' },
  registrationForm: { email: '', password: '', confirmationPassword: '' },
  createMasterForm: { first_name: '', last_name: '', phone: '', selectedCategorys: [] },
  addObjectForm: { selectedCategorys: [] },
}

// ------Forms state reducers-------

export const formsReducer = handleActions(
  {
    [updateText]: (state, { payload: { formName, controlName, text } }) => ({
      ...state,
      [formName]: { ...state[formName], [controlName]: text },
    }),
    [updateSelect]: (state, { payload: { formName, controlName, value } }) => ({
      ...state,
      [formName]: { ...state[formName], [controlName]: value },
    }),
    [toggleObjectModal]: (state, action) => ({
      ...state,
      addObjectForm: { selectedCategorys: [] }
    }),
    [toggleVisibility]: (state, { payload: { componentName } }) => ({
      ...state,
      [componentName]: initStateMapping[componentName]
    }),
  },
  {
    loginForm: initStateMapping.loginForm,
    registrationForm: initStateMapping.registrationForm,
    createMasterForm: initStateMapping.createMasterForm,
    addObjectForm: initStateMapping.addObjectForm,
    errors: []
  }
)
