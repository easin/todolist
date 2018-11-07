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

class TodoList extends Component {
  // state: {
  //   dataList: Array<any>,
  //   refreshState: number,
  // }

  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     dataList: [],
  //     refreshState: RefreshState.Idle,
  //   }
  // }

  componentDidMount() {
    console.log("---------属性为:")
    console.log(this.props)
    this.props.onHeaderRefreshRequest()
  }

  // onHeaderRefresh = () => {
  //   this.setState({ refreshState: RefreshState.HeaderRefreshing })

  //   // 模拟网络请求
  //   setTimeout(() => {
  //     // 模拟网络加载失败的情况
  //     if (Math.random() < 0.3) {
  //       this.setState({ refreshState: RefreshState.Failure })
  //       return
  //     }

  //     //获取测试数据
  //     let dataList = this.getTestList(true)
  //     console.log('------>数据总数：'+dataList.length)
  //     this.setState({
  //       dataList: dataList,
  //       refreshState: dataList.length < 1 ? RefreshState.EmptyData : RefreshState.Idle,
  //     })
  //   }, 2000)
  // }

  // onFooterRefresh = () => {
  //   this.setState({ refreshState: RefreshState.FooterRefreshing })

  //   // 模拟网络请求
  //   setTimeout(() => {
  //     // 模拟网络加载失败的情况
  //     if (Math.random() < 0.2) {
  //       this.setState({ refreshState: RefreshState.Failure })
  //       return
  //     }

  //     //获取测试数据
  //     let dataList = this.getTestList(false)

  //     this.setState({
  //       dataList: dataList,
  //       refreshState: dataList.length > 50 ? RefreshState.NoMoreData : RefreshState.Idle,
  //     })
  //   }, 2000)
  // }

  // 获取测试数据
  // getTestList(isReload: boolean): Array<Object> {
  //   let newList = testData.map((data) => {
  //     return {
  //       imageUrl: data.squareimgurl,
  //       title: data.mname,
  //       subtitle: `[${data.range}]${data.title}`,
  //       price: data.price,
  //     }
  //   })
  //   return isReload ? (Math.random() < 0.2 ? [] : newList) : [...this.state.dataList, ...newList]
  // }

  keyExtractor = (item: any, index: number) => {
    return index
  }

  renderCell = (tasks: Object) => {
    return <Cell task={tasks.item} />
  }

  render() {
    // taskPage.list
    const { taskPage, noMoreData, refreshState,taskType,onHeaderRefreshRequest,onFooterRefreshRequest } = this.props
    console.log(this.props);
    console.log('render scene');

    console.log(taskPage)
    const {list}=taskPage;
    return (
      <View style={styles.container}>
        <RefreshListView
          data={list}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderCell}
          refreshState={refreshState}
          onHeaderRefresh={onHeaderRefreshRequest}
          onFooterRefresh={onFooterRefreshRequest}

          // 可选
          footerRefreshingText='玩命加载中 >.<'
          footerFailureText='我擦嘞，居然失败了 =.=!'
          footerNoMoreDataText='-我是有底线的-'
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
    textAlign: 'center'
  }
})

// function mapStateToProps(state) {
//   return {
//     state,
//   };
// }

// const mapDispatchToProps =function mapDispatchToProps(dispatch) {
//   return bindActionCreators(actionCreators, dispatch);
// }
const mapStateToProps = (state, ownProps) => {
  console.log('ownProps is:')
  // console.log(ownProps)
  console.log('state is:')
  // console.log(state)
  return {
    taskPage:state.task.taskPage, 
    noMoreData:state.task.noMoreData, 
    refreshState:state.task.refreshState,
    taskType: state.task.taskType
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  onHeaderRefreshRequest,onFooterRefreshRequest
},dispatch)
// export const TodoListContainer =connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
