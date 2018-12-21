// import {Component} from 'react'
// import {
//     Alert
// } from 'react-native'

// showAlert = (msg) => {
//     Alert.alert('提示', msg);
// }

var deepCopy = function(src) {
    var ret = {}
    for (var k in src) {
        ret[k] = typeof src[k] ==='object' ? deepCopy(src[k]) : src[k]
    }
    return ret
}
// exports.deepCopy = deepCopy;
export {deepCopy}
// export {showAlert}
// import {showAlert} from '../../util/AlertUtils'

// showAlert('网络问题，请稍后再试；\r\nCode:' + JSON.stringify(error));
