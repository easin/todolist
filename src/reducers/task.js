import { handleActions } from "redux-actions";
import * as actions from "../actions";
import { RefreshState } from '../components/RefreshListView';
import _ from "lodash";
import {CATE} from '../utils/constants'
import {deepCopy} from '../utils/utils'

const initialState = {

  // taskPage:{list:[],count:0,pageNo:1,pageSize:20,totalPage:0},//防止报错
  todayTaskPage:{list:[],count:0,pageNo:1,pageSize:20,totalPage:0},
  weekTaskPage:{list:[],count:0,pageNo:1,pageSize:20,totalPage:0},
  archiveTaskPage:{list:[],count:0,pageNo:1,pageSize:20,totalPage:0},
  todayRefreshState:RefreshState.Idle,
  weekRefreshState:RefreshState.Idle,
  archiveRefreshState:RefreshState.Idle,
  isFinished:2,//0未完成，1已完成，2所有
  isArchived:1,//0未归档1，归档，2所有
};

/*
reducers，才有资格修正数据，调整数据，准备数据给ui
*/
export default handleActions(
  {
    [actions.toggleShowFinishedRequest]: (state, action) => ({
      ...state,isFinished:action.payload
    }),
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
    [actions.updateTasksSuccess]: (state, action) => {
      console.log('updateTasksSuccess action:'+JSON.stringify(action.payload));
      switch(action.payload.operateType)
      {

        case 'edit':{
          console.log('t1');
          let todayList=state.todayTaskPage.list
          let weekList=state.weekTaskPage.list;
          let archiveList=state.archiveTaskPage.list;

          let todayIdx=_.findIndex(todayList, { id:action.payload.object.id });
          let weekIdx=_.findIndex(weekList, { id:action.payload.object.id });
          let archiveIdx=_.findIndex(archiveList, { id:action.payload.object.id });

          if(todayIdx>0)
          {
            todayList[todayIdx]=action.payload.object;
            let {todayTaskPage}=state;
            todayTaskPage.list=todayList;
            console.log('ttt:'+JSON.stringify(todayTaskPage))
            return {...state,todayTaskPage:JSON.parse(JSON.stringify(todayTaskPage))};
          }
          else if(weekIdx>0)
          {
            weekList[weekIdx]=action.payload.object;
            let {weekTaskPage}=state;
            weekTaskPage.list=weekList;
            return {...state,weekTaskPage:JSON.parse(JSON.stringify(weekTaskPage))};
          }
          else
          {
            archiveList[archiveIdx]=action.payload.object;
            let {archiveTaskPage}=state;
            archiveTaskPage.list=archiveList;
            return {...state,archiveTaskPage:JSON.parse(JSON.stringify(archiveTaskPage))};
          }


        }
        case 'cate':{
          let todayList=state.todayTaskPage.list;
          let weekList=state.weekTaskPage.list;
          if(action.payload.object.cate == CATE.Today) //0->1  0
          {
            todayList=_.concat(todayList, action.payload.object);
            _.remove(weekList, function(t) { return t.id == action.payload.object.id; });
          }
          else
          {
            weekList=_.concat(weekList, action.payload.object);
            _.remove(todayList, function(t) { return t.id == action.payload.object.id; });
            //var todayList2=_.remove(todayList, function(t) { return t.id == action.payload.object.id; });
            //console.log('updateTasksSuccess todayList:'+JSON.stringify(todayList));
            //todayList2 是删除的元素

          }
          let {todayTaskPage,weekTaskPage}=state;
          todayTaskPage.list=todayList;
          weekTaskPage.list=weekList;
          return {...state,todayTaskPage:JSON.parse(JSON.stringify(todayTaskPage)),weekTaskPage:JSON.parse(JSON.stringify(weekTaskPage))};}
        case 'archive':{
          // console.log(11111)
            switch(action.payload.catePage)
            {
              case CATE.Today :{
                let todayList=state.todayTaskPage.list;
                let archiveList=state.archiveTaskPage.list;
                // console.log('--->'+todayList.length)//虽然是undefined但是还是有值的
                // console.log(todayList)
                if(action.payload.object.isArchived==0)//未归档
                {
                   _.remove(todayList, function(t) { return t.id == action.payload.object.id; });
                  todayList=_.concat([action.payload.object],todayList);
                  _.remove(archiveList, function(t) { return t.id == action.payload.object.id; });
                }
                else
                {
                  archiveList=_.concat([action.payload.object],archiveList);
                  _.remove(todayList, function(t) { return t.id == action.payload.object.id; });
                }
                let {todayTaskPage,archiveTaskPage}=state;
                todayTaskPage.list=todayList;
                archiveTaskPage.list=archiveList;
                return {...state,todayTaskPage:JSON.parse(JSON.stringify(todayTaskPage)),archiveTaskPage:JSON.parse(JSON.stringify(archiveTaskPage))};
              }
              case CATE.Week :{
                let weekList=state.weekTaskPage.list;
                let archiveList=state.archiveTaskPage.list;
                if(action.payload.object.isArchived==0)//未归档
                {
                  weekList=_.concat([action.payload.object],weekList);
                  _.remove(archiveList, function(t) { return t.id == action.payload.object.id; });
                }
                else
                {
                  archiveList=_.concat([action.payload.object],archiveList);
                  _.remove(weekList, function(t) { return t.id == action.payload.object.id; });
                }
                let {weekTaskPage,archiveTaskPage}=state;
                weekTaskPage.list=weekList;
                archiveTaskPage.list=archiveList;
                return {...state,weekTaskPage:JSON.parse(JSON.stringify(weekTaskPage)),archiveTaskPage:JSON.parse(JSON.stringify(archiveTaskPage))};
                
              }
              default :{
                let archiveList=state.archiveTaskPage.list;

                if(action.payload.object.isArchived==0)//未归档
                {
                  _.remove(archiveList, function(t) { return t.id == action.payload.object.id; });
                }
                else
                {
                  archiveList=_.concat([action.payload.object],archiveList);
                }
                _.remove(weekList, function(t) { return t.id == action.payload.object.id; });
                let {archiveTaskPage}=state;
                archiveTaskPage.list=archiveList;
                return {...state,archiveTaskPage:JSON.parse(JSON.stringify(archiveTaskPage))};
              }


          }
        }
        case 'done' :{
            switch(action.payload.catePage)
            {
              case CATE.Today :{
                let todayList=state.todayTaskPage.list;
                _.each(todayList, function(a, idx){
                  if(a.id==action.payload.object.id){
                    todayList[idx] = action.payload.object;
                    return false;//不要继续
                  }
                });
                let {todayTaskPage}=state;
                todayTaskPage.list=todayList;
                return {...state,todayTaskPage:JSON.parse(JSON.stringify(todayTaskPage))};
              }
              case CATE.Week :{
                let weekList=state.weekTaskPage.list;
                _.each(weekList, function(a, idx){
                  if(a.id==action.payload.object.id){
                    weekList[idx] = action.payload.object;
                    return false;//不要继续
                  }
                });
                let {weekTaskPage}=state;
                weekTaskPage.list=todayList;
                return {...state,weekTaskPage:JSON.parse(JSON.stringify(weekTaskPage))};
              }
              default :{
                let archiveList=state.archiveTaskPage.list;
                _.each(archiveList, function(a, idx){
                  if(a.id==action.payload.object.id){
                    archiveList[idx] = action.payload.object;
                    return false;//不要继续
                  }
                });
                let {archiveTaskPage}=state;
                archiveTaskPage.list=archiveList;
                return {...state,archiveTaskPage:JSON.parse(JSON.stringify(archiveTaskPage))};
              }
            }
          ;break;}



        default : return {...state}
      }
    },
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
    newTaskPage.pageNo=action.payload.pageNo;
    newTaskPage.totalPage=action.payload.totalPage;
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
