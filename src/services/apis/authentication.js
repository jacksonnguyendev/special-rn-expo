import request from '../../utils/request';
import configs from '../../configs';

function* login(username, password) {
  const response = yield request.post(`${configs.host.url}/accounts/login`, {
    username,
    password,
  });
  return response;
}

const authApi = {
  login,
};

export {
  authApi as default,
  login,
};
