import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { View, StyleSheet, Platform } from 'react-native'
// import Today from './Today'
import My from './My'
import { TodayStackNav,WeekStackNav,ArchiveStackNav } from '../router'
/*
Invariant Violation: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.
import Week  from './Week' 只有一个默认导出的时候，不要加中括号
反正就是导出多个的时候一定要用{},单个的时候最好不要加
报这个错误的时候，可以尝试加{}，或者去掉{}，反复调试
*/


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
    today: My,
    week: WeekStackNav,
    month: TodayStackNav,
    archive: ArchiveStackNav,
    my: My,
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