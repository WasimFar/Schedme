/**
 * Created by wasim.f on 2/17/17.
 */

import React, { Component } from 'react';
import { Text, Navigator, TouchableHighlight,View } from 'react-native';
import List from './pages/list';
import Form from './pages/form';
import Home from './pages/home';
import Drawer from 'react-native-drawer';
import EventEmitter from 'EventEmitter';
import ControlPanel from './control-panel';
import AppLogin from './pages/app-access';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';

export default class MainApp extends Component {

    constructor(props) {
        super(props);
        this._setNavigatorRef = this._setNavigatorRef.bind(this);
        this._setDrawerRef = this._setDrawerRef.bind(this);
        this.state = {user: null};
    }


    render() {
        const routes = [
            {id: 'home', index: 0},
            {id: 'list', index: 1},
            {id: 'form', index: 2},
        ];

        if(this.state.user) {
            return (
                <MenuContext style={{ flex: 1 }}>
                <Drawer ref={this._setDrawerRef} tapToClose={true}
                               content={<ControlPanel eventEmitter={this.eventEmitter}/>}>
                <Navigator
                    ref={this._setNavigatorRef}
                    initialRoute={routes[0]}
                    initialRouteStack={routes}
                    renderScene={this.renderScene.bind(this)}
                    configureScene={(route, routeStack) =>
                    Navigator.SceneConfigs.HorizontalSwipeJump}
                />
            </Drawer>
                </MenuContext>

                    );
        }else{
            return (
                 <AppLogin eventEmitter={this.eventEmitter}/>
            );
        }
    }

    renderScene(route, nav) {
        switch (route.id) {
            case 'home':
                return <Home navigator={nav}  user={this.state.user} eventEmitter={this.eventEmitter} />;
            case 'list':
                return <List navigator={nav}  user={this.state.user} eventEmitter={this.eventEmitter}/>;
            case 'form':
                return <Form navigator={nav}   user={this.state.user} eventEmitter={this.eventEmitter}/>;
            default:
                return <Home navigator={nav}  user={this.state.user}  eventEmitter={this.eventEmitter}/>;
        }
    }

    componentWillMount() {
        this.eventEmitter = new EventEmitter();
        this.eventEmitter.addListener('openDrawerRequest', this.openDrawer.bind(this));
        this.eventEmitter.addListener('closeDrawerRequest', this.closeDrawer.bind(this));
        this.eventEmitter.addListener('loginSuccessRequest', this.loginSuccess.bind(this));
        this.eventEmitter.addListener('logoutRequest', this.logout.bind(this));


       // this._listeners && this._listeners.forEach(listener => listener.remove());
    }

    openDrawer(){
        if(this._drawer){
            this._drawer.open();
        }
    }

    closeDrawer(){
        if(this._drawer){
            this._drawer.close();
        }
    }

    loginSuccess(data){
        this.setState({user: data.user});
    }

    logout(){
        this.setState({user:null});
    }


    _setNavigatorRef(navigator) {
        if (navigator !== this._navigator) {
            this._navigator = navigator;

            if (navigator) {
                var callback = (event) => {
                    console.log(
                        `NavigatorMenu: event ${event.type}`,
                        {
                            route: JSON.stringify(event.data.route),
                            target: event.target,
                            type: event.type,
                        }
                    );
                };
                // Observe focus change events from the owner.
                this._listeners = [
                    navigator.navigationContext.addListener('willfocus', callback),
                    navigator.navigationContext.addListener('didfocus', callback),
                ];
            }
        }
    }




    _setDrawerRef(drawer) {
        if (drawer !== this._drawer) {
            this._drawer = drawer;

        }
    }
}
