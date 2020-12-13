import { takeEvery, put, call } from "redux-saga/effects";
import { putPosts, getError } from "./actions";
import { REQUEST_POST } from "./types";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POST, sagaWorker);
}

function* sagaWorker() {
  try {
    const data = yield call(fetchPosts);
    yield put(putPosts(data));
  } catch (e) {
    yield put(getError());
  }
}

async function fetchPosts() {
  const response = await fetch(
    "https://api.spacexdata.com/v3/launches?sort=launch_date_utc&order=desc&limit=6"
  );
  return await response.json();
}
