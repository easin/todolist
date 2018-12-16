import { handleActions } from "redux-actions";
import * as actions from "../actions";
import { RefreshState } from '../components/RefreshListView';
import _ from "lodash";
import {CATE} from '../utils/constants'

const initialState = {

  // taskPage:{list:[],count:0,pageNo:1,pageSize:20,totalPage:0},//防止报错
  todayTaskPage:{list:[],count:0,pageNo:1,pageSize:20,totalPage:0},
  weekTaskPage:{list:[],count:0,pageNo:1,pageSize:20,totalPage:0},
  archiveTaskPage:{list:[],count:0,pageNo:1,pageSize:20,totalPage:0},
  todayRefreshState:RefreshState.Idle,
  weekRefreshState:RefreshState.Idle,
  archiveRefreshState:RefreshState.Idle,
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
    [actions.onHeaderRefreshRequest]: (state, action) => {
      console.log(action.payload.cate)

      console.log('step_data1:'+JSON.stringify(action.payload))
      switch(action.payload.cate)
      {
        case CATE.Today:return {...state,todayRefreshState: RefreshState.HeaderRefreshing};break;
        case CATE.Week:return {...state,weekRefreshState: RefreshState.HeaderRefreshing};break;
        case CATE.Archive:return {...state,archiveRefreshState: RefreshState.HeaderRefreshing};break;
        default: return {...state};
      }
    },
    [actions.onHeaderRefreshSuccess]: (state, action) => 
    {
//  ok debug,don't delete
      // console.log('step_data3:'+JSON.stringify(action.payload))
      let refreshFlag=action.payload.list.length < 1 ? RefreshState.EmptyData : RefreshState.Idle;
      switch(action.payload.cate)
      {
        case CATE.Today:{return {...state,todayTaskPage: action.payload,todayRefreshState: refreshFlag}}
        case CATE.Week:{return {...state,weekTaskPage: action.payload,weekRefreshState: refreshFlag}}
        case CATE.Archive:{return {...state,archiveTaskPage: action.payload,archiveRefreshState: refreshFlag}}
        default: {return {...state};break}
      }
    },

    [actions.onHeaderRefreshFailure]: (state, action) => ({
      ...state,refreshState: RefreshState.Failure
    }),

    /*todolist的底部上拉刷新操作等*/
    [actions.onFooterRefreshRequest]: (state, action) => {
      switch(action.payload.cate)
      {
        case CATE.Today:{return {...state,todayRefreshState: RefreshState.HeaderRefreshing }}
        case CATE.Week:{return {...state,weekRefreshState: RefreshState.HeaderRefreshing }}
        case CATE.Archive:{return {...state,archiveRefreshState: RefreshState.HeaderRefreshing }}
        default: {return {...state};break}
      }
    },
    [actions.onFooterRefreshSuccess]: (state, action) => {
        
      //底部上拉刷新：加上之前的list，合并加载

      let newTaskPage={}
      const MAX_SIZE = 100;//最多一百条
      switch(action.payload.cate)
      {
        case CATE.Today:{newTaskPage=state.todayTaskPage;break;}
        case CATE.Week:{newTaskPage=state.weekTaskPage;break;}
        case CATE.Archive:{newTaskPage=state.archiveTaskPage;break;}
        default: {newTaskPage=state.todayTaskPage;break;}
      }
      // console.log("newTaskPage:"+JSON.stringify(newTaskPage.list))
      const thisTotal=action.payload.list.length+newTaskPage.list.length;
      let refreshFlag= (thisTotal > MAX_SIZE) ? RefreshState.NoMoreData : RefreshState.Idle
     if(action.payload.list.length==0)
      {
        refreshFlag=RefreshState.NoMoreData ;
      }
      if(refreshFlag === RefreshState.NoMoreData)
      {
        switch(action.payload.cate)
        {
          case CATE.Today:{return {...state,todayRefreshState: refreshFlag}}
          case CATE.Week:{return {...state,weekRefreshState: refreshFlag}}
          case CATE.Archive:{return {...state,archiveRefreshState: refreshFlag}}
          default: {return {...state};break}
        }
      }

    //说明是idle
    newTaskPage.list = _.concat(newTaskPage.list,action.payload.list);
    console.log('cate-----'+action.payload.cate)
    switch(action.payload.cate)
    {
      case CATE.Today:{return {...state,todayTaskPage: newTaskPage,todayRefreshState: refreshFlag};break;}
      case CATE.Week:{return {...state,weekTaskPage: newTaskPage,weekRefreshState: refreshFlag};break;}
      case CATE.Archive:{return {...state,archiveTaskPage: newTaskPage,archiveRefreshState: refreshFlag};break;}
      default: {return {...state};break;}
    }
    // return {...state};
    },
    [actions.onFooterRefreshFailure]: (state, action) => ({
      ...state,refreshState: RefreshState.Failure 
    })
  },
  initialState
);
