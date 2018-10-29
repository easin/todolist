import { put, call, takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import api from "../api";

export function* handleGetUserRequest(action) {
  try {
    const { data } = yield call(api.getUserRequest, action.payload);
    yield put(actions.getUserSuccess(data));
  } catch (error) {
    yield put(actions.getUserFailure(error));
  }
}
export function* handleListUsersRequest(action) {
  try {
    const { data } = yield call(api.listUsersRequest, action.payload);
    yield put(actions.listUsersSuccess(data));
  } catch (error) {
    yield put(actions.listUsersFailure(error));
  }
}
export function* handleAddUserRequest(action) {
  try {
    const { data } = yield call(api.addUserRequest, action.payload);
    yield put(actions.addUserSuccess(data));
  } catch (error) {
    yield put(actions.addUserFailure(error));
  }
}
export function* handleUpdateUsersRequest(action) {
  try {
    const { data } = yield call(api.updateUsersRequest, action.payload);
    yield put(actions.updateUsersSuccess(data));
  } catch (error) {
    yield put(actions.updateUsersFailure(error));
  }
}
export function* handleDelUsersRequest(action) {
  try {
    const { data } = yield call(api.delUsersRequest, action.payload);
    yield put(actions.delUsersSuccess(data));
  } catch (error) {
    yield put(actions.delUsersFailure(error));
  }
}

export default [
  takeLatest(actions.getUserRequest.toString(), handleGetUserRequest),
  takeLatest(actions.listUsersRequest.toString(), handleListUsersRequest),
  takeLatest(actions.addUserRequest.toString(), handleAddUserRequest),
  takeLatest(actions.updateUsersRequest.toString(), handleUpdateUsersRequest),
  takeLatest(actions.delUsersRequest.toString(), handleDelUsersRequest)
];
