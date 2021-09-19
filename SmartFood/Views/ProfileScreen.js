import React, { cloneElement, useState } from "react";
import { Image, View, StyleSheet, Text, Pressable} from "react-native";
import { col } from "./clr";

const MainScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.profilePictureContainer}>
                <Image source={require("./Icons/aljaz_sovic.png")} style={styles.profilePictureStyle} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textStyle}>Aljaž Sovič</Text>
                <Text style={styles.textSubStyle2}>Vrsta profila: Potrošnik</Text>
                <Text style={styles.textSubStyle}>Koda shrambe: XRP69420</Text>
            </View>
            <View style={{flex:8,alignItems:"center",justifyContent:"flex-start"}}>
                <Image source={require("./Icons/qr.png")}/>
            </View>
        </View>
    );
  };
const styles = new StyleSheet.create({
    container:{
        backgroundColor:col.clrMain,
        flex:1
    },
    profilePictureContainer:{
        flex:8,
        justifyContent:"flex-end",
        alignItems:"center"
    },
    profilePictureStyle:{
        height: 200,
        width:200,
        borderRadius:100,
    },
    textContainer:{
        flex:5,
        justifyContent:"center",
        alignItems:"center"
    },
    textStyle:{
        color: col.clrText,
        fontFamily:"Bold",
        fontSize:22
    },textSubStyle:{
        color: col.clrText,
        fontFamily:"Regular",
        fontSize:15,
        paddingTop:4
    },
    textSubStyle2:{
        color: col.clrText,
        fontFamily:"Regular",
        fontSize:20,
        paddingTop:10
    }
});

export default MainScreen;