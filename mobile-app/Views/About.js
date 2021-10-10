import React, { cloneElement, useState } from "react";
import { Image, View, StyleSheet, Text, Pressable, TouchableOpacity} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { col } from "./clr";
import MainBackground from './CustomBackground'
import * as Linking from 'expo-linking';
import { useSelector } from "react-redux";

//const textAddValue = 10;
const About = ({ navigation }) => {
    const textAddValue = useSelector(state => state.propertyReducer.size)
    return (
        <MainBackground style={styles.container}>
            <ScrollView>
            <View style={styles.paragraph}>
                <Text style={[styles.headingText,{fontSize: 20 + textAddValue}]}>Too much food waste</Text>
                <Text style={[styles.normalText,{
        fontSize:15 + textAddValue}]}>Food waste is an issue of importance 
                to global food security and good environmental governance, directly linked 
                with environmental (e.g. energy, climate change, water), economic 
                (e.g. resource efficiency, increasing costs, consumption, waste management) 
                and social (e.g. health, equality) impacts. Estimated food waste in EU-28 in
                 2012 was 173 kg/person.</Text>
            </View>
            <View style={styles.paragraph}>
                <Text style={[styles.headingText,{fontSize: 20 + textAddValue}]}>Our solution</Text>
                <Text style={[styles.normalText,{
        fontSize:15 + textAddValue}]}>
                We want to emphasize people to use all the food they have in the storage. 
                The app automatically reminds you before the expiration date of the food 
                you got in the storage. Then suggests you recipes you can use that food. 
                You can also see leftover prepared meals in restaurants, hotel or companies 
                in module Providers. They are sold for cheaper price, so food doesn’t go to waste. 
                All food is safe to use and maintained under all health regulations.
                </Text>
            </View>

            <View style={styles.paragraph}>
                <Text style={[styles.headingText,{fontSize: 20 + textAddValue}]}>Health regulations</Text>
                <Text style={[styles.normalText,{
        fontSize:15 + textAddValue}]}>
                All food health regulations our partners in the app follow you can find here: 
                </Text>
                 <TouchableOpacity onPress={() => {Linking.openURL('https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02004R0852-20090420&from=SL')}}>
                    <Text style={{textDecorationLine:"underline",marginTop:2,fontSize:15 + textAddValue}}>
                    https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02004R0852-20090420&from=SL
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.paragraph}>
                <Text style={[styles.headingText,{fontSize: 20 + textAddValue}]}>Food waste certificate</Text>
                <Text style={[styles.normalText,{
        fontSize:15 + textAddValue}]}>
                In collaboration with Slovenian Tourism Directorate, we developed and 
                published two certificates. Only restaurants, hotels, and companies that 
                follow our requirements will get the certificate. Every year we will look 
                into food records for past year and decide if they can still hold the 
                certificate.
                </Text>
            </View>
            <View style={styles.paragraph, styles.endParagraph}>
                <Text style={[styles.headingText,{fontSize: 20 + textAddValue}]}>Developers</Text>
                <Text style={[styles.normalText,{
        fontSize:15 + textAddValue}]}>
                We are a team from Slovenian high school in Velenje. We participated 
                in EU code week Hackathon of Slovenia and qualified for the final 
                hackathon competition in October 2021.
                </Text>
                <TouchableOpacity onPress={() => {Linking.openURL('https://www.strassium.com')}}>
                    <Text style={{textDecorationLine:"underline",marginTop:2,fontSize:15 + textAddValue}}>
                    https://www.strassium.com
                    </Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </MainBackground>
    );
  };
const styles = new StyleSheet.create({
    container:{
        backgroundColor:col.mainColor,
        flex:1
    },
    paragraph:{
        paddingHorizontal:20,
        flex:6,
        justifyContent:"flex-start",
        marginTop:20
    },
    headingText:{
        color: '#000000',
        fontFamily:"Bold",
        
    },
    normalText:{
        color: col.clrText,
        fontFamily: "Regular",
    },
    endParagraph:{
        paddingHorizontal:20,
        paddingBottom: 50,
        flex:6,
        justifyContent:"flex-start",
        marginTop:20
    },
    textContainer:{
        flex:5,
        justifyContent:"flex-start",
        alignItems:"center",
    }
});

export default About;