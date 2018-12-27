import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { listTagsRequest,updateTasksRequest }from '../actions';


import React, { Component } from 'react';
import { StyleSheet, View, ScrollView,DatePickerAndroid } from 'react-native';//Picker
import { List,Chip,Button,TextInput, HelperText, withTheme } from 'react-native-paper';
import type { Theme } from 'react-native-paper/types';
import {CATE} from '../utils/constants'
// import ModalDropdown from 'react-native-modal-dropdown';
import moment from 'moment';
import _ from "lodash";

class TaskDetail extends Component {


	// constructor(props) {
	//   super(props);
	//   this.taggleTag = this.taggleTag.bind(this);
	// }

	state =  {
	}

	submitTask()
	{
		let params=this.state;
		// params.operateType
		let operateType=params.newRecord?'insert':'edit'
		// params
		if(!!params.endTime&& params.endTime.length<13)
		{
			params.endTime=params.endTime+' 00:00:00';	
		}
		this.props.updateTasksRequest({...params,operateType:operateType}); //新增或者更新一条
		// this.props.navigation.goBack();
		// this.timer = setTimeout(
  //     		  () => { console.log('把一个定时器的引用挂在this上');this.props.navigation.goBack(); },
		//       10000
		//     );
	}


	async chooseDate()
	{
		try {
		  const {action, year, month, day} = await DatePickerAndroid.open({
		    // Use `new Date()` for current date.
		    // May 25 2020. Month 0 is January.
		    // date: new Date(2020, 4, 25)
		    date:moment(new Date()).add(1, 'days').toDate()
		  });
		  if (action !== DatePickerAndroid.dismissedAction) {
		    // Selected year, month (0-11), day
				// console.log('====>'+year+'-'+(month+1)+'-'+day)
				this.setState({ endTime: year+'-'+(month+1)+'-'+day})
		  }
		
		console.log(year+'-'+(month+1)+'-'+day)
		} catch ({code, message}) {
		  console.warn('Cannot open date picker', message);
		}
	}

	taggleTag(tag)
	{
		let oldTags=this.state.tagIds.split(',')
		// console.log(oldTags)
		// console.log(33333333)
		let index=oldTags.indexOf(tag)
		if(index>0)
		{
			// oldTags=_.remove(oldTags, function(t) { return t=tag; });
			// oldTags=oldTags.splice(index+1, 1);
			_.pullAt(oldTags, [index])
			this.setState({tagIds:oldTags.join(',')})
		}
		else
		{
			// let newTags=_.compact(_.concat(oldTags, tag));
			// if(newTags.length>0)
			// {

			// }
			this.setState({tagIds:_.compact(_.concat(oldTags, tag)).join(',')})
		}
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
		if(task.catePage==CATE.Today)
		{
			if(!task.endTime)
			{
				task.endTime=moment(new Date()).add(1, 'days').format("YYYY-MM-DD");
			}
			else
			{
				task.endTime=moment(task.endTime, "YYYY-MM-DD HH:mm:ss").format("YYYY-MM-DD");
			}
		}
		if(!task.tagIds)
		{
			task.tagIds='';
		}
		this.setState(task);

		let {tags}=this.props;
		if(!tags||tags.length==0)
		{
			this.props.listTagsRequest();
		}
	}

	componentWillUnmount() {
	    // 如果存在this.timer，则使用clearTimeout清空。
	    // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
	    // this.timer && clearTimeout(this.timer);
  	}
  	render() {
  	// console.log(this.state)
  	let tagDoms=[];

  	let {tags} = this.props;
	
	if(tags.length>0)
	{
  	var idx=0;
  	// var i=0;i<tags.length;i++
    for(var i in tags){
      var item = (
       <Chip key={idx.toString()} onPress={this.taggleTag.bind(this,tags[i].tagName)} style={styles.chip}>
	              {tags[i].tagName}
	   </Chip>
      );
      idx++;
      tagDoms.push(item);
    }
	}
  	
  	

//    <Chip onPress={() => this.taggleTag('每日')} style={styles.chip}>
//	              每日
//	            </Chip>
//	            <Chip onPress={() => this.taggleTag('每晚8点')} style={styles.chip}>
//	              每晚8点
//	            </Chip>
//	            <Chip onPress={() => this.taggleTag('每周末')}  style={styles.chip}>
//	              每周末
//	            </Chip>
//	            <Chip onPress={() => this.taggleTag('阅读')}  style={styles.chip}>
//	              阅读
//	            </Chip>
//	            <Chip onPress={() => this.taggleTag('生活')}  style={styles.chip}>
//	              健康
//	            </Chip>
//	            <Chip onPress={() => this.taggleTag('领导力')}  style={styles.chip}>
//	              领导力
//	            </Chip>

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
	          onFocus={endTime => this.chooseDate()}
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
					try{
						let n=parseInt(priorityStr)
						tempPriorityStr="";
						for(var i=0;i<n&&i<5;i++)
						{
							tempPriorityStr+='!';
						}
						this.setState({ priorityStr:tempPriorityStr,priority:priorityStr })
					}
					catch(e)
					{
						this.setState({ priorityStr:priorityStr,priority:priorityStr.length })
					}

					// for(var i=0;i<tempPriority&&i<5;i++)
					// {
					// 	tempPriorityStr+='!';
					// }
					// this.setState({ priorityStr:tempPriorityStr,priority:priorityStr })

					
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
		          value={this.state.tagIds}
		          onChangeText={tagIds => this.setState({ tagIds })}
		        />
	          	</View>
	          <View style={styles.row}>
	          	{tagDoms}
	            
	          </View>

			<View>
				
				
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
  updateTasksRequest,listTagsRequest
},dispatch)


const mapStateToProps = (state, ownProps) => {
  return {
    tags:state.tag.tags,
  }
}
export default withTheme(connect(mapStateToProps,mapDispatchToProps)(TaskDetail));