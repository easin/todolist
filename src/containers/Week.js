import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
}from 'react-native';
import TodoList  from './TodoList';
class Week extends React.Component {
  componentDidMount() {
        // this.props.listTasksRequest()
    }
  state = {
    // active: 'first',
  };

 render() {
        return (
          <TodoList category={'week'}/>
          // <View><Text>yyyyyyyyy</Text></View>
        )
    }

}

export default connect()(Week)