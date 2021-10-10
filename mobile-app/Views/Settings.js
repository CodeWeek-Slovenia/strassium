import React, { cloneElement, useState } from "react";
import { Image, View, StyleSheet, Text, Pressable, TouchableOpacity} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { col } from "./clr";
import MainBackground from './CustomBackground'
import * as Linking from 'expo-linking';
import { useDispatch, useSelector } from "react-redux";

//const textAddValue = 10;
const Settings = ({ navigation }) => {
    const dispatch = useDispatch();
    const size = useSelector(state => state.propertyReducer.size)
    const textAddValue = useSelector(state => state.propertyReducer.size)
    return (
        <MainBackground style={styles.container}>
            <View style={{flex:2}}/>
            <View style={{flex:2,justifyContent:"space-evenly",alignItems:"center"}}>
                <Pressable style={{justifyContent:"center", width:300, padding:10 ,flex:3, borderRadius:15, shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
    borderRadius:100,
    backgroundColor:'#484848',alignItems:"center",marginVertical:10}} onPress={() => dispatch({type:'SET_SIZE_UP',payload:0})}><Text style={{fontSize:15 + size,color:col.mainColor}}>INCREASE TEXT SIZE</Text></Pressable>
                <Pressable style={{justifyContent:"center", width:300, padding:10 ,flex:3, borderRadius:15, shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
    borderRadius:100,
    backgroundColor:'#484848',alignItems:"center",marginVertical:10}} onPress={() => dispatch({type:'SET_SIZE_DOWN',payload:0})}><Text style={{fontSize:15 + size,color:col.mainColor}}>DECREASE TEXT SIZE</Text></Pressable>
            </View>
            <View style={{flex:1}}/>
            <View style={{flex:2,justifyContent:"space-evenly",alignItems:"center"}}>
                <Pressable style={{justifyContent:"center", width:300, padding:10 ,flex:3, borderRadius:15, shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
    borderRadius:100,
    backgroundColor:'#484848',alignItems:"center",marginVertical:10}} onPress={() => dispatch({type:'SET_DYSLECTIC',payload:true})}><Text style={{fontSize:15 + size,color:col.mainColor}}>DYSLECTIC OFF</Text></Pressable>
                <Pressable style={{justifyContent:"center", width:300, padding:10 ,flex:3, borderRadius:15, shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
    borderRadius:100,
    backgroundColor:'#484848',alignItems:"center",marginVertical:10}} onPress={() => dispatch({type:'SET_DYSLECTIC',payload:false})}><Text style={{fontSize:15 + size,color:col.mainColor}}>DYSLECTIC ON</Text></Pressable>
            </View>
            <View style={{flex:2}}/>
        </MainBackground>
    );
  };
const styles = new StyleSheet.create({
    container:{
        backgroundColor:col.mainColor,
        flex:1
    },
    
});

export default Settings;