import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
  } from 'react-native';


const nearByURL = 'https://wwww.baidu.com';
//const nearByURL = './../html/nearby.html';

class ToiletPage extends Component{
  render(){
    return(<View><Text style={{fontSize:18,padding:15,color: 'blue'}}>This is Event1 Page</Text></View>);
  }
}

module.exports = ToiletPage;
