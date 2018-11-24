import React, { Component } from 'react';

import {
  StyleSheet,
  View,Text
} from 'react-native';

class TaskDetail extends Component {
  render() {
  	console.log(this.props.navigation.state.params)
  	const task = this.props.navigation.state.params;
    return (
      <View><Text>11111111111111111{task.taskName}</Text></View>
    );
  }
}

const styles = StyleSheet.create({

});


export default TaskDetail;