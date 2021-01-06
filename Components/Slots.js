import React,{Component} from 'react';
import {Header, Badge,Icon} from 'react-native-elements';
import {View,Text,Alert,StyleSheet,TouchableOpacity} from 'react-native';
import db from '../config'
export default class Slots extends Component{
render(){
    return(
        <TouchableOpacity style={styles.button}>
            <Text style={{textAlign:'center', fontWeight:'bold'}}>
               {this.props.timing}
            </Text>
        </TouchableOpacity>
    )
}
}
const styles=StyleSheet.create({
    button:{
        marginTop:10,
        alignSelf:'center',
        backgroundColor:"lightblue",
        width:100,
        height:25,
        textAlign:'center',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
    }
})