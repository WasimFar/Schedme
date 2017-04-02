/**
 * Created by wasim.f on 2/17/17.
 */
import React, { Component } from 'react';
import { Text, Navigator, TouchableHighlight,View,StyleSheet } from 'react-native';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TopMenu extends Component {

    constructor(props) {
        super(props);
        this.navigator= props.navigator;
        this.eventEmitter = props.eventEmitter;

        this.state={selected: props.selected};
    }

    menuItemClicked(menuItem){
        this.navigator.jumpTo(this.navigator.getCurrentRoutes()[menuItem]);
    }

    openDrawer(){
        this.eventEmitter.emit('openDrawerRequest');
    }

    handleMenuItem(value){
        if(value == 1){
            this.eventEmitter.emit('openDrawerRequest');
        }

        if(value == 2){
            this.eventEmitter.emit('logoutRequest');
        }
    }

    render() {

        return (

            <View style={{flexDirection: 'row', justifyContent: 'space-between',backgroundColor: 'skyblue', height: 50}}>
                <Icon style={[styles.menuItem,this.state.selected =='home' ? styles.selected : '']} name="home" backgroundColor="#3b5998" size={25} onPress={()=>this.menuItemClicked(0)}/>
                <Icon style={[styles.menuItem,this.state.selected =='list' ? styles.selected : '']} name="list" backgroundColor="#3b5998" size={25} onPress={()=>this.menuItemClicked(1)}/>
                <Icon style={[styles.menuItem,this.state.selected =='form' ? styles.selected : '']} name="bank" backgroundColor="#3b5998" size={25} onPress={()=>this.menuItemClicked(2)}/>
                <Menu style={[styles.menuItem]} onSelect={this.handleMenuItem.bind(this)}>
                    <MenuTrigger>
                        <Text style={{ fontSize: 20, paddingHorizontal:15 }}>&#8942;</Text>
                    </MenuTrigger>
                    <MenuOptions>
                        <MenuOption value={1}>
                            <Text>Config</Text>
                        </MenuOption>
                        <MenuOption value={2}>
                            <Text>Logout</Text>
                        </MenuOption>
                    </MenuOptions>
                </Menu>
            </View>
        );
    }


}


const styles = StyleSheet.create({
    menuItem: {
        padding: 10,
        alignItems: 'center',
    },
    selected: {
        fontWeight: 'bold',
    },

});
