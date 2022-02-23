import { call, put, takeLeading } from "redux-saga/effects";
import { settingsActions } from "slices/settings";
import { fetchSettings } from "api/settingsApi";
import { toUIModel } from "./convert/postSettings";

// ----- WORKERS -------------------------------------------------------
function* getSettings() {
  try {
    const settings = yield call(fetchSettings);
    yield put(settingsActions.getSettingsSuccess(toUIModel(settings)));
  } catch (err) {
    yield put(settingsActions.getSettingsError(err));
  }
}
// ---------------------------------------------------------------------

export default function* watchers() {
  yield takeLeading(settingsActions.getSettings.type, getSettings);
}
