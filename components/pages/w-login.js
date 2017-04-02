/**
 * Created by wasim.f on 2/20/17.
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image ,TextInput,Button, Navigator,ScrollView} from 'react-native';
import CheckBox from 'react-native-check-box';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.eventEmitter = props.eventEmitter;
        this._navigator = props.navigator;
        this.state ={invalidText:null};
    }

    login(){
        if(!this.username  && !this.password ) {
            this.eventEmitter.emit('loginSuccessRequest', {user: 'wasim far'});
        }else {
            this.setState({invalidText: 'invalid username/password'});
        }
    }

    onClick(){

    }

    goToRegister(){
        this._navigator.jumpTo(this._navigator.getCurrentRoutes()[1]);
    }

    render(){
        return (

            <ScrollView>
            <View style={{width:null, height:null, paddingTop:100}}>

                <View style={{flexDirection: 'row', justifyContent:'center', marginVertical:15}}>
                    <Text style={{fontSize:25}}>Wasim App</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent:'center', marginVertical:15}}>
                    <TextInput
                        style={{height: 50, width:300}}
                        placeholder="Username"
                        onChangeText={(text) => this.username = text}
                    >
                    </TextInput>
                </View>
                <View style={{flexDirection: 'row', justifyContent:'center',marginVertical:15}}>
                    <TextInput
                        style={{height: 50, width:300}}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={(text) => this.password = text}
                    >
                    </TextInput>
                </View>

                <View style={{flexDirection: 'row', justifyContent:'center',marginVertical:15}}>
                {this.state.invalidText && <Text>{this.state.invalidText}</Text>}
                </View>
                <View style={{flexDirection: 'row', justifyContent:'center',marginVertical:15}}>
                    <Button style={{flex:1}}
                            onPress={this.login.bind(this)}
                            title="Login"
                            color="orange"
                            accessibilityLabel="Login"
                    />
                </View>
                <View style={{flexDirection: 'row', justifyContent:'center',marginVertical:15}}>
                    <Text>Or</Text>
                </View>

                <View style={{flexDirection: 'row', justifyContent:'center',marginVertical:15}}>
                    <Button style={{flex:1}}
                            onPress={this.goToRegister.bind(this)}
                            title="Sign Up"
                            color="blue"
                            accessibilityLabel="Signup"
                    />
                </View>
            </View>
            </ScrollView>

        );
    }
}
