import { createStackNavigator,createAppContainer } from 'react-navigation';
import TodayTodoList from './containers/TodayTodoList'
import WeekTodoList from './containers/WeekTodoList'
import ArchiveTodoList from './containers/ArchiveTodoList'
import TaskDetail from './containers/TaskDetail'
import { Appbar } from 'react-native-paper';
const TodayStack = createStackNavigator({
  Today: {
    screen: TodayTodoList,
    navigationOptions: {
      title: '今日待办',
    },
  },
  TaskDetail: {
    screen: TaskDetail,
    navigationOptions: ({ navigation }) => ({
      title: '任务详情',
    }),
  },
});
export const TodayStackNav = createAppContainer(TodayStack); //v3版本指定需要一个appcontainer,参见https://reactnavigation.org/docs/en/app-containers.html

const WeekStack = createStackNavigator({
  Week: {
    screen: WeekTodoList,
    navigationOptions: {
      title: '本周目标',
    },
  },
  TaskDetail: {
    screen: TaskDetail,
    navigationOptions: ({ navigation }) => ({
      title: '任务详情',
    }),
  },
});
export const WeekStackNav = createAppContainer(WeekStack);


const ArchiveStack = createStackNavigator({
  Archive: {
    screen: ArchiveTodoList,
    navigationOptions: {
      title: '历史归档',
    },
  },
  TaskDetail: {
    screen: TaskDetail,
    navigationOptions: ({ navigation }) => ({
      title: '任务详情',
    }),
  },
});
export const ArchiveStackNav = createAppContainer(ArchiveStack);