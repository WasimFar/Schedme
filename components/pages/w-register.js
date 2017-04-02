/**
 * Created by wasim.f on 2/21/17.
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image ,TextInput,Button, Navigator,ScrollView} from 'react-native';
import CheckBox from 'react-native-check-box';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.eventEmitter = props.eventEmitter;
        this._navigator = props.navigator;
        this.state ={invalidText:null};
    }

    goToLogin() {
        this._navigator.jumpTo(this._navigator.getCurrentRoutes()[0]);
    }

    register() {

        if(!this.validateUserName()){
            return;
        }

        if(!this.validateEmail()){
            return;
        }

        if(!this.validatePassword()){
            return;
        }

       // register process

        this.eventEmitter.emit('loginSuccessRequest', {user: this.username});
    }

    validatePassword(){

        if(!this.password || this.password.length< 8){
            this.setState({invalidText: 'password must contain at least 8 chars'});
            return false;
        }

        if(this.password != this.repassword){
            this.setState({invalidText: 'password mismatch'});
            return false;
        }

        return true;

    }

    validateUserName(){
        if(!this.username || this.username.length< 8){
            this.setState({invalidText: 'username must contain at least 8 chars'});
            return false;
        }

        return true;
    }

    validateEmail(){

        if(!this.validateEmailExpression(this.email)){
            this.setState({invalidText: 'invalid email'});
            return false;
        }

        return true;
    }

    validateEmailExpression(email){
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    render() {
        return (
            <ScrollView>
                <View style={{flexDirection:'column'}}>
                    <View style={{height :50, padding:10}}>
                        <Text onPress={this.goToLogin.bind(this)}>&lt; Login</Text>
                    </View>
                    <View style={{width:null, height:null, paddingTop:20}}>
                        <View style={{flexDirection:'column'}}>
                            <View style={{flexDirection: 'row', justifyContent:'center',marginVertical:15}}>
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
                                    placeholder="Email"
                                    onChangeText={(text) => this.email = text}
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
                                <TextInput
                                    style={{height: 50, width:300}}
                                    placeholder="Re-Password"
                                    secureTextEntry={true}
                                    onChangeText={(text) => this.repassword = text}
                                >
                                </TextInput>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent:'center',marginVertical:15}}>
                                {this.state.invalidText && <Text>{this.state.invalidText}</Text>}
                            </View>
                            <View style={{flexDirection: 'row', justifyContent:'center',marginVertical:15}}>
                                <Button style={{flex:1}}
                                        onPress={this.register.bind(this)}
                                        title="Sign Up"
                                        color="blue"
                                        accessibilityLabel="Signup"
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
