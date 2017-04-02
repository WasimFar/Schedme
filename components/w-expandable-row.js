/**
 * Created by wasim.f on 2/20/17.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Alert,
    ListView,
    TouchableHighlight
} from 'react-native';


export default class ExapndableRow extends Component {

    /*closeControlPanel = () => {
        this._drawer.close()
    };*/

    constructor(props) {
        super(props);
        this.eventEmitter = props.eventEmitter;
        this.state = {isOpen: false};
    }

    collapseRow(){
       this.setState({isOpen: false});
    }

    expandRow(){
        this.setState({isOpen: true});
    }

    render() {

        let rowContent;

        if(!this.state.isOpen){
            rowContent = <TouchableHighlight underlayColor="white" onPress={()=>this.expandRow()} style={{ flex:1}}>
                <View style={{height:50, flexDirection:'row',  justifyContent: 'space-between'}}>
                <Text style={{paddingHorizontal:15}}>{this.props.title}</Text>
                <Text style={{paddingHorizontal:15}}>{this.props.releaseYear}</Text>
                </View>
            </TouchableHighlight>

        }else {
            rowContent = <TouchableHighlight underlayColor="white" onPress={()=>this.collapseRow()} style={{ flex:1}}>
                <View style={{height:100, flexDirection:'column', justifyContent: 'space-between'}}>
                    <View style={{height:50, flexDirection:'row'}}>
                        <Text style={{paddingHorizontal:15}}>{this.props.title}</Text>
                        <Text style={{paddingHorizontal:15}}>{this.props.releaseYear}</Text>
                    </View>
                    <Text>i am openned</Text>
                </View>
            </TouchableHighlight>
        }

        return (
            <View style={{flexDirection: 'row', flex: 1,borderBottomColor:'#a9a9a9' , borderWidth:0.5}}>
                {rowContent}
            </View>

        );
    }
}