//
//  Created by Liu Jinyong on 17/4/5.
//  Copyright © 2016年 Liu Jinyong. All rights reserved.
//
//  @flow
//  Github:
//  https://github.com/huanxsd/react-native-refresh-list-view
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { onHeaderRefreshRequest, onFooterRefreshRequest, }from '../actions';

import React, { Component } from 'react'
import { View, StyleSheet, Text, Platform } from 'react-native'
import RefreshListView, { RefreshState } from '../components/RefreshListView'
import Cell  from '../containers/Cell'
import testData from '../testData/data'
import {withNavigation} from 'react-navigation' 


class TodoList extends Component {

  componentDidMount() {
    let page={pageNo:1,pageSize:10}
    this.props.onHeaderRefreshRequest(page)
  }

  keyExtractor = (item: any, index: number) => {
    return index.toString()
  }

  editTask = (task) => {
    console.log(222222222222)
        this.props.navigation.navigate('TaskDetail', { ...task });
      };
  renderCell = (tasks: Object) => {
    return <Cell task={tasks.item}  onPress={() => this.editTask(tasks.item)} />
  }
  layout=(e)=>{  console.log(e)  }
  render() {
    // taskPage.list
    const { taskPage, noMoreData, refreshState,taskType,onHeaderRefreshRequest,onFooterRefreshRequest } = this.props
    // console.log(this.props);
    console.log('render scene:'+taskPage.pageNo);
    const {list}=taskPage;
    return (
      <View style={styles.container} onLayout={({nativeEvent:e})=>this.layout(e)}>
        <RefreshListView
          style={styles.testStyle}
          data={list}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderCell}
          refreshState={refreshState}
          onHeaderRefresh={onHeaderRefreshRequest}
          onFooterRefresh={()=>onFooterRefreshRequest(taskPage)}

          // 可选
          footerRefreshingText='玩命加载中 >.<'
          footerFailureText='我擦嘞，居然失败了 =.=!'
          footerNoMoreDataText='-我是有底线的！-'
          footerEmptyDataText='-好像什么东西都没有-'
        />
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
    backgroundColor:'red',
  }
})
const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps)
  console.log(state)
  return {
    taskPage:state.task.taskPage, 
    refreshState:state.task.refreshState,
    taskType: state.task.taskType
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  onHeaderRefreshRequest,onFooterRefreshRequest
},dispatch)
// export const TodoListContainer =connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(TodoList)) //withNavigation才会有 navitgaton属性
