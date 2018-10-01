import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
//导入react-native-tab-navigator方式：
//cmd项目路径下执行npm install react-native-tab-navigator --save
import TabNavigator from 'react-native-tab-navigator'
export default class Tabnavigator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Event'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        //设置选中的位置
                        selected={this.state.selectedTab === 'Event'}
                        //标题
                        title="Event"
                        //标题样式
                        titleStyle={styles.tabText}
                        //选中时标题文字样式
                        selectedTitleStyle={styles.selectedTabText}
                        //图标
                        renderIcon={() => <Image style={styles.icon} source={require("./res/images/icon_alarm_normal.png")} />}
                        //选中时图标
                        renderSelectedIcon={() => <Image style={[styles.icon,{tintColor:'red'}]} source={require("./res/images/icon_alarm_normal.png")} />}
                        //点击Event
                        onPress={() => this.setState({ selectedTab: 'Event' })}>
                        <View style={styles.page0}>
                            <Text style={{fontSize:18,padding:15,color: 'blue'}}>This is Event Page</Text>
                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Log'}
                        title="Log"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("./res/images/icon_alarm_normal.png")} />}
                        renderSelectedIcon={() =>  <Image style={[styles.icon,{tintColor:'red'}]} source={require("./res/images/icon_alarm_normal.png")} />}
                        onPress={() => this.setState({ selectedTab: 'Log' })}>
                        <View style={styles.page0}>
                            <Text style={{fontSize:18,padding:15,color: 'blue'}}>This is Log Page</Text>
                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Device'}
                        title="Device"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("./res/images/icon_alarm_normal.png")} />}
                        renderSelectedIcon={() => <Image style={[styles.icon,{tintColor:'red'}]} source={require("./res/images/icon_alarm_normal.png")} />}
                        onPress={() => this.setState({ selectedTab: 'Device' })}>
                        <View style={styles.page1}>
                            <Text style={{fontSize:18,padding:15,color: '#fff'}}>This is Device Page</Text>
                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'User'}
                        title="User"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("./res/images/icon_alarm_normal.png")} />}
                        renderSelectedIcon={() => <Image style={[styles.icon,{tintColor:'red'}]} source={require("./res/images/icon_alarm_normal.png")} />}
                        onPress={() => this.setState({ selectedTab: 'User' })}>
                        <View style={styles.page1}>
                            <Text style={{fontSize:18,padding:15,color: '#fff'}}>This is User Page</Text>
                        </View>
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'User5'}
                        title="User5"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("./res/images/icon_alarm_normal.png")} />}
                        renderSelectedIcon={() => <Image style={[styles.icon,{tintColor:'red'}]} source={require("./res/images/icon_alarm_normal.png")} />}
                        onPress={() => this.setState({ selectedTab: 'User5' })}>
                        <View style={styles.page1}>
                            <Text style={{fontSize:18,padding:15,color: '#f0f'}}>This is User Page 5</Text>
                        </View>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabText: {
        fontSize: 10,
        color: 'black'
    },
    selectedTabText: {
        fontSize: 10,
        color: 'red'
    },
    icon: {
        width: 22,
        height: 22
    },
    page0: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    page1: {
        flex: 1,
        backgroundColor: 'blue'
    }
});

AppRegistry.registerComponent('Tabnavigator', () => Tabnavigator);
