import { authentication } from './constants';
import action from '../utils/action';

const login = action(authentication.LOGIN_REQUEST);
const register = action(authentication.REGISTER_REQUEST);

const authActions = {
  login,
  register,
};

export {
  authActions as default,
  login,
  register,
};

