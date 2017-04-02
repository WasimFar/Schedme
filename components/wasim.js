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
    ListView
} from 'react-native';

import EventEmitter from 'EventEmitter';
import Row from './row';



export default class Wasim extends Component {



    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        //console.warn(this.props.events.emit);
        this.eventEmitter = this.props.events;
        this.state = {
            dataSource: ds.cloneWithRows([
                {name: {first:'riham', last: 'khoury'}},
                {name: {first:'wasim', last: 'far'}},
                {name: {first:'riham', last: 'khoury'}},
                {name: {first:'wasim', last: 'far'}},
                {name: {first:'riham', last: 'khoury'}},
                {name: {first:'wasim', last: 'far'}},
                {name: {first:'riham', last: 'khoury'}},
                {name: {first:'wasim', last: 'far'}},
                {name: {first:'riham', last: 'khoury'}},
                {name: {first:'wasim', last: 'far'}},
                {name: {first:'riham', last: 'khoury'}},
                {name: {first:'wasim', last: 'far'}},
                {name: {first:'riham', last: 'khoury'}},
                {name: {first:'wasim', last: 'far'}},
                {name: {first:'riham', last: 'khoury'}},
                {name: {first:'wasim', last: 'far'}},
                {name: {first:'riham', last: 'khoury'}},
                {name: {first:'wasim', last: 'far'}},
                {name: {first:'riham', last: 'khoury'}},
                {name: {first:'wasim', last: 'far'}},
                ]),
        };
    }

    componentWillMount() {
       // this.eventEmitter = new EventEmitter();
    }


    openPopup(data) {
        this.eventEmitter.emit('koko');
    }


    openPopup1() {
        Alert.alert('aa');
    }

        render() {
            return (
<Text onPress={this.openPopup.bind(this)}>dddd</Text>
            // <ListView
            //     style={styles.container}
            //     dataSource={this.state.dataSource}
            //     renderRow={(data) => <Row {...data} />}
            //     renderSeparator={(sectionId, rowId) => <View   key={rowId} style={styles.separator} />}
            //
            // />


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
    },
});
