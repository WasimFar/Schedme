import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Alert,
    ListView,
    Switch
} from 'react-native';
/**
 * Created by wasim.f on 2/16/17.
 */

import Calendar from 'react-native-calendar-datepicker';
import Moment from 'moment';

export default class ControlPanel extends Component {

    closeControlPanel = () => {
        this._drawer.close()
    };

    constructor(props) {
        super(props);
        this.eventEmitter = props.eventEmitter;
        this.state = {
            trueSwitchIsOn: true,
            falseSwitchIsOn: false,
            opeCalendar: false,
            date: Moment("20111031")
        };
    }

    closeDrawer(){
        this.eventEmitter.emit('closeDrawerRequest');
    }

    render() {
        return (
            <View style={{flexDirection:'column'}}>
                <View style={{height :50, padding:10}}>
                    <Text onPress={()=>this.closeDrawer()}>&lt; Back</Text>

                </View>

                <View style={{width:null, height:null, paddingTop:20}}>
                    <View style={{flexDirection:'column'}}>
                        <View style={{flexDirection: 'row', justifyContent:'center',marginVertical:15}}>
                            <Text onPress={()=>this.setState({openCalendar: true})}>open Calendar</Text>
                        </View>
                        {this.state.openCalendar && <Calendar

                            onChange={(date) => this.setState({date})}
                            selected={this.state.date}
                            // We use Moment.js to give the minimum and maximum dates.
                            minDate={this.state.date}
                            maxDate={Moment().add(10, 'years').startOf('day')}
                        />}
                    </View>
                </View>
            </View>
        );
    }
}


