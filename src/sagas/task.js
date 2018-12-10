import { put, call, takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import api from "../api";
import axios from "../axiosConfig";
import  {DEFAULT_PAGE as defaultPage}  from '../utils/constants'

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
    // console.log('xxxxxxY')
    // axios.get('http://www.easin.tech:8000/api/task/page')
    //     .then((response) => {
    //         console.log(response.data);
            
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })

    if(action.payload.totalPage > action.payload.pageNo)
    {
      action.payload.pageNo=action.payload.pageNo+1;
      const {pageNo,pageSize}=action.payload;
      const { data } = yield call(api.listTasksRequest, {pageNo:pageNo,pageSize:pageSize});
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


export function* handleOnHeaderRefreshRequest(action) {
  try {
    
    console.log(action.payload)
    const { data } = yield call(api.listTasksRequest, action.payload);
    if(data.list.length==0)
    {
      console.log('8888888888')
    }
    yield put(actions.onHeaderRefreshSuccess(data));
  } catch (error) {
    console.log('888888888811')
    console.log(error)
    yield put(actions.onHeaderRefreshFailure(error));
  }
}
export function* handleOnFooterRefreshRequest(action) {
  try {
    // if(action.payload)
    // if(action.payload.totalPage > action.payload.pageNo)
    // {
    //   if(action.payload.pageNo==4)
    //   {
    //     console.log(1111111111111111)
    //   }
    //   action.payload.pageNo=action.payload.pageNo+1;
    //   const { data } = yield call(api.listTasksRequest, action.payload);
    //   yield put(actions.onFooterRefreshSuccess(data));
    // }
    // else{
    //   action.payload.list=[];
    //   const nodata=action.payload;
    //   yield put(actions.onFooterRefreshSuccess(nodata));
    // }

    if(action.payload.totalPage > action.payload.pageNo)
    {
      action.payload.pageNo=action.payload.pageNo+1;

      const {pageNo,pageSize}=action.payload;
      const { data } = yield call(api.listTasksRequest, {pageNo:pageNo,pageSize:pageSize});
      
      // const { data } = yield call(api.listTasksRequest, action.payload);
      yield put(actions.onFooterRefreshSuccess(data));
    }
    else 
    {
      action.payload.list=[]
      yield put(actions.onFooterRefreshSuccess(action.payload));
    }




     // action.payload.list=[];
     //  const nodata=action.payload;
     //  yield put(actions.onFooterRefreshSuccess(nodata));
    // console.log('yyyyyy->'+data)
  } catch (error) {
    console.log(879698797)
    console.log(error)
    yield put(actions.onFooterRefreshFailure(error));
  }
}

export default [
  takeLatest(actions.getTaskRequest.toString(), handleGetTaskRequest),
  takeLatest(actions.listTasksRequest.toString(), handleListTasksRequest),
  takeLatest(actions.onHeaderRefreshRequest.toString(), handleOnHeaderRefreshRequest),//头部下拉刷新
  takeLatest(actions.onFooterRefreshRequest.toString(), handleOnFooterRefreshRequest),//尾部上拉刷新
  takeLatest(actions.addTaskRequest.toString(), handleAddTaskRequest),
  takeLatest(actions.updateTasksRequest.toString(), handleUpdateTasksRequest),
  takeLatest(actions.delTasksRequest.toString(), handleDelTasksRequest)
];
