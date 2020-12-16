import { takeEvery, put, call, select } from "redux-saga/effects";
import {
  putPosts,
  getError,
  incrementOffset,
  showLoader,
  hideLoader,
} from "./actions";
import { REQUEST_POST } from "./types";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POST, sagaWorker);
}

function* sagaWorker() {
  try {
    const state = yield select();
    const offset = state.posts.offset;
    yield put(showLoader());
    const data = yield call(fetchPosts, offset);
    yield put(putPosts(data));
    yield put(incrementOffset());
  } catch (e) {
    yield put(getError());
  } finally {
    yield put(hideLoader());
  }
}

async function fetchPosts(offset) {
  const response = await fetch(
    `https://api.spacexdata.com/v3/launches?sort=launch_date_utc&order=desc&limit=6&offset=${offset}`
  );
  return await response.json();
}
