/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan  
 * @flow
 */

import React, {PureComponent} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, PixelRatio} from 'react-native'

const color = {
    theme: '#06C1AE',
    border: '#e0e0e0',
    background: '#f3f3f3'
}


class Cell extends PureComponent {


    render() {
        // console.log(this.props);//{task: Object, itemIndex: 7, onPress: function}
        let {task,itemIndex} = this.props
        // console.log(task)
        // info.imageUrl = info.imageUrl.replace('w.h', '160.0')

        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                 <View style={styles.taskContainer}>
                    <Text style={styles.h1}>{itemIndex}{task.taskName}</Text>
                    <Text style={styles.p} numberOfLines={0} style={{marginTop: 8}}>{task.taskName}</Text>
                    <View style={{flex: 1, justifyContent: 'flex-end'}}>
                        <Text style={[styles.h1, styles.highlight]}>xxxxxxx</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderColor: color.border,
        backgroundColor: 'white',
    },
    icon: {
        width: 80,
        height: 80,
        borderRadius: 5,
    },
    taskContainer: {
        flex: 1,
    },
    highlight: {
        color: color.theme
    },
    h1: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#222222',
    },
    p: {
        fontSize: 13,
        color: '#777777',
    },
})

export default Cell
