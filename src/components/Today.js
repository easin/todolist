// import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';
// import {
//     AppRegistry,
//     StyleSheet,
//     Text,
//     View,
//     Image
// } from 'react-native';
// import { View } from 'react-native';
// import { Component } from 'react';
// import { Divider, Text } from 'react-native-paper';
// import {
//     action as actionAction,
// } from 'path';

// const mapDispatchToProps = (dispatch) => {
//     return {
//         action: () => {
//             dispatch(actionAction());
//         },
//     };
// };

// const mapStateToProps = ({ state }) => ({
//     prop: state.prop
// });

// export default class Today extends Component {
//     render() {
//         return (
//        <View>
//     <Text>Apple</Text>
//     <Divider />
//     <Text>Orange</Text>
//     <Divider />
//   </View>
//         );
//     }
// }
// export default Today;
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Today);

import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

export default class Today extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'music', title: 'Music', icon: 'queue-music' },
      { key: 'albums', title: 'Albums', icon: 'album' },
      { key: 'recents', title: 'Recents', icon: 'history' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
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
