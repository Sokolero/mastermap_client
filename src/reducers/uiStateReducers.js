import { handleActions } from 'redux-actions';
import _ from 'lodash';

import {
  toggleVisibility,
  toggleObjectModal,
} from '../actions';


//switch visibility function
const toggler = (stateValue) => stateValue === 'hidden' ? 'show' : 'hidden';

// ------UI state reducers-------

export const uiStateReducer = handleActions(
  {
    [toggleVisibility]: (state, { payload: { componentName } }) => ({
      ...state,
      [componentName]: _.update(state[componentName], 'visibility', toggler)
    }),
    [toggleObjectModal]: (state, action) => ({
      ...state,
      objectModal: { visibility: !state.objectModal.visibility }
    })
  },
  {
    burger: { visibility: 'hidden' },
    loginForm: { visibility: 'hidden' },
    registrationForm: { visibility: 'hidden' },
    gallery: { visibility: 'hidden' },
    addObjectForm: { visibility: 'hidden' },
    objectModal: { visibility: false }
  }
)
