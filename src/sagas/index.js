import { fork } from 'redux-saga/effects';
import watchAuthhentication from './authentication';

export default function* root() {
  yield [
    fork(watchAuthhentication),
  ];
}

