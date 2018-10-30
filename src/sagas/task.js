import { put, call, takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import api from "../api";
import axios from "../axiosConfig";

export function* handleGetTaskRequest(action) {
  try {
    const { data } = yield call(api.getTaskRequest, action.payload);
    yield put(actions.getTaskSuccess(data));
  } catch (error) {
    yield put(actions.getTaskFailure(error));
  }
}
export function* handleListTasksRequest(action) {
  try {
    console.log('xxxxxxY')
    // axios.get('http://www.easin.tech:8000/api/task/page')
    //     .then((response) => {
    //         console.log(response.data);
            
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    const { data } = yield call(api.listTasksRequest, action.payload);
    console.log('yyyyyy->'+data)
    yield put(actions.listTasksSuccess(data));
  } catch (error) {
    console.log(error)//尼玛被吃掉了，操蛋
    yield put(actions.listTasksFailure(error));
  }
}
export function* handleAddTaskRequest(action) {
  try {
    const { data } = yield call(api.addTaskRequest, action.payload);
    yield put(actions.addTaskSuccess(data));
  } catch (error) {
    yield put(actions.addTaskFailure(error));
  }
}
export function* handleUpdateTasksRequest(action) {
  try {
    const { data } = yield call(api.updateTasksRequest, action.payload);
    yield put(actions.updateTasksSuccess(data));
  } catch (error) {
    yield put(actions.updateTasksFailure(error));
  }
}
export function* handleDelTasksRequest(action) {
  try {
    const { data } = yield call(api.delTasksRequest, action.payload);
    yield put(actions.delTasksSuccess(data));
  } catch (error) {
    yield put(actions.delTasksFailure(error));
  }
}

export default [
  takeLatest(actions.getTaskRequest.toString(), handleGetTaskRequest),
  takeLatest(actions.listTasksRequest.toString(), handleListTasksRequest),
  takeLatest(actions.addTaskRequest.toString(), handleAddTaskRequest),
  takeLatest(actions.updateTasksRequest.toString(), handleUpdateTasksRequest),
  takeLatest(actions.delTasksRequest.toString(), handleDelTasksRequest)
];
