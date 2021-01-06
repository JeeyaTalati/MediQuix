import React,{Component} from 'react';
import {Header, Badge,Icon} from 'react-native-elements';
import {View,Text,Alert,StyleSheet} from 'react-native';
import db from '../config'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
export default class MyHeader extends Component{

render(){
    return(
        <SafeAreaView style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }} >
        <Header  centerComponent={{text:this.props.title,style:{color:"#90a5a9",fontWeight:'bold', fontSize:20}}} backgroundColor="#eaf8fe">
       
        </Header>
        </SafeAreaView>
    )
}
}