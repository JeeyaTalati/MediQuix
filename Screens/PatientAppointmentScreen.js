import React,{Component} from 'react';
import {View, StyleSheet,Text,Image,TouchableOpacity,TextInput,Alert, Modal, ScrollView, KeyboardAvoidingView, FlatList} from 'react-native';
import db from '../config';
import {ListItem} from "react-native-elements";
import firebase from 'firebase';
import MyHeader from "../Components/MyHeader";
import Slots from "../Components/Slots";
export default class PatientAppointmentScreen extends Component{
    render(){
        return(
            <View>
        <Text>
            6/01/2020
        </Text>
        <Slots timing="10:00am to 10:30am">

</Slots>

        <Slots timing="10:30am to 11:00am">

</Slots>
        <Slots timing="11:00am to 11:30am">

        </Slots>
        
        <Slots timing="11:30am to 12:00pm">

        </Slots>
        </View>
        )
    }
}