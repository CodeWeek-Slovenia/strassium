import React, { cloneElement, useState } from "react";
import { Image, View, StyleSheet, Text, Pressable} from "react-native";
import { loggingOut } from "../Firebase/methods";
import { col } from "./clr";
import MainBackground from './CustomBackground'

import firebase from '../Firebase/firebase';
import firebase_ from 'firebase'
import { useSelector } from "react-redux";
import { TextInput } from "react-native-gesture-handler";

//const textAddValue = 10;

const MainScreen = ({ navigation }) => {
    const [code_,setCode] = useState('');
    const textAddValue = useSelector(state => state.propertyReducer.size)
    const auth = firebase.auth();
    const onLogout = async () => {
        try {
            console.log('logging out')
              await loggingOut();
              
          } catch (error) {
            console.log(error.message)
          }
    }
    const user = firebase.auth().currentUser;

    function setAll(code) {
        firebase.database().ref('storageCode/' + user.uid).set({
            storageCodeNum:code
        });
      }
    const changeUserCode = () => {
        setAll(code_)
    }
    return (
        <MainBackground style={styles.container}>
            <View style={styles.profilePictureContainer}>
                <Image source={require("./Icons/profile_blank.png")} style={styles.profilePictureStyle} />
            </View>
            <View style={styles.textContainer}>
                <Text style={[styles.textStyle,{fontSize:22 + textAddValue}]}>{auth.currentUser.displayName}</Text>
                <Text style={[styles.textSubStyle2,{
        fontSize:20 + textAddValue,}]}>Profile type: Consumer</Text>
                <Text style={[styles.textSubStyle,{
        fontSize:15 + textAddValue,}]}>Storage code: {auth.currentUser.uid}</Text>
            </View>
            <View style={{flex:8,alignItems:"center",justifyContent:"flex-start"}}>
            <TextInput
                    style={{fontSize:15+ textAddValue,height:55,width:'85%',textAlign:'center',textAlignVertical:'center',borderRadius:25,borderWidth:0.5,color:col.mainColor,backgroundColor:col.textColorPrimary}}
                    placeholder="STORAGE CODE"
                    placeholderTextColor={col.mainColor}
                    onChangeText={(code_) => setCode(code_)}
                    />
                <Pressable style={{top:30}} onPress={changeUserCode}><Text style={{fontSize:19+ textAddValue}}>JOIN</Text></Pressable>
            </View>
            <View>
            
            </View>
            <View style={{flex:1,alignItems:"center",justifyContent:"flex-start"}}>
                <Pressable onPress={onLogout}>
                    <Text style={{fontSize:15 + textAddValue}}>LOGOUT</Text>
                </Pressable>
            </View>
        </MainBackground>
    );
  };
const styles = new StyleSheet.create({
    container:{
        backgroundColor:col.mainColor,
        flex:1
    },
    profilePictureContainer:{
        flex:6,
        justifyContent:"flex-start",
        alignItems:"center",
        marginTop:20
    },
    profilePictureStyle:{
        height: 200,
        width:200,
        borderRadius:100,
    },
    textContainer:{
        flex:5,
        justifyContent:"flex-start",
        alignItems:"center",
    },
    textStyle:{
        color: col.clrText,
        fontFamily:"Bold",
        
    },textSubStyle:{
        color: col.clrText,
        fontFamily:"Regular",
        paddingTop:4
    },
    textSubStyle2:{
        color: col.clrText,
        fontFamily:"Regular",
        paddingTop:10
    }
});

export default MainScreen;