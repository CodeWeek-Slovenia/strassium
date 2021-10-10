import React, { useState } from 'react'
import { Text, StyleSheet, Image , FlatList, View, Pressable, TextInput, NumberInput } from 'react-native';
import {Picker} from '@react-native-picker/picker';


const data=[{title:"Palačinke",number:10,ingredients:["Jajca 60x", "Moka 10x","Mleko 20x"]}];

const renderItem = (item) => {
    var ingredients = '';
    item.ingredients.forEach(element => {
        ingredients = ingredients + "\n" + element
    });
    return(
        <View style={styles.itemContainer}>
            <View style={styles.itemTitleContainer}>
                <Text style={styles.itemTitleStyle}>{item.title}</Text>
            </View>
            <View style={styles.itemNumberContainer}>
                <Text style={styles.itemNumberStyle}>{item.number} porcij</Text>
            </View>
            <View  style={styles.ingredientsContainer}>
                <Text style={styles.itemIngredientsStyle}>{ingredients}</Text>
            </View>
        </View>
    );
}

const IngredientCalculatorScreen = ({navigation}) => {
    const [selectedOptions, setSelectedOptions] = useState();
    return (
        <View style={styles.container}>
            <View style={{flex:1,alignItems:'center',justifyContent:'space-evenly'}}>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder="Ime jedi"
                        placeholderTextColor="#003f5c"
                        />
                </View>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder="Število oseb"
                        placeholderTextColor="#003f5c"
                        />
                </View>
            </View>
            <View>
                <FlatList data={data} style={{width:"100%", height:200}}
            renderItem={({item}) =>renderItem(item)}/>
            </View>
            <View style={{flex:1, alignItems:'center',justifyContent:'center',bottom:40}}>
                <Pressable style={styles.loginButtonStyle}>
                    <Text>Poišči!</Text>
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
      },
      itemContainer:{
          flex:1
      },
      itemTitleContainer:{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
      },
      itemImageContainer:{
          flex:1,
        alignItems:'center',
        justifyContent:'center'
      },
      itemImageStyle:{
          width:100,height:100,borderRadius:50
      },
      ingredientsContainer:{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
      },
      itemIngredientsStyle:{
          fontSize: 15
      },
      itemTitleStyle:{
        borderRadius:30,
        borderWidth:1,
        padding:5,
        marginBottom:8,
        fontSize:22,
      },itemNumberStyle:{
          fontSize:18,borderRadius:30,
          borderWidth:1,
          padding:5,
      },
      itemNumberContainer:{
          justifyContent:'center',
          alignItems:'center',marginTop:5
      }
  });

export default IngredientCalculatorScreen;