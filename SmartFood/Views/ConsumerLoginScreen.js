import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {col} from "./clr.js"

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
 
const CostumerLoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const onLoginClick = () => {
    navigation.navigate("Main");
  }
  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Prijava</Text>
        </View>
        <View style={styles.formContainer}>
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="Email"
                placeholderTextColor="#003f5c"
                onChangeText={(email) => setEmail(email)}
                />
            </View>
    
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="Geslo"
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
                />
            </View>
    
            <TouchableOpacity>
                <Text style={styles.forgot_button}>Pozabljeno geslo?</Text>
            </TouchableOpacity>
    
            <TouchableOpacity style={styles.loginBtn} onPress={onLoginClick}>
                <Text style={styles.loginText}>PRIJAVA</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: col.clrMain,
  },
 formContainer:{
    flex: 4,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
 },
  inputView: {
    backgroundColor: col.clrLight,
    borderRadius: 30,
    width: 200,
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
 
  TextInput: {
    color: col.clrText,
    fontFamily:"Light",
    height: 50,
    flex: 1,
  },
 
  forgot_button: {
    color: col.clrText,
    fontFamily:"Regular",
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: 300,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: col.clrSecondary,
  },
  loginText: {
    color: col.clrText,
    fontFamily:"Bold",
  },
  titleContainer:{
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  titleText:{
    color: col.clrText,
    fontFamily:"Bold",
    fontSize:40,
  },
});

export default CostumerLoginScreen;