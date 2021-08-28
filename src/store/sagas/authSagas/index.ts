import { fork } from 'redux-saga/effects';
import loginSaga from './loginSaga';

export default function* () {
  yield fork(loginSaga);
}
