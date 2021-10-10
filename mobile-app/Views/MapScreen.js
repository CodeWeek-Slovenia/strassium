import React from 'react';
import { Text, StyleSheet, Image , FlatList, View, Pressable } from 'react-native';
import { col } from './clr';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const customStyle = [
        {
      elementType: 'labels',
      stylers: [
        {
          visibility: 'on',
        },
      ],
    },
    {
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    
  ];

const markerList = [[46.361044, 15.114644],
    [46.364757901681266, 15.10782352256168],
    [46.359828480998594, 15.115728915981636],
    [46.22889983885959, 15.26588473311034],
    [46.22925709047146, 15.302987562521226]
]

const MapScreen = ({navigation,route}) => {
    return (
        <View style={styles.container}>
            <View style={{flex:13}}>
            <MapView style={{flex:1}}
            customMapStyle={customStyle}
          initialRegion={{
              latitude: 46.364757901681266,
              longitude: 15.10782352256168,
              latitudeDelta: 0.1,
              longitudeDelta: 0.11,
          }}
        >
        {markerList.map(marker => 
        (
        <MapView.Marker

            coordinate={{latitude: marker[0],
            longitude: marker[1]}}
            title={"Arkada"}
            description={"No waste certificate"}
            onPress={() => console.log('pressed')}
            
            
         >
             <Image source={require('../Views/Icons/map_pin.png')} style={{height: 70, width:70 }} />
         </MapView.Marker>
        ))}
      </MapView>
            </View>
        </View>
      );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: col.clrMain,
    },imageContainer: {
        height:"100%",
        width:"100%"
      },
      title:{
          fontFamily: "Bold",
          color:col.clrText,
          fontSize:22,
          padding:8,
          borderRadius:30,
          borderWidth:1
      }
  });

export default MapScreen;