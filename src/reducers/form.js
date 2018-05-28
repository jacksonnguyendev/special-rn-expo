import update from 'immutability-helper';
import { form } from '../actions/constants';

const intitalState = {
  loginForm: {
    username: '',
    password: '',
    reset: {
      username: '',
      password: '',
    },
  },
  registerForm: {
    email: '',
    username: '',
    password: '',
    reset: {
      email: '',
      username: '',
      password: '',
    },
  },
};

function formReducer(state = intitalState, action) {
  switch (action.type) {
    case form.UPDATE_FORM_VALUE: {
      const { formName, key, value } = action.payload;
      return update(state, {
        [formName]: {
          [key]: { $set: value },
        },
      });
    }
    case form.RESET_FORM_VALUE: {
      const { formName } = action.payload;
      return update(state, {
        [formName]: {
          $set: [formName].reset,
        },
      });
    }
    default:
      return state;
  }
}

export default formReducer;

