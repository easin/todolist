import { createStackNavigator,createAppContainer } from 'react-navigation';
import Today from './containers/Today'
import Week from './containers/Week'
import Archive from './containers/Archive'
import TaskDetail from './containers/TaskDetail'
import { Appbar } from 'react-native-paper';
const TodayStack = createStackNavigator({
  Today: {
    screen: Today,
    navigationOptions: {
      title: '今日代办',
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
    screen: Week,
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
    screen: Archive,
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