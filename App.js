import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {
  AppRegistry,
  Text,
  View,
  Navigator,
  StyleSheet,
  Image,
  TouchableHighlight  
} from 'react-native';
 
import HomeComponent from          './HomeComponent';
import CustomerComponent from      './CustomerComponent';
import OrderComponent  from    './OrderComponent';
import ProductComponent from    './ProductComponent';
import MineComponent  from  './MineComponent';
 
export default class Main extends Component 
{
 
 constructor(props) {
 super(props);
 this.state = {
      selectedTab:'home'
    };
 }
 
render() {
        return (
            <View style={styles.container} >
                <TabNavigator tabBarStyle={styles.tab}>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '首页'}
                        title="首页"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image source={require('./img/ic_home_normal.png')} style={styles.icon}/> }
                        renderSelectedIcon={() => <Image style={styles.icon} source={require('./img/ic_home_checked.png')} />}
                        onPress={() => this.setState({ selectedTab: '首页' })}>
                        <HomeComponent/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '订单'}
                        title="订单"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image source={require('./img/ic_order_normal.png')} style={styles.icon}/> }
                        renderSelectedIcon={() => <Image style={styles.icon} source={require('./img/ic_order_checked.png')} />}
                        onPress={() => this.setState({ selectedTab: '订单' })}>
                        <OrderComponent />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '客户'}
                        title="客户"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image source={require('./img/ic_customer_normal.png')} style={styles.icon}/> }
                        renderSelectedIcon={() => <Image style={styles.icon} source={require('./img/ic_customer_checked.png')} />}
                        onPress={() => this.setState({ selectedTab: '客户' })}>
                        <CustomerComponent />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '产品'}
                        title="产品"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image source={require('./img/ic_product_normal.png')} style={styles.icon}/> }
                        renderSelectedIcon={() => <Image style={styles.icon} source={require('./img/ic_product_checked.png')} />}
                        onPress={() => this.setState({ selectedTab: '产品' })}>
                        <ProductComponent />
                    </TabNavigator.Item>
                   <TabNavigator.Item
                        selected={this.state.selectedTab === '我的'}
                        title="我的"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image source={require('./img/ic_mine_normal.png')} style={styles.icon}/> }
                        renderSelectedIcon={() => <Image style={styles.icon} source={require('./img/ic_mine_checked.png')} />}
                        onPress={() => this.setState({ selectedTab: '我的' })}>
                        <MineComponent />
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
    tab: {  
        height: 70,  
        backgroundColor: '#222222',  
        alignItems: 'center'  
    },
    tabText: {
        marginTop: 1,
        color: '#ffffff',
        fontSize: 16
    },
    selectedTabText: {
        marginTop: 1,
        color: '#FFD700',
        fontSize: 16
    },
    icon: {
        width: 30,
        height: 31,
        resizeMode: 'stretch',  
        marginTop: 10  
    }
});
