import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import * as actionCreators from '../actions/task';

import { listTasksRequest } from '../actions/task';
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

class Today extends React.Component {
  componentDidMount() {
        this.props.listTasksRequest()
    }
  state = {
    active: 'first',
  };

 render() {
    // const { coins } = this.props.coins

        return (

            <View >
     	<Text>xxxxx</Text>
            </View>
        
        )
    }

}


//关联属性到组件，关联事件到组件
const mapStateToProps = (state, ownProps) => {
  return {
    coins: state.result
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  listTasksRequest
},dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Today)