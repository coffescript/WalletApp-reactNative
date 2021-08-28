import { all } from "redux-saga/effects";
import authSagas from "./sagas/authSagas";

export default function* rootSaga() {
  yield all([
    authSagas(),
  ]);
}
