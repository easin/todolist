import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
}from 'react-native';
import TodoList2  from './TodoList';
// import TestListPage2  from './TestListPage2'
// <TodoList /><TodoListContainer /> TestListPage2 
class Today extends React.Component {
  componentDidMount() {
        // this.props.listTasksRequest()
    }
  state = {
    active: 'first',
  };

 render() {
        // const Comp = () =>(<TodoList />);
        // return (Comp);
        return (
          <TodoList2/>
         // <View><Text>xxxx</Text></View>
         // <View><</View>
         
        )
    }

}

export default connect()(Today)