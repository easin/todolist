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