import { handleActions } from "redux-actions";
import * as actions from "../actions";
import { RefreshState } from '../components/RefreshListView';
import _ from "lodash";

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
      var newTaskPage = state.taskPage;
      // console.log('------------------------xxxS')
      // console.log(action.payload)
      // console.log('------------------------2S')
      // console.log(state.taskPage)
      // console.log('------------------------3S')
      const MAX_SIZE = 60;//最多一百条
      // console.log('------------------------2')
      const thisTotal=action.payload.list.length+state.taskPage.list.length;
      // console.log("KKKKKxxx"+thisTotal)
      const refreshFlag=thisTotal>MAX_SIZE? RefreshState.NoMoreData : RefreshState.Idle
      // if(thisTotal<MAX_SIZE)
      // {
      //     newTaskPage.list = _.concat(state.taskPage, newTaskPage.list);
      //     return ({
      //     ...state,
      //     taskPage: newTaskPage,
      //     noMoreData:action.payload.totalPage==action.payload.pageNo,
      //     refreshState: refreshFlag
      //   })
      // }
      
      // newTaskPage.list = newTaskPage.list.unshift.apply(newTaskPage.list,state.taskPage.list);
      // console.log('xxynewTaskPage.list:')
      // console.log(newTaskPage)
      console.log('xxxxxx------------------------5')
      console.log('RefreshState'+refreshFlag)
      // return ({
      //           ...state,
      //           noMoreData:action.payload.totalPage==action.payload.pageNo,
      //           refreshState: refreshFlag
      //         });

      if(thisTotal>MAX_SIZE)
      {
        //超过不合并了
        newTaskPage.list = _.concat(state.taskPage.list, newTaskPage.list);
      }
      return ({
          ...state,
          taskPage: newTaskPage,
          noMoreData:action.payload.totalPage==action.payload.pageNo,
          refreshState: refreshFlag
        })
      },
    [actions.onFooterRefreshFailure]: (state, action) => ({
      ...state,refreshState: RefreshState.Failure 
    }),
  },
  initialState
);
