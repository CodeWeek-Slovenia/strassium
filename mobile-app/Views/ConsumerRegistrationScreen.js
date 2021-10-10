import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { easeGradient } from 'react-native-easing-gradient'
import {col} from "./clr.js"
import { accTypeChange } from "./reduxComponents/accTypeAction.js";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  Pressable,
  BackHandler
} from "react-native";
import SomeComponent from "./CustomBackground.js";
import methods, { registration, signIn } from '../Firebase/methods'
import { connect } from "react-redux";
import { accType } from "./Values/accType.js";
import { bindActionCreators } from "redux";


const textAddValue = 0;

class CostumerRegistrationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'none',
      password:'',
      name:'none',
      surname:'',
      loadingStatus:false
    };
  }

  // componentDidMount() {
  //   BackHandler.addEventListener("hardwareBackPress", () => {this.props.accTypeChange(accType.NONE)});
  // }

  // componentWillUnmount() {
  //   BackHandler.removeEventListener("hardwareBackPress",() => {this.props.accTypeChange(accType.NONE)} );
  // }
  // backAction = () =>{
  //   this.props.accTypeChange(accType.NONE)
  // }
  // componentDidMount() {
  //   this.backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     this.backAction
  //   );
  // }

  // componentWillUnmount() {
  //   this.backHandler.remove();
  // }
  render(){
  const onRegistrationClick = async () => {
    try {
      if (this.state.email !== '' && this.state.password !== '' && this.state.name !== '') {

        await registration(this.state.email,this.state.password,this.state.name)
        this.props.navigation.navigate('ConsumerLogin')
      
      }
    } catch (error) {
      console.log(error.message)
    }
  }


  const onBackClick = () =>{
    this.props.accTypeChange(accType.NONE)
  }
  const onLoginClick = async () =>{
      this.props.navigation.navigate('ConsumerLogin')
  }

  return (

<View style={styles.container}>
{ <SomeComponent>
  <View style={styles.container}>
      <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Registration</Text>
      </View>
      <View style={styles.formContainer}>
      <View style={styles.inputView}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder="Full Name"
                    placeholderTextColor="#003f5c"
                    onChangeText={(name) => this.setState({name:name})}
                    />
                </View>
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
            <Pressable onPress={onLoginClick}>
                <Text style={styles.forgot_button}>Login</Text>
            </Pressable>
            </View>

          
      </View>
      <View style={{flex:2,alignItems: "center",justifyContent: "flex-start",top:10}}>
                 
            <TouchableOpacity style={styles.loginBtn} onPress={onRegistrationClick}>
                <Text style={styles.loginText}>CREATE ACCOUNT</Text>
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
    flex: 1
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
    accTypeChange:accTypeChange
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(CostumerRegistrationScreen);
