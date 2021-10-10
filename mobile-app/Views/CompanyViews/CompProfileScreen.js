import React, { cloneElement, useState } from "react";
import { Image, View, StyleSheet, Text, Pressable} from "react-native";
import { loggingOut } from "../../Firebase/methods";
import { col } from "./clr";
import MainBackground from '../CustomBackground'

import firebase from '../../Firebase/firebase';
import { useSelector } from "react-redux";


const ProfileScreenProvider = ({ navigation }) => {
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
    return (
        <MainBackground style={styles.container}>
            <View style={styles.profilePictureContainer}>
                <Image source={require("../Icons/gorenje_gostinstvo.png")} style={styles.profilePictureStyle} />
                <Text style={{
        color: col.clrText,
        fontFamily:"Bold",
        fontSize:22 + textAddValue,
        top:10}}>{auth.currentUser.displayName}</Text>
                <Text style={{
        color: col.clrText,
        fontFamily:"Regular",
        fontSize:20 + textAddValue,
        paddingTop:10,
        top:10
    }}>Profile type: Provider</Text>
            </View>
            <View style={styles.textContainer}>
                
                
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
        flex:1,
        justifyContent:'flex-start'
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
        flex:1,
        justifyContent:"flex-start",
        alignItems:"center",
    },
});

export default ProfileScreenProvider;