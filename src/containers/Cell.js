/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan  
 * @flow
 */

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateTasksRequest }from '../actions';

import React, {PureComponent} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, PixelRatio} from 'react-native'
import { IconButton, Colors, withTheme } from 'react-native-paper';
import {CATE} from '../utils/constants'

//https://material.io/tools/icons/?icon=format_list_numbered&style=baseline 图标去这里找
const color = {
    theme: '#06C1AE',
    border: '#e0e0e0',
    background: '#f3f3f3'
}

  
class Cell extends PureComponent {
     state = {
  }
componentDidMount(){
    let {task,itemIndex} = this.props;
    this.setState(task);
  }
//切换分类，数据跑到另一个tab
toggleCate(cate)
{
    if(this.state.cate != cate)
    {
        let params={cate:cate,id:this.state.id,operateType:'cate'}
        this.props.updateTasksRequest(params);
    }
}  
//切换归档，数据跑到另一个tab
toggleArchive(){
        let params={isArchived:(this.state.isArchived+1)%2,id:this.state.id,operateType:'archive'}
        this.props.updateTasksRequest(params);
}

toggleDone()
{
    let params={state:(this.state.state+1)%2,id:this.state.id,operateType:'done'}
    this.props.updateTasksRequest(params);
}
    render() {
        // console.log(this.props);//{task: Object, itemIndex: 7, onPress: function}
        let {task,itemIndex} = this.props
// <View><Text style={[styles.h1, styles.highlight]}>{task.endTime}</Text></View> //时间暂时不加
        // let today=task.cate===CATE.Today?(<IconButton icon="format-list-numbered" size={18} onPress={() => {}} />)
        // <Text style={styles.p} numberOfLines={0} style={{marginTop: 8}}>{task.taskName}</Text>
        let todayIconColor = this.state.cate===CATE.Today?Colors.deepPurple800:Colors.grey900;
        let weekIconColor = this.state.cate===CATE.Week?Colors.deepPurple800:Colors.grey900;
        let archivedColor = this.state.isArchived==1?Colors.deepPurple800:Colors.grey900;
        let doneColor = this.state.status==1?Colors.deepPurple800:Colors.grey900;
        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                 <View style={styles.taskContainer}>
                    <Text style={styles.p}>{itemIndex}. {task.taskName}</Text>
                    <View style={[styles.operateContainer]}>
                         <IconButton icon="format-list-numbered" size={18} color={todayIconColor} onPress={() => this.toggleCate(CATE.Today)} />
                         <IconButton icon="date-range" size={18} color={weekIconColor} onPress={() => this.toggleCate(CATE.Week)} />
                         <IconButton icon="archive" size={18} color={archivedColor} onPress={() => this.toggleArchive()} />
                         <IconButton icon="done" size={18} color={doneColor} onPress={() => this.toggleDone()} />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

    operateContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 0,
    },
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderColor: color.border,
        backgroundColor: 'white',
    },
    finished:{
        textDecorationLine:'line-through'
    },
    // icon: {
    //     width: 80,
    //     height: 80,
    //     borderRadius: 5,
    // },
    taskContainer: {
        flex: 1,
    },
    highlight: {
        color: color.theme
    },
    h1: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#222222',
    },
    p: {
        fontSize: 15,
        color: '#777777',
    },
})


const mapDispatchToProps = dispatch => bindActionCreators({
  updateTasksRequest
},dispatch)

export default connect(null, mapDispatchToProps)(Cell)
