import { handleActions } from "redux-actions";
import * as actions from "../actions";
import { RefreshState } from '../components/RefreshListView';

const initialState = {
  taskPage:{list:[],count:0,pageNo:1,pageSize:20,totalPage:0},
  noMoreData:false,
  taskType:'today', //数据暂时取今天的，today,week,hisory
  refreshState:RefreshState.Idle
};

/*
reducers，才有资格修正数据，调整数据，准备数据给ui
*/
export default handleActions(
  {
    [actions.getTaskRequest]: (state, action) => ({
      ...state
    }),
    [actions.listTasksRequest]: (state, action) => ({
      ...state
    }),
    [actions.addTaskRequest]: (state, action) => ({
      ...state
    }),
    [actions.updateTasksRequest]: (state, action) => ({
      ...state
    }),
    [actions.delTasksRequest]: (state, action) => ({
      ...state
    }),
    [actions.getTaskSuccess]: (state, action) => ({
      ...state
    }),
    [actions.getTaskFailure]: (state, action) => ({
      ...state
    }),
    [actions.listTasksSuccess]: (state, action) => ({
      ...state,
      taskPage: action.payload,
      noMoreData:action.payload.totalPage==action.payload.pageNo
    }),
    [actions.listTasksFailure]: (state, action) => {
      console.log('出错啦'+this.state+action.payload)
      return
      ({
      ...state
    })},
    [actions.addTaskSuccess]: (state, action) => ({
      ...state
    }),
    [actions.addTaskFailure]: (state, action) => ({
      ...state
    }),
    [actions.updateTasksSuccess]: (state, action) => ({
      ...state
    }),
    [actions.updateTasksFailure]: (state, action) => ({
      ...state
    }),
    [actions.delTasksSuccess]: (state, action) => ({
      ...state
    }),
    [actions.delTasksFailure]: (state, action) => ({
      ...state
    }),
    /*todolist的头部下拉刷新操作等*/
    [actions.onHeaderRefreshRequest]: (state, action) => ({
      ...state,refreshState: RefreshState.HeaderRefreshing 
    }),
    [actions.onHeaderRefreshSuccess]: (state, action) => ({
      ...state,
      taskPage: action.payload,
      noMoreData:action.payload.totalPage==action.payload.pageNo,
      refreshState: action.payload.list.length < 1 ? RefreshState.EmptyData : RefreshState.Idle
    }),
    [actions.onHeaderRefreshFailure]: (state, action) => ({
      ...state,refreshState: RefreshState.Failure
    }),

    /*todolist的底部上拉刷新操作等*/
    [actions.onFooterRefreshRequest]: (state, action) => ({
      ...state,refreshState: RefreshState.HeaderRefreshing 
    }),
    [actions.onFooterRefreshSuccess]: (state, action) => {
      //底部上拉刷新：加上之前的list，合并加载
      var newTaskPage = action.payload;
      const {list} = state.taskPage.list;
      const MAX_SIZE = 30;//最多一百条

// b.unshift.apply( b, q );

      newTaskPage.list = newTaskPage.list.unshift.apply(newTaskPage.list,this.state.taskPage.list);
      return ({
      ...state,
      taskPage: newTaskPage,
      noMoreData:action.payload.totalPage==action.payload.pageNo,
      refreshState: action.payload.list.length < 1 || newTaskPage.list.length>MAX_SIZE? RefreshState.EmptyData : RefreshState.Idle
    });
      },
    [actions.onFooterRefreshFailure]: (state, action) => ({
      ...state,refreshState: RefreshState.Failure 
    }),
  },
  initialState
);
