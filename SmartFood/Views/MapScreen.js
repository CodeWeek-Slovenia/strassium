import React from 'react';
import { Text, StyleSheet, Image , FlatList, View, Pressable } from 'react-native';


const MapScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.title}>Ponudniki z eko certifikatom</Text>
            </View>
            <View style={{flex:13}}>
            <Image source={require("./Icons/map.png")} style={styles.imageContainer}></Image>
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
      title:{
          fontSize:22,
          padding:8,
          borderRadius:30,
          borderWidth:1
      }
  });

export default MapScreen;