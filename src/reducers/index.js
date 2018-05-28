import { combineReducers } from 'redux';
import form from './form';
import authentication from './authentication';

const rootReducer = combineReducers({
  form,
  authentication,
});

export default rootReducer;
