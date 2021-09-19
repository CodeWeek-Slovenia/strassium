import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, Image , FlatList, View, Pressable, TextInput, NumberInput, SafeAreaView, ActivityIndicator  } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { col } from './clr';


//const data=[{title:"Spagetti", imageUrl:"https://www.edamam.com/web-img/39d/39d10063c69dd8c817be2c7f44175379.jpg",ingredients:["egg", "flour","milk"]},{title:"Spagetti", imageUrl:"https://www.edamam.com/web-img/39d/39d10063c69dd8c817be2c7f44175379.jpg",ingredients:["egg", "flour","milk"]}];

const movieURL = "https://api.edamam.com/api/recipes/v2?type=public&q=sugar&app_id=61b96bf9&app_key=a28fc7e347025174ec9cfe2ea3fcfc63&field=label&field=image&field=ingredientLines";



const RecepiesScreen = ({navigation}) => {


  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getData = () => {
    //const [title, setTitle] = useState([]);
  
    useEffect(() => {
      if(isLoading == true){
      fetch(movieURL)
      .then((response) => response.json())
      .then((json) => {
        //console.log(json)
        const rec = [];
        for (let index = 0; index < 10; index++) {
          rec.push({title: json.hits[index].recipe.label, img: json.hits[index].recipe.image, ingr: json.hits[index].recipe.ingredientLines})
        }
        setData(rec)
      })
      .catch((error) => alert(error))
      .finally(setLoading(false));
      }
    });
  }
  const onClick = (ingredients) =>{
    navigation.jumpTo('Nakupovalni list', { list: ingredients });
  }
  
  
  const renderItem = (item) => {
      var ingredients = 'Ingredients:';
      item.ingr.forEach(element => {
          ingredients = ingredients + "\n" + element
      });
      return(
          <View style={styles.itemContainer}>
              <View style={styles.itemTitleContainer}>
                  <Text style={styles.itemTitleStyle}>{item.title}</Text>
              </View>
              <View style={styles.itemImageContainer}>
                  <Image  style={styles.itemImageStyle} source={{uri: item.img}}/>
              </View>
              <View  style={styles.ingredientsContainer}>
                  <Text style={styles.itemIngredientsStyle}>{ingredients}</Text>
              </View>
              <View style={{alignItems:'center',justifyContent:'center'}}>
                <Pressable style={{alignItems:'center',justifyContent:'center',borderWidth:1,
          borderRadius:20,marginTop:10,marginBottom:60 }} onPress={() => onClick(item.ingr)}>
                  <Image style={styles.imageStyle} source={require('./Icons/add.png')}/>
                  </Pressable>
              </View>
          </View>
      );
  }
    getData()
    return (
      <SafeAreaView style={styles.container}>
      {isLoading ? ( <ActivityIndicator /> ) : (<View style={styles.container}>
            <View style={{flex:1}}>
                <FlatList data={data} style={styles.listStyle}
            renderItem={({item}) =>renderItem(item)}/>
            </View>
        </View>)}
    </SafeAreaView>
      );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: col.clrMain,
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
        justifyContent:'center',
      },
      itemImageStyle:{
          width:"80%",height:350,borderRadius:20
      },
      ingredientsContainer:{
          flex:1,
          alignItems:'center',
          justifyContent:'center',
      },
      itemIngredientsStyle:{
          fontSize: 17,
          textAlign:'center',
          borderWidth:1,
          borderRadius:10,
          padding:3,
          marginTop:10
      },
      itemTitleStyle:{
        borderRadius:30,
        borderWidth:1,
        padding:5,
        marginBottom:8,
        fontSize:25
      },listStyle:{
        marginTop:10
      },
      imageStyle:{
        width:40,
        height:40,
      }
  });

export default RecepiesScreen;