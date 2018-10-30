/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
// import { Router, browserHistory } from 'react-router'
// import { syncHistoryWithStore } from 'react-router-redux'
// import routes from './routes'
import configureStore from './src/store/configureStore'

import TodoListBottomNavigation from './src/containers/TodoListBottomNavigation';
import TodayTest from './src/containers/TodayTest'
type Props = {};
const store = configureStore()
//const history = syncHistoryWithStore(browserHistory, store)
//<TodoListBottomNavigation /><TodayTest />
export default class App extends Component<Props> {
  render() {
    return (
      <StoreProvider store={store}>
        <PaperProvider>
       <TodayTest />
          
        </PaperProvider>
      </StoreProvider>
      
    );
  }
}
