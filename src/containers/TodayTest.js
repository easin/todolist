import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import * as actionCreators from '../actions/task';

import { listTasksRequest } from '../actions';
// import { listTasksRequest } from '../actions'
import {
    View,
    Image,
    Dimensions,
    ScrollView,
    Text,
    StyleSheet,
    TouchableOpacity,
    Button,
    FlatList,
    ActivityIndicator,
    RefreshControl,
}from 'react-native';

class TodayTest extends React.Component {
  componentDidMount() {
      const { dispatch } = this.props
        // dispatch(this.props.listTasksRequest())
        this.props.listTasksRequest()
        console.log('---->')
        console.log(this.props)
    }

 render() {
    const { taskPage } = this.props;
    console.log(this.props);
        return (

            <View >
     	        <Text>xxxxx{taskPage}</Text>
            </View>
        
        )
    }

}


//关联属性到组件，关联事件到组件
const mapStateToProps = (state, ownProps) => {
  return {
    taskPage: state.taskPage
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  listTasksRequest
},dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodayTest)