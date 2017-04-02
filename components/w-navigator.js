/**
 * Created by wasim.f on 2/16/17.
 */
import React, { Component } from 'react';
import { Text, Navigator, TouchableHighlight } from 'react-native';

export default class WNavigator extends Component {
    render() {

        const routes = [
            {title: 'First Scene', index: 0},
            {title: 'Second Scene', index: 1},
        ];

        return (
            <Navigator
                initialRoute={routes[0]}
                initialRouteStack={routes}
                renderScene={(route, navigator) =>
        <TouchableHighlight  onPress={() => {
          if (route.index === 0) {
            navigator.push(routes[1]);
          } else {
            navigator.pop();
          }
        }}>
        <Text>Hello {route.title}!</Text>
        </TouchableHighlight>
      }
                navigationBar={
     <Navigator.NavigationBar
       routeMapper={{
         LeftButton: (route, navigator, index, navState) =>
          { return (<Text>Cancel</Text>); },
         RightButton: (route, navigator, index, navState) =>
           { return (<Text>Done</Text>); },
         Title: (route, navigator, index, navState) =>
           { return (<Text>Awesome Nav Bar</Text>); },
       }}
       style={{backgroundColor: 'gray'}}
     />
  }

                configureScene={(route, routeStack) =>
    Navigator.SceneConfigs.FloatFromBottom}
                style={{padding: 100}}


            />
        );
    }
}