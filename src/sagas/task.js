import { put,fork,call,takeEvery, takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import qs from 'qs'
import api from "../api";
import axios from "../axiosConfig";
import  {DEFAULT_PAGE as defaultPage}  from '../utils/constants'
import {CATE,taskOrderBy,memoOrderBy} from '../utils/constants'

export function* handleGetTaskRequest(action) {
  try {
    const { data } = yield call(api.getTaskRequest, action.payload);
    yield put(actions.getTaskSuccess(data));
  } catch (error) {
    yield put(actions.getTaskFailure(error));
  }
}
export function* handleListTasksRequest(action) {
  action.payload.orderBy=taskOrderBy;
  try {
    if(action.payload.totalPage > action.payload.pageNo)
    {
      action.payload.pageNo=action.payload.pageNo+1;
      const { data } = yield call(api.listTasksRequest, action.payload);
      yield put(actions.listTasksSuccess(data));
    }
    else 
    {
      action.payload.list=[]
      yield put(actions.listTasksSuccess(action.payload));
    }
    
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
    console.log('payload:'+JSON.stringify(action.payload)+'----'+qs.stringify(action.payload))
    let { data } = yield call(api.updateTasksRequest, action.payload);
    data.operateType=action.payload.operateType;
    data.catePage=action.payload.catePage;
    // console.log('udpatedata'+JSON.stringify(data));
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


export function* handleOnHeaderRefreshRequest(action) {
  try {
    action.payload.orderBy=taskOrderBy;
    let { data } = yield call(api.listTasksRequest, action.payload);
    console.log('step_data2:'+JSON.stringify(action.payload))
    data.cate=action.payload.cate;
    yield put(actions.onHeaderRefreshSuccess(data));
  } catch (error) {
    console.log(error)
    yield put(actions.onHeaderRefreshFailure(error));
  }
}
export function* handleOnFooterRefreshRequest(action) {
  action.payload.orderBy=taskOrderBy;
  try {
    console.log('moremore:'+JSON.stringify(action.payload))
    if(action.payload.totalPage > action.payload.pageNo)
    {
      action.payload.pageNo=action.payload.pageNo+1;

      // const {pageNo,pageSize}=action.payload;
      let { data } = yield call(api.listTasksRequest, action.payload);
      data.cate=action.payload.cate;
      // const { data } = yield call(api.listTasksRequest, action.payload);
      yield put(actions.onFooterRefreshSuccess(data));
    }
    else 
    {
      // action.payload.list=[]

      newTaskPage={}
      newTaskPage.list=[];
      newTaskPage.pageNo=action.payload.pageNo;
      newTaskPage.pageSize=action.payload.pageSize;
      newTaskPage.cate=action.payload.cate;
      yield put(actions.onFooterRefreshSuccess(newTaskPage));
    }
  } catch (error) {
    console.log(879698797)
    console.log(error)
    yield put(actions.onFooterRefreshFailure(error));
  }
}


export function* handleToggleShowFinishedRequest(action) {
  try {
    
    // console.log('xxx')
    // console.log(action.payload)
    // console.log('xxx')
    //1.todayTodolist
    let todayParams={cate:CATE.Today,isFinished:action.payload,pageNo:1,pageSize:defaultPage.pageSize,orderBy:taskOrderBy}
    // yield fork
    //2.weekTodolist
    let weekParams={cate:CATE.Week,isFinished:action.payload,pageNo:1,pageSize:defaultPage.pageSize,orderBy:taskOrderBy}
    //3.archiveTodolist
    let archiveParams={cate:-1,isFinished:action.payload,pageNo:1,pageSize:defaultPage.pageSize,orderBy:taskOrderBy}
    yield put(actions.listTasksRequest(archiveParams));

    yield put(actions.listTasksRequest(todayParams));

    yield put(actions.listTasksRequest(weekParams));
  } catch (error) {
    console.log(error)
    // yield put(actions.onHeaderRefreshFailure(error));
  }
}

export default [
  takeLatest(actions.getTaskRequest.toString(), handleGetTaskRequest),
  // takeLatest(actions.listTasksRequest.toString(), handleListTasksRequest),
  takeEvery(actions.listTasksRequest.toString(), handleOnHeaderRefreshRequest),
  takeLatest(actions.onHeaderRefreshRequest.toString(), handleOnHeaderRefreshRequest),//头部下拉刷新
  takeLatest(actions.onFooterRefreshRequest.toString(), handleOnFooterRefreshRequest),//尾部上拉刷新
  takeLatest(actions.toggleShowFinishedRequest.toString(), handleToggleShowFinishedRequest),//尾部上拉刷新
  takeLatest(actions.addTaskRequest.toString(), handleAddTaskRequest),
  takeLatest(actions.updateTasksRequest.toString(), handleUpdateTasksRequest),
  takeLatest(actions.delTasksRequest.toString(), handleDelTasksRequest)
];
