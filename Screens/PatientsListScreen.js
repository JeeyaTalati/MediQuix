import React,{Component} from 'react';
import {View, StyleSheet,Text,Image,TouchableOpacity,TextInput,Alert, Modal, ScrollView, KeyboardAvoidingView, FlatList} from 'react-native';
import db from '../config';
import {ListItem} from "react-native-elements";
import firebase from 'firebase';
import MyHeader from "../Components/MyHeader";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Slots from "../Components/Slots";
export default class PatientListScreen extends Component{
    constructor(){
        super();
        this.state={
            patientsList:[],
            
        }
        this.requestRef=null;
    }
    getPatientsList=()=>{
        this.requestRef=db.collection("patients")
        .onSnapshot((snapshot)=>{
            var patientsList=snapshot.docs.map(document=>document.data());
            this.setState({patientsList:patientsList});
        })
    }
    componentDidMount(){
        this.getPatientsList()
    }
    componentWillUnmount(){
        this.requestRef=null;
    }
    keyExtractor=(item,index)=>{
        index.toString()
    }
    renderItem=({item,i})=>{
        return(
            <ListItem key={i} titleStyle={{color:"black",fontWeight:'bold'}} bottomDivider>
              <View style={{flexDirection:'flex-start'}} >
              <Text>
                  Name:{item.patientName},
                  
                  </Text> 
              <Text>
                  Age:{item.age},
                  
                  </Text> 
                  <Text>
                  Sex:{item.sex}
                  </Text>
                  <Text>
                  Contact:{item.contact},
                  
                  </Text>
                  </View> 
            </ListItem>
        )
        }
        render(){
            return(
                
                <View  >
                  <View style={{flex:0.05}}>
                  <MyHeader title="PATIENTS" navigation={this.props.navigation}>
                   
                  </MyHeader>
                  </View>
                  
                  <View style={{flex:1}}>
                     {
                         this.state.patientsList.length===0?(
                             <View style={styles.subContainer}>
                                 <Text style={{fontSize:20}}>
                                  LIST OF ALL PATIENTS
                                 </Text>
                                 
                             </View>
        
                         ):
                         (
                             <FlatList keyExtractor={this.keyExtractor} data={this.state.patientsList} renderItem={this.renderItem}>
        
                             </FlatList>
                         )
                     }
                  </View>
                </View>
                
            )
        }
        }
        const styles= StyleSheet.create({
            button:{
                width:300,
                height:50,
                justifyContent:'center',
                alignItems:'center',
                borderRadius:25,
                backgroundColor:"#ff9800",
                shadowColor: "#000",
                shadowOffset: {
                   width: 0,
                   height: 8,
                }},
                subContainer:{
                    flex:1,
                    fontSize:20,
                    justifyContent:'center',
                    alignItems:'center',
                }
        
        })