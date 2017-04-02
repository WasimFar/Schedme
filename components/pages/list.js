/**
 * Created by wasim.f on 2/17/17.
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,ActivityIndicator , ListView,RefreshControl,TextInput} from 'react-native';
import TopMenu from '../w-top-menu';
import ExapndableRow from '../w-expandable-row';
import SearchBar from 'react-native-searchbar';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class List extends Component {

    constructor(props) {
        super(props);
        this.navigator = props.navigator;
        this.eventEmitter = props.eventEmitter;
        this.state = {datasource: null, refreshing: false , search:false, searchText: null};
        this.listViewDatasource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.data = null;
    }

    componentDidMount() {
        this.fetchData();
    }


    fetchData(){
        const _self = this;
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.data = responseJson.movies.concat(responseJson.movies).concat(responseJson.movies);
                _self.setState({datasource: this.listViewDatasource.cloneWithRows(this.data)});
            })
            .catch((error) => {
                console.warn(error);
            });
    }


    _onRefresh() {
        this.setState({refreshing: true, search:false});
        this.fetchData().then(() => {
            this.setState({refreshing: false});
        });
    }

    showSearch(){
        this.setState({search: true});
    }

    hideSearch(){
        this.search();
        this.setState({search: false});
    }

    search(text){
        if(!this.data){
            return;
        }

        if(text){
            const filtered = this.data.filter((item)=>{
                return item.title.toLowerCase().trim().includes(text.toLowerCase().trim());
            });
            this.setState({datasource: this.listViewDatasource.cloneWithRows(filtered)});
        }else{
            this.setState({datasource: this.listViewDatasource.cloneWithRows(this.data)});
        }


    }

    render() {
        let listView;
        if(!this.state.datasource) {
            listView = <ActivityIndicator
                animating={this.state.animating}
                style={{height: 140}}
                size="large"
            />;
        }else {

            listView = <ListView
                dataSource={this.state.datasource}
                renderRow={(data) =>  <ExapndableRow {...data} />}
                renderSeparator={(sectionId, rowId) => <View   key={rowId} />}
                enableEmptySections={true}
                refreshControl={
                         <RefreshControl
                               refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh.bind(this)}
                        />
                }

            />;

        }

        let header;

        if(this.state.search) {
            header = <View style={{flexDirection: 'row',  height: 50}}>
                <TextInput style={{ flex: 9}}
                           placeholder="Search"
                           clearButtonMode="while-editing"
                           onChangeText={this.search.bind(this)}

                />
                <Icon name="close" style={{padding:10}} backgroundColor="#3b5998" size={20} onPress={this.hideSearch.bind(this)}/>
            </View>

        }else{
            header = <View style={{flexDirection: 'row',  alignItems: 'center', height: 50}}>
                <Text style={{flex:9,  justifyContent: 'center', alignItems: 'center', textAlign:'center'}}>All Movies</Text>
                <Icon  style={{padding:10}} name="search" backgroundColor="#3b5998" size={20} onPress={this.showSearch.bind(this)}/>

            </View>
        }


        return (
            <View style={{flexDirection: 'column', flex: 1}}>
                <TopMenu navigator={this.navigator} eventEmitter={this.eventEmitter} selected="list"/>
                {header}
                <View style={{flex:0.8}}>
                    {listView}
                </View>
            </View>
        );
    }
}