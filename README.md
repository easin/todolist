yarn 或者npm install

react-native run-android
# todolist
rn+redux+material-ui
react-native run-android
npm install react-native-page-listview --save
npm install react-router-redux --save
npm install redux-saga --save

#清除缓存再试：

watchman watch-del-all
sudo kill -9 $(ps -ef|grep -i node |awk '$0 !~/grep/ {print $2}' |tr -s '\n' ' ')
rm -fr node_modules && npm install
rm -rf /tmp/metro-bundler-cache-*
react-native run-android

#查看日志（必须的，方便调试和打日志）：
react-native log-android

rndebuger 给模拟器设置ip，全局走代理，可以发现 package manager的地址10.0.2.2
[看板pc端技术选型](https://material-ui.com/demos/lists/)

https://material.io/tools/icons/?icon=format_list_numbered&style=baseline rn的图标可以来这里找

java_home 的bin路径下执行：

keytool -genkey -v -keystore /opt/my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 100000


[安卓打包](https://reactnative.cn/docs/signed-apk-android/))

https://redux-saga-in-chinese.js.org/docs/advanced/NonBlockingCalls.html

https://www.jianshu.com/p/7cac18e8d870 不错的saga