import React from 'react';
import { Text, StyleSheet, Image , FlatList, View, Pressable } from 'react-native';
import { ceil } from 'react-native-reanimated';

const data1 = [{condition:"Čestitamo, pripomorete k boljšemu okolju :)"}];

const EcoCertificateScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{
          alignContent:'center',
          alignItems:'center',
          justifyContent:'center', marginTop:10}}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>VELJAVEN EKO CERTIFIKAT!</Text>
            </View>
            </View>
            <View style={{flex:8}}>
                <View style={{flex:3,alignItems:'center'}}>
                <FlatList
                    data={data1}
                        renderItem={({item}) =><Text style={styles.conditionStyle}>{item.condition}</Text>}
                />
                <View style={{height:'80%',width:"50%",alignItems:'center',justifyContent:'flex-end',alignContent:'center'}}>
                    <Image source={require('../Icons/eco.png')} style={{width:"100%",height:"100%"}}/>
                </View>
                </View>
                <View style={{flex:6,alignItems:'center',justifyContent:'center'}}>
                    <Text style={styles.subTitleStyle}>Zemljevid</Text>
                    <View style={{width:"95%",height:"80%",borderWidth:0.5}}>
                    <Image source={require("../Icons/mapa1.png")} style={{width:"100%",height:"100%"}}></Image>
                    </View>
                </View>
            </View>
        </View>
      );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
    },imageContainer: {
        height:"100%",
        width:"100%"
      },
      titleContainer:{
          height:50,
          alignContent:'center',
          alignItems:'center',
          justifyContent:'center',
          borderRadius:25,
          borderWidth:1,
          paddingHorizontal:10,
      },
      title:{
          fontSize:20,
      },
      conditionStyle:{
        fontSize:16,
      },
      subTitleStyle:{
        fontSize:16,
        bottom:5
      }
    });

export default EcoCertificateScreen;