import { all, fork } from "redux-saga/effects";
import onGetPosts from "./postsSaga";
import onGetSettings from "./settingsSaga";

function* rootSaga() {
  yield all([fork(onGetPosts)]);
  yield all([fork(onGetSettings)]);
}

export default rootSaga;
