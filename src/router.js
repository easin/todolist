import { createStackNavigator,createAppContainer } from 'react-navigation';
import Today from './containers/Today'
import TaskDetail from './containers/TaskDetail'

const TodayStack = createStackNavigator({
  Today: {
    screen: Today,
    navigationOptions: {
      title: 'today\'s tasks',
    },
  },
  TaskDetail: {
    screen: TaskDetail,
    navigationOptions: ({ navigation }) => ({
      title: '444',
    }),
  },
});
export const TodayStackNav = createAppContainer(TodayStack); //v3版本指定需要一个appcontainer,参见https://reactnavigation.org/docs/en/app-containers.html