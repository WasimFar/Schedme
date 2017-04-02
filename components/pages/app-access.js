/**
 * Created by wasim.f on 2/20/17.
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image ,TextInput,Button, Navigator} from 'react-native';
import CheckBox from 'react-native-check-box';
import Login from './w-login';
import Register from './w-register';

export default class AppLogin extends Component {
    constructor(props) {
        super(props);
        this.eventEmitter = props.eventEmitter;
    }

    renderScene(route, nav) {
        switch (route.id) {
            case 'login':
                return <Login navigator={nav} eventEmitter={this.eventEmitter}/>;
            case 'register':
                return <Register navigator={nav} eventEmitter={this.eventEmitter}/>;

            default:
                return <Login navigator={nav} eventEmitter={this.eventEmitter}/>;
        }
    }

    render() {

        const routes = [
            {id: 'login', index: 0},
            {id: 'register', index: 1},
        ];

        return (

            <Navigator
                ref={(navigator) =>this._navigator = navigator}
                initialRoute={routes[0]}
                initialRouteStack={routes}
                renderScene={this.renderScene.bind(this)}
                configureScene={(route, routeStack) =>
                    Navigator.SceneConfigs.FadeAndroid}
            />
        );
    }
}
