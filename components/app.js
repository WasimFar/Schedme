/**
 * Created by wasim.f on 2/15/17.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Alert,
    ListView,
    Button,
    ActivityIndicator
} from 'react-native';
import EventEmitter from 'EventEmitter';
import {SideMenu} from  'react-native-side-menu';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger }from 'react-native-menu';
import WNavigator from './w-navigator';

import Drawer from 'react-native-drawer';
import ControlPanel from './control-panel';

export default class MainApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animating: true,
        };
    }

    closeControlPanel = () => {
        this._drawer.close();
    }
    openControlPanel = () => {
        this._drawer.open();
    }


    getMoviesFromApiAsync() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson.movies;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render(){
        return (

           <WNavigator></WNavigator>
        );

    }

    // render() {
    //     this.getMoviesFromApiAsync();
    //
    //     return (
    //     <Drawer  content={<ControlPanel drawer={this._drawer} close={this.closeControlPanel.bind(this)}/>}  ref={(ref) => this._drawer = ref}
    //              tapToClose={true}>
    //         <MenuContext style={{ flex: 1 }}>
    //             <ActivityIndicator
    //                 animating={this.state.animating}
    //                 style={[styles.
    // , {height: 80}]}
    //                 size="large"
    //             />
    //         <View style={{ padding: 10, flexDirection: 'row', backgroundColor: 'pink' }}>
    //             <View style={{ flex: 1 }}><Text>My App</Text></View>
    //             <Menu onSelect={(value) => alert(`User selected the number ${value}`)}>
    //                 <MenuTrigger>
    //                     <Text style={{ fontSize: 20 }}>&#8942;</Text>
    //                 </MenuTrigger>
    //                 <MenuOptions>
    //                     <MenuOption value={1}>
    //                         <Text>One</Text>
    //                     </MenuOption>
    //                     <MenuOption value={2}>
    //                         <Text>Two</Text>
    //                     </MenuOption>
    //                 </MenuOptions>
    //             </Menu>
    //         </View>
    //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //             <Text>Hello!</Text>
    //             <Button
    //                     onPress={() => {this._drawer.open()}}
    //                 title="Learn More"
    //                 color="#841584"
    //                 accessibilityLabel="Learn more about this purple button"
    //             />
    //         </View>
    //     </MenuContext>
    //
    //
    //     </Drawer>
    //         );
    // }

    componentWillMount() {
        this.eventEmitter = new EventEmitter();
        this.eventEmitter.addListener('koko', this.haha);

    }

    haha(){


        //Alert.alert('haha');
    }

    componentDidMount() {
        //  this.addListenerOn(this.props.events, 'myRightBtnEvent', this.miscFunction);
        // this.addListenerOn(this.eventEmitter, 'koko', this.haha);
    }

}



const styles = StyleSheet.create({
        container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});