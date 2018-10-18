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
import { View } from 'react-native';
import { Divider, Text } from 'react-native-paper';

const MyComponent = () => (
  <View>
    <Text>Apple</Text>
    <Divider />
    <Text>Orange</Text>
    <Divider />
  </View>
);

export default MyComponent;
