import { handleActions } from "redux-actions";
import * as actions from "../actions";
import { RefreshState } from '../components/RefreshListView';
import _ from "lodash";

const initialState = {
  taskPage:{list:[],count:0,pageNo:1,pageSize:20,totalPage:0},
  taskType:'today', //数据暂时取今天的，today,week,hisory
  refreshState:RefreshState.Idle,
  editTask:{taskName:'',remark:'',userId:'',newRecord:true}
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
      taskPage: action.payload
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
    [actions.onHeaderRefreshSuccess]: (state, action) => 
    {

      if(action.payload.list.length<1||state.taskPage.list.length<1)
      {
        console.log(7777777)
      }
      //这里的问题EmptyData 会清空所有数据
      let newTaskPage=state.taskPage;
      // newTaskPage.list = _.concat(state.taskPage.list,action.payload.list);
      return ({...state,
      taskPage: action.payload,
      refreshState: action.payload.list.length < 1 ? RefreshState.EmptyData : RefreshState.Idle});
    },

    [actions.onHeaderRefreshFailure]: (state, action) => ({
      ...state,refreshState: RefreshState.Failure
    }),

    /*todolist的底部上拉刷新操作等*/
    [actions.onFooterRefreshRequest]: (state, action) => {
      if(action.payload.list.length<1||state.taskPage.list.length<1)
      {
        console.log(7777777222)
      }
      return ({
      ...state,refreshState: RefreshState.HeaderRefreshing 
    })},
    [actions.onFooterRefreshSuccess]: (state, action) => {
        console.log(3333)
        console.log(action.payload)
        console.log(state)
        console.log(4444455)

      if(action.payload.list.length<1)
      {
      console.log(6666666)
      console.log(state)

      }
      if(action.payload.list.length<1||state.taskPage.list.length<1)
      {

        console.log(999991)
        console.log(action.payload)
        console.log(state.taskPage)
        console.log(99999)
      }
      //底部上拉刷新：加上之前的list，合并加载
     console.log('yyyyxxxxxxxxxxxxxxx')
      let newTaskPage=state.taskPage
      // console.log(newTaskPage)
      console.log('------------------------xxxS')
      console.log(action.payload)
      // console.log('------------------------2S')
      // console.log(state.taskPage)
      // console.log('------------------------3S')
      const MAX_SIZE = 5;//最多一百条
      // console.log('------------------------2')
      const thisTotal=action.payload.list.length+state.taskPage.list.length;
      // console.log("KKKKKxxx"+thisTotal)  || action.payload.list.length==0 NoMoreData

      //EmptyData
      const refreshFlag= (thisTotal > MAX_SIZE) ? RefreshState.EmptyData : RefreshState.Idle
      // if(thisTotal<MAX_SIZE)
      // {
      //     newTaskPage.list = _.concat(state.taskPage.list, newTaskPage.list);
      //     return ({
      //     ...state,
      //     taskPage: newTaskPage,
      //     noMoreData:action.payload.totalPage==action.payload.pageNo,
      //     refreshState: refreshFlag
      //   })
      // }
      
      // newTaskPage.list = newTaskPage.list.unshift.apply(newTaskPage.list,state.taskPage.list);

    newTaskPage.list = _.concat(state.taskPage.list,action.payload.list);
    if(newTaskPage.list.length==0)
    {

      console.log(111111111)
      console.log(state.taskPage.list)
      console.log(action.payload.list)
      console.log(22222222)
    }

      // if(thisTotal>MAX_SIZE && action.payload.list.length>0)
      // {
      //   //超过不合并了
      //   newTaskPage.list = _.concat(state.taskPage.list,action.payload.list);
      //     console.log('xxynewTaskPage.list:')
      // console.log(newTaskPage.list)
      //   return ({
      //     ...state,
      //     taskPage: newTaskPage,
      //     refreshState: refreshFlag
      //   })
      // }
      console.log('yyyyxxxxxxxxxxxxxxx')

      console.log(state);
      return ({
              ...state,
              taskPage: newTaskPage,
              refreshState: refreshFlag
            });
    },
    [actions.onFooterRefreshFailure]: (state, action) => ({
      ...state,refreshState: RefreshState.Failure 
    })
  },
  initialState
);
