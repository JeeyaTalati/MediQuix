import React,{Component} from 'react';
import {View, StyleSheet,Text,Image,TouchableOpacity,TextInput,Alert, Modal, ScrollView, KeyboardAvoidingView} from 'react-native';
import db from '../config';
import firebase from 'firebase';
export default class LoginScreen extends Component{
    constructor(){
        super()
            this.state={
                isDoctorModalVisible:false,
                name:"",
                speciality:"",
                emailId:"",
                password:"",
                confirmPassword:"",
            }
        
    }
    userSignUp = ( emailId,password,confirmPassword)=>{
        if (password!== confirmPassword){
            return(
                alert("Password Doesn't Match")
            )
        }
        else {

        
        
        firebase.auth().createUserWithEmailAndPassword(emailId,password).then(()=>{
            db.collection("doctors").add({
               
                name:this.state.name,
                speciality:this.state.speciality,
                email_id:this.state.emailId,
                
            })
            return(
                alert("Succesfully SignedUp.", "", [{text:"OK",onPress:()=>{this.setState({isModalVisible:false})}}])
            )
        }).catch((error)=>{
            var errorCode=error.code;
            var errorMessage=error.message;
            return(
                alert(errorMessage)
            )
        })
    }
}
    doctorModal=()=>{
      return(
          <Modal visible={this.state.isDoctorModalVisible}  animationType="fade" transparent={true}>
          <Text style={styles.modalTitle}>
                    REGISTER
                  </Text>
                  <TextInput style={styles.formTextInput} placeholder="Doctor Name"  onChangeText={(text)=>{this.setState({name:text})}} maxLength={25}>
               
               </TextInput>
               <TextInput style={styles.formTextInput} placeholder="Speciality"  onChangeText={(text)=>{this.setState({speciality:text})}} maxLength={25}>
               
               </TextInput>
               
               
               
               <TextInput style={styles.formTextInput} placeholder="Email ID"  onChangeText={(text)=>{this.setState({emailId:text})}} keyboardType={"email-address"}>
               
               </TextInput>
               <TextInput style={styles.formTextInput} placeholder="Password"  onChangeText={(text)=>{this.setState({password:text})}} secureTextEntry={true}>
               
               </TextInput>
               <TextInput style={styles.formTextInput} placeholder="Rewrite Password"  onChangeText={(text)=>{this.setState({confirmPassword:text})}} secureTextEntry={true}></TextInput>
               <View style={styles.modalBackButton}>
                   <TouchableOpacity style={styles.registerButton} onPress={()=>{this.userSignUp(this.state.emailId,this.state.password,this.state.confirmPassword)}}> 
                     <Text style={styles.registerButtonText}>
                       REGISTER
                     </Text>
                   </TouchableOpacity>

               </View>
          </Modal>
      )
    }
    render(){
        return(
            <View style={styles.container}>
                {this.doctorModal()}
            <View>
                <Text>
                    MEDIQUIX
                </Text>
                <Image source={require("../assets/hospital.png")} style={{width:300,height:300}}>

                </Image>

            </View>
            <View>
                <Text>
                    LOGIN AS
                </Text>
                <TouchableOpacity style={styles.button} onPress={()=>{this.setState({isDoctorModalVisible:true})}}>
                    <Text style={styles.text}>
                        DOCTOR
                    </Text>
                </TouchableOpacity>
            </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})