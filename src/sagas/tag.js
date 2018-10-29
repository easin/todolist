import { put, call, takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import api from "../api";

export function* handleGetTagRequest(action) {
  try {
    const { data } = yield call(api.getTagRequest, action.payload);
    yield put(actions.getTagSuccess(data));
  } catch (error) {
    yield put(actions.getTagFailure(error));
  }
}
export function* handleListTagsRequest(action) {
  try {
    const { data } = yield call(api.listTagsRequest, action.payload);
    yield put(actions.listTagsSuccess(data));
  } catch (error) {
    yield put(actions.listTagsFailure(error));
  }
}
export function* handleAddTagRequest(action) {
  try {
    const { data } = yield call(api.addTagRequest, action.payload);
    yield put(actions.addTagSuccess(data));
  } catch (error) {
    yield put(actions.addTagFailure(error));
  }
}
export function* handleUpdateTagsRequest(action) {
  try {
    const { data } = yield call(api.updateTagsRequest, action.payload);
    yield put(actions.updateTagsSuccess(data));
  } catch (error) {
    yield put(actions.updateTagsFailure(error));
  }
}
export function* handleDelTagsRequest(action) {
  try {
    const { data } = yield call(api.delTagsRequest, action.payload);
    yield put(actions.delTagsSuccess(data));
  } catch (error) {
    yield put(actions.delTagsFailure(error));
  }
}

export default [
  takeLatest(actions.getTagRequest.toString(), handleGetTagRequest),
  takeLatest(actions.listTagsRequest.toString(), handleListTagsRequest),
  takeLatest(actions.addTagRequest.toString(), handleAddTagRequest),
  takeLatest(actions.updateTagsRequest.toString(), handleUpdateTagsRequest),
  takeLatest(actions.delTagsRequest.toString(), handleDelTagsRequest)
];
