import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { easeGradient } from 'react-native-easing-gradient'
import {col} from "./clr.js"

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  Pressable
} from "react-native";
import SomeComponent from "../CustomBackground.js";
import methods, { registration, signIn,forgotPassword } from '../../Firebase/methods'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { accTypeChange } from "../reduxComponents/accTypeAction.js";
import { accType } from "../Values/accType.js";
import { setLoading } from "../reduxComponents/setLoadingAction.js";

const textAddValue = 0; 
class CostumerLoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'none',
      password:'',
      loadingStatus:false
    };
  }
  render(){
  const onLoginClick = async () => {
    try {
      if (this.state.email !== '' && this.state.password !== '') {
        //this.state.console.log(email)
        this.props.setLoading(true)
        await signIn(this.state.email,this.state.password)
        this.props.setLoading(false)
        //navigation.navigate('Main')
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  const onRegistrationClick = async () => {
    this.props.navigation.navigate('ProviderRegistration')
  }

  const onBackClick = () =>{
    this.props.accTypeChange(accType.NONE)
  }

  const forgotPass = () => {
    forgotPassword(this.state.email);
  }

  return (
    <View style={styles.container}>
      { <SomeComponent>
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Login</Text>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.inputView}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    keyboardType={"email-address"}
                    onChangeText={(email) => this.setState({email:email.replace(' ','')})}
                    />
                </View>
        
                <View style={styles.inputView}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder="Geslo"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({password:password})}
                    />
                </View>
                <View style={{alignItems: "center",justifyContent: "center"}}>
                  <TouchableOpacity onPress={forgotPass}>
                      <Text style={styles.forgot_button}>Forgot password?</Text>
                  </TouchableOpacity>
                  <Pressable onPress={onRegistrationClick}>
                      <Text style={styles.forgot_button}>Registration</Text>
                  </Pressable>
                  </View>

                
            </View>
            <View style={{flex:2,alignItems: "center",justifyContent: "flex-start",}}>
                       
                  <TouchableOpacity style={styles.loginBtn} onPress={onLoginClick}>
                      <Text style={styles.loginText}>LOGIN</Text>
                  </TouchableOpacity>
                  </View>
                  <View style={{flex:0.8,justifyContent:"flex-start",alignItems:"center"}}>
              <Pressable onPress={onBackClick}>
                <Text style={{fontSize:17 + textAddValue}}>Back</Text>
              </Pressable>
            </View>
        </View>
        </SomeComponent>}
      </View>
  );
      }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 formContainer:{
    flex: 3,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    marginTop:100
 },
  inputView: {
    backgroundColor: col.textColorSecondary,
    borderRadius: 30,
    width: 200,
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
 
  TextInput: {
    color: col.clrText,
    fontFamily:"Light",
    textAlign:"center",
    height: 50,
    flex: 1,
    fontSize:15 + + textAddValue
  },
 
  forgot_button: {
    color: col.clrText,
    fontFamily:"Regular",
    marginBottom: 15,
    fontSize:15 + + textAddValue
  },
 
  loginBtn: {
    width: 300,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: col.secondaryColor,
  },
  loginText: {
    color: col.clrText,
    fontFamily:"Bold",
    fontSize:15 + + textAddValue
  },
  titleContainer:{
    flex: 1.5,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  titleText:{
    color: col.clrText,
    fontFamily:"Bold",
    fontSize:40 + textAddValue,
  },
});

const mapStateToProps = (state) => {
  const { propertyReducer } = state
  return { propertyReducer }
};
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    accTypeChange:accTypeChange,
    setLoading:setLoading,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(CostumerLoginScreen);
