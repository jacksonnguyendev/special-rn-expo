import { takeLatest, call, put } from 'redux-saga/effects';
import { } from 'redux-saga';
import { authentication } from '../actions/constants';
import { login } from '../services/apis/authentication';

function* loginSaga(action) {
  const { username, password } = action.payload;
  const response = yield call(login, username, password);
  yield put({
    type: authentication.LOGIN_REQUEST,
  });
  if (response.status === 200) {
    const { data: userData } = response;
    yield put({
      type: authentication.LOGIN_REQUEST,
      payload: {
        userData,
      },
    });
  } else {
    yield put({
      type: authentication.LOGIN_FAILURE,
      errorCode: response.status,
    });
  }
}

export default function* watchAttendanceSaga() {
  yield takeLatest(authentication.LOGIN_REQUEST, loginSaga);
}
