import { takeEvery, call, select } from "redux-saga/effects";
import { selectDarkModeEnabled } from "./themeSlice";
import { saveThemeSetupInLocalStorage } from "./themeLocalStorage";

function* saveThemeSetupInLocalStorageHandler() {
    const theme = yield select(selectDarkModeEnabled);
    yield call(saveThemeSetupInLocalStorage, theme);
}

export function* themeSaga() {
    yield takeEvery("*", saveThemeSetupInLocalStorageHandler);
}