/**
 * Created by wasim.f on 2/17/17.
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import TopMenu from '../w-top-menu';
import { DatePickerDialog } from 'react-native-datepicker-dialog';
import moment from 'moment';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.navigator = props.navigator;
        this.eventEmitter = props.eventEmitter;

        this.state = {
            dobText: '',
            dobDate: null,
        }
    }


    onDOBDatePicked(date){
        //Here you will get the selected date
        this.setState({
            dobDate: date,
            dobText: moment(date).format('DD-MMM-YYYY')
        });
    }

    onDOBPress() {
        let dobDate = this.state.dobDate;

        if(!dobDate || dobDate == null){
            dobDate = new Date();
            this.setState({
                dobDate: dobDate
            });
        }

        //To open the dialog
        this.refs.dobDialog.open({
            date: dobDate,
            maxDate: new Date() //To restirct future date
        });

    }

    render() {

        return (
            <View style={{flexDirection: 'column', flex: 1}}>
                <TopMenu navigator={this.navigator}  eventEmitter={this.eventEmitter} selected="home"/>
                <View style={{flex:1, marginTop:10}}>
                    <Text>DOB</Text>
                    <TouchableOpacity onPress={this.onDOBPress.bind(this)} >
                        <View style={styles.datePickerBox}>
                            <Text style={styles.datePickerText}>{this.state.dobText}</Text>
                        </View>
                    </TouchableOpacity>
                    <Image

                        source = {require('../amir.jpeg')}
                    />
                </View>


                <DatePickerDialog ref="dobDialog" onDatePicked={this.onDOBDatePicked.bind(this)} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#FFFFFF'
    },
    content: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    datePickerBox:{
        marginTop: 9,
        borderColor: '#ABABAB',
        borderWidth: 0.5,
        padding: 0,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        height: 38,
        justifyContent:'center'
    },
    datePickerText: {
        fontSize: 14,
        marginLeft: 5,
        borderWidth: 0,
        color: '#121212',
    },
});