/**
 * Created by wasim.f on 2/17/17.
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,TextInput,Button } from 'react-native';
import TopMenu from '../w-top-menu';


export default class Form extends Component {

    constructor(props) {
        super(props);
        this.navigator = props.navigator;
        this.eventEmitter = props.eventEmitter;

        this.state = {text: ''};
    }

    render() {


        return (
            <View style={{flexDirection: 'column', flex: 1}}>
                <TopMenu navigator={this.navigator}  eventEmitter={this.eventEmitter} selected="form"/>
                <View style={{flex:9}}>
                    <TextInput
                        style={{height: 50}}
                        placeholder="Type here to translate!"
                        onChangeText={(text) => this.setState({text})}
                    />

                </View>
            </View>
        );
    }
}