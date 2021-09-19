import React, { useState } from 'react'
import { Text, StyleSheet, Image , FlatList, View, Pressable, TextInput } from 'react-native';
import {Picker} from '@react-native-picker/picker';


const data=[
    ["Za potrošnike","Za živali"]
];




const FoodPublishScreen = ({navigation}) => {
    const [selectedOptions, setSelectedOptions] = useState();
    return (
        <View style={styles.container}>
            <View style={{flex:2.8,alignItems:'center',justifyContent:'space-evenly'}}>
            <View style={styles.textInputContainer}>
            <TextInput
                style={styles.textInputStyle}
                placeholder="Ime izdelka"
                placeholderTextColor="#003f5c"
                />
                

            </View>
            
            <View style={styles.textInputContainer}>
            <TextInput
                style={styles.textInputStyle}
                placeholder="Količina"
                placeholderTextColor="#003f5c"
                />
                

            </View>
            <View style={styles.textInputContainer}>
            <TextInput
                style={styles.textInputStyle}
                placeholder="Cena(€)"
                placeholderTextColor="#003f5c"
                />
                

            </View>
            <View style={styles.textInputContainer}>
            <TextInput
                style={styles.textInputStyle}
                placeholder="Lokacija"
                placeholderTextColor="#003f5c"
                />
                

            </View>
            <View style={styles.textInputContainer}>
            <Picker
                selectedValue={selectedOptions}
                style={{ height: 50, width: "100%",alignItem:"center" }}//a
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedOptions(itemValue)
                }>
                <Picker.Item label="Za potrošnike" value="potrosniki" />
                <Picker.Item label="Za živali" value="zivali" />
                <Picker.Item label="Za druga podjetja" value="ponudniki" />
                </Picker>
            </View>
            </View>
            <View style={{flex:1, alignItems:'center',justifyContent:'center',bottom:40}}>
                <Pressable style={styles.loginButtonStyle}>
                    <Text>Objavi!</Text>
                </Pressable>
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
          fontSize:22
      },
      TextInputStyle:{backgroundColor: "#FFC0CB",
      borderRadius: 30,
      width: 200,
      height: 45,
      marginBottom: 20,
      alignItems: "center",
      },textInputContainer:{
          height:60,
          width:"80%",
          justifyContent:"space-evenly",
          alignItems:"center",backgroundColor:"white"
      },
      loginButtonStyle:{
          height:70,
          width:"70%",
          borderRadius:35,
          alignItems:'center',
          justifyContent:'center',
          backgroundColor:"white",
          borderWidth:1,
          top:25
      }
  });

export default FoodPublishScreen;