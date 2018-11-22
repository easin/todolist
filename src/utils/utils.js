import {Component} from 'react'
import {
    Alert
} from 'react-native'

showAlert = (msg) => {
    Alert.alert('提示', msg);
}

export {showAlert}
// import {showAlert} from '../../util/AlertUtils'

// showAlert('网络问题，请稍后再试；\r\nCode:' + JSON.stringify(error));
