import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { List,Chip,Button,TextInput, HelperText, withTheme } from 'react-native-paper';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateTasksRequest }from '../actions';
import type { Theme } from 'react-native-paper/types';

class TaskDetail extends Component {


	state =  {
	}

	submitTask()
	{
		let params=this.state;
		// params.operateType
		this.props.updateTasksRequest({...params,operateType:'edit'}); //新增或者更新一条
	}
	componentDidMount() {
		//初始化参数到state里
		let task = this.props.navigation.state.params;
		let priorityStr="";
		for(var i=0;i<task.priority&&i<5;i++)
		{
			priorityStr+='!';
		}
		task.priorityStr=priorityStr;
		task.sortStr=task.sort+''
		this.setState(task)
	}
  	render() {
  	console.log(this.state)
  	
    return (<ScrollView style={[styles.container]}>
	        <TextInput
	          style={styles.inputContainerStyle}
	          label="任务"
	          placeholder="任务"
	          value={this.state.taskName}
	          multiline={true}
	          onChangeText={taskName => this.setState({ taskName })}
	        />
	        <View style={styles.column}>
	        <TextInput
	          style={[styles.inputContainerStyle,styles.w50]}
	          label="DeadLine"
	          placeholder="DeadLine"
	          value={this.state.endTime}
	          onChangeText={endTime => this.setState({ endTime })}
	        />

	        <TextInput
	          style={[styles.inputContainerStyle,styles.w25]}
	          label="级别"
	          placeholder="!"
	          value={this.state.priorityStr}
	          onChangeText={priorityStr => {

	          	if(isNaN(priorityStr))
	          	{ //非数字：
	          		// console.log(56778)
	    //       		let tempPriorityStr="";
	    //       		let tempPriority=parseFloat(priorityStr)


					// for(var i=0;i<tempPriority&&i<5;i++)
					// {
					// 	tempPriorityStr+='!';
					// }
					// this.setState({ priorityStr:tempPriorityStr,priority:priorityStr })

					this.setState({ priorityStr:priorityStr,priority:priorityStr.length })
	          	}
	          	else
	          	{
					//数字：
					let tempPriorityStr="";
					for(var i=0;i<priorityStr&&i<5;i++)
					{
						tempPriorityStr+='!';
					}
					this.setState({ priorityStr:tempPriorityStr,priority:priorityStr })
	          	}
	          	console.log(this.state)
	          }}
	        />

	        <TextInput
	          style={[styles.inputContainerStyle,styles.w25]}
	          label="Sort"
	          placeholder="Sort"
	          value={this.state.sortStr}
	          onChangeText={sortStr => this.setState({ sortStr:sortStr,sort:parseInt(sortStr) })}
	        />
	        </View>
			<Button mode="contained" onPress={() => this.submitTask()} style={[styles.button,styles.inputContainerStyle]}>
              保存
            </Button>
	            <View>
	          		<TextInput
		          style={[styles.inputContainerStyle]}
		          label="标签"
		          placeholder="逗号分割"
		          value={this.state.tagsStr}
		          onChangeText={tagsStr => this.setState({ tagsStr })}
		        />
	          	</View>
	          <View style={styles.row}>
	          	
	            <Chip onPress={() => {}} style={styles.chip}>
	              Simple
	            </Chip>
	            <Chip onPress={() => {}} onClose={() => {}} style={styles.chip}>
	              Close button
	            </Chip>
	            <Chip
	              icon="favorite"
	              onPress={() => {}}
	              onClose={() => {}}
	              style={styles.chip}
	            >
	              Icon
	            </Chip>
	          </View>
      </ScrollView>
    );
	}
}
  



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
  },
  inputContainerStyle: {
    margin: 8,
  },
  column:{ flexDirection:'row'},

  w100: {
    flex: 1,
  },
  w50: {
    flex: 0.5,
  },

  w25: {
    flex: 0.25,
  },
  chip: {
    margin: 4,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateTasksRequest
},dispatch)

export default withTheme(connect(null,mapDispatchToProps)(TaskDetail));