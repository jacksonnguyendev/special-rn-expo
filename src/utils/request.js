import { select } from 'redux-saga/effects';

const codeMessage = {
  200: 'The server successfully returned the requested data. ',
  201: 'New or modified data is successful. ',
  202: 'A request has entered the background queue (asynchronous task). ',
  204: 'Delete data successfully. ',
  400: 'There was an error in the issued request. The server did not perform operations to create or modify data. ',
  401: 'User does not have permission (token, username, password error). ',
  403: 'The user is authorized but access is forbidden. ',
  404: 'The request was issued for a non-existent record. The server did not perform the operation. ',
  406: 'The requested format is not available. ',
  410: 'The requested resource is permanently deleted and will no longer be available. ',
  422: 'A validation error occurred while creating an object. ',
  500: 'There was an error in the server. Please check the server. ',
  502: 'The gateway is wrong. ',
  503: 'Service is unavailable, the server is temporarily overloaded or maintained. ',
  504: 'The gateway timed out. ',
};

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const errortext = codeMessage[response.status] || response.statusText;
  // Alert.alert(
  //   `Lỗi ${response.status}: ${response.url}`,
  //   errortext,
  // );
  const error = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
}

/**
 * Requests a URL by generator function, returning a data.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */

function* request(url: string, method: string, options: Object) {
  const response = yield fetch(url, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: yield select(state => state.auth.appAccessToken),
    },
    body: options ? JSON.stringify({
      ...options,
    }) : {},
  });
  yield checkStatus(response);
  const responseJson = yield response.json();
  return responseJson;
}

export default {
  post: (url: string, options: Object) => request(url, 'POST', options),
  get: (url: string, options: Object) => request(url, 'GET', options),
  update: (url: string, options: Object) => request(url, 'PATCH', options),
  delete: (url: string, options: Object) => request(url, 'DELETE', options),
  checkStatus,
};
