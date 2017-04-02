/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import MainApp from './components/app3';

export default class WasimApp extends Component {
  render() {
    return (
    <MainApp/>

    );
  }
}

AppRegistry.registerComponent('WasimApp', () => WasimApp);
