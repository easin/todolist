import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Today from './Today'
// import TodoListContainer from './TodoList'
// import TestListPage2 from './TestListPage2'
const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

export default class TodoListBottomNavigation extends React.Component {
  //https://material.io/tools/icons/?style=round icon图标
  // https://oblador.github.io/react-native-vector-icons/
  state = {
    index: 0,
    routes: [
      { key: 'today', title: '待办', icon: 'playlist-add-check' },
      { key: 'week', title: '周', icon: 'history' },
      { key: 'month', title: '月', icon: 'date-range' },
      { key: 'archive', title: '归档', icon: 'archive' },
      { key: 'my', title: '我', icon: 'person' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    today: Today,
    week: AlbumsRoute,
    month: RecentsRoute,
    archive: RecentsRoute,
    my: RecentsRoute,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}