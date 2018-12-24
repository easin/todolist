//
//  Created by Liu Jinyong on 17/4/5.
//  Copyright © 2016年 Liu Jinyong. All rights reserved.
//
//  @flow
//  Github:
//  https://github.com/huanxsd/react-native-refresh-list-view
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { onHeaderRefreshRequest, onFooterRefreshRequest,updateTasksSuccess }from '../actions';

import React, { Component } from 'react'
import { View, StyleSheet, Text, Platform } from 'react-native'
import RefreshListView, { RefreshState } from '../components/RefreshListView'
import Cell  from '../containers/Cell'
import {CATE} from '../utils/constants'
import { FAB } from 'react-native-paper';
import {withNavigation} from 'react-navigation' 


class TodayTodoList extends Component {

  state = {
    cate: CATE.Today,
  }
  componentDidMount() {
    let params={pageNo:1,pageSize:10,cate:this.state.cate}
    let {isFinished}=this.props;
    // if(isFinished == 2)//留给后台处理
    this.props.onHeaderRefreshRequest({...params,isFinished:isFinished,})
  }

  keyExtractor = (item: any, index: number) => {
    return index.toString()
  }
  addNewTask ()
  {
    let task={newRecord:true}
    this.props.navigation.navigate('TaskDetail', { ...task,catePage:CATE.Today });
  }
  editTask = (task) => {
        this.props.navigation.navigate('TaskDetail', { ...task,catePage:CATE.Today });
      } 
  renderCell = (item: Object,itemIndex:number) => {
    // console.log('Cell:'+JSON.stringify(item)+'----'+itemIndex)
    return <Cell task={item} itemIndex={itemIndex+1} onPress={() => this.editTask(item)} />
  }
  render() {
    // taskPage.list
    const { todayTaskPage, todayRefreshState,onHeaderRefreshRequest,onFooterRefreshRequest } = this.props

  // console.log('todaystate---:'+JSON.stringify(todayTaskPage))
    // console.log('render scene:'+todayTaskPage.pageNo);
    const {list}=todayTaskPage;

    // this.props
    let check;
    if(0)
    {
      check=(<FAB small icon="check" style={styles.fab1} onPress={() => {}} />);
    }
    else
    {
      check=(<FAB small icon="playlist-add-check" style={styles.fab1} onPress={() => {}} />);
    }
    return (
      <View style={styles.container} >
        <RefreshListView
          style={styles.testStyle}
          data={list}
          keyExtractor={this.keyExtractor}
          renderItem={({item, index}) => this.renderCell(item, index)}
          refreshState={todayRefreshState}
          onHeaderRefresh={onHeaderRefreshRequest}
          onFooterRefresh={()=>onFooterRefreshRequest(todayTaskPage)}

          // 可选
          footerRefreshingText='玩命加载中 >.<'
          footerFailureText='我擦嘞，居然失败了 =.=!'
          footerNoMoreDataText='-我是有底线的！-'
          footerEmptyDataText='-好像什么东西都没有-'
        />
        {check}
        <FAB small icon="add" onPress={() => this.addNewTask()} style={styles.fab} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS == 'ios' ? 20 : 0,
    
  },
  title: {
    fontSize: 18,
    height: 84,
    textAlign: 'center',
    // backgroundColor:'blue',
  },
  testStyle:{
    // backgroundColor:'red',
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 28,
  },
  fab1: {
    position: 'absolute',
    right: 16,
    top: 28,
  },
})
const mapStateToProps = (state, ownProps) => {
  return {
    todayTaskPage:state.task.todayTaskPage, 
    isFinished:state.task.isFinished,
    todayRefreshState:state.task.todayRefreshState,
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  onHeaderRefreshRequest,onFooterRefreshRequest,updateTasksSuccess
},dispatch)
export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(TodayTodoList))