import React, { Component } from 'react';
import { connect } from 'react-redux';
import {CATE} from '../utils/constants'
import {
    View,
    Text,
}from 'react-native';
import TodoList  from './TodoList';
// import TestListPage2  from './TestListPage2'
// <TodoList /><TodoListContainer /> TestListPage2 
class Today extends React.Component {
  componentDidMount() {
    console.log('0000000['+CATE.Today+']')
        // this.props.listTasksRequest()
    }
  state = {
    active: 'first',
  };

 render() {
        // const Comp = () =>(<TodoList />);
        // return (Comp);
        return (
          <TodoList category={CATE.Today}/>
         // <View><Text>xxxx</Text></View>
         // <View><</View>
         
        )
    }

}

export default connect()(Today)