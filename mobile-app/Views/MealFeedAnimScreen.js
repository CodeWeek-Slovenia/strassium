import React from 'react';
import { Text, StyleSheet, Image , FlatList, View, Pressable } from 'react-native';
import { color } from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import { col } from './clr';
import MainBackground from './CustomBackground'

const data = [
    {username:"Creativno d.o.o",location:"Ljubljana", description:"Ostanki malic",quantity:10,price:1.5},
    {username:"Domišlija d.o.o",location:"Celje",  description:"Neuporabljeno meso",quantity:100,price:0.5},
    {username:"Kuharji d.o.o.",location:"Maribor", description:"Ostanki kuhinje",quantity:42,price:1},
    {username:"Gorenje d.o.o",location:"Velenje", description:"Ostanki menze",quantity:56,price:3},
];

//const textAddValue = 10;

const MealFeedAnimScreen = ({navigation}) => {//adad
  const textAddValue = useSelector(state => state.propertyReducer.size)
    const onAddPress = () =>{
    }
    const pressableItem = (item) => {
        return(
            <Pressable style={styles.mainCardView}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>

          <View style={{marginLeft: 12, justifyContent:'center', flex:1}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text
              style={{
                fontSize: 16 + textAddValue,
                color: 'white',
                fontWeight: 'bold',
              }}>
              {item.description} 
            </Text>
            <Text style={{
                  color: col.subTextColor,
                  fontSize: 14 + textAddValue,
                }}>  [ {item.quantity}kg ]</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',marginTop:2}}>
            <Text
              style={{
                fontSize: 13 + textAddValue,
                color: col.secondaryColor,
              }}>
              {item.username} 
            </Text>
            <Text style={{
                  color: col.subTextColor,
                  fontSize: 13 + textAddValue,
                }}>  [ {item.location} ]</Text>
            </View>
          </View>
          <View style={{flex:1, flexDirection:'row'}}>
            <View style={{flex:1, justifyContent:'center',alignItems:'flex-end'}}>
              
            </View>
          <Pressable
            style={{
              flex:1,
              marginLeft: -30,
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}>
            <Text style={{color: col.mainColor,fontSize:16 + textAddValue,fontWeight:'bold',textAlign:'center'}}>
              {item.price}€ / kg
            </Text>
          </Pressable>
          </View>
          </View>
        </Pressable>    
        );
    }
        return (
            <MainBackground>
            <FlatList
              data={data}
                renderItem={({item}) =>pressableItem(item)}
              />
            </MainBackground>
          );
    };
    const styles = StyleSheet.create({
        mainContainer:{
            flex:8,
          },
          listContainer: {
            flex: 8,
            justifyContent:'center',
            //backgroundColor:col.mainColor
           },
          mainCardView: {
            height: 90,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: col.textColorPrimary,
            borderRadius: 15,
            shadowColor: 'gray',
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 1,
            shadowRadius: 8,
            elevation: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 16,
            paddingRight: 14,
            marginTop: 6,
            marginBottom: 6,
            marginLeft: 20,
            marginRight: 20,
          },
          subCardView: {
            height: 50,
            width: 50,
            borderRadius: 25,
            backgroundColor: 'transparent',
            borderStyle: 'solid',
            alignItems: 'center',
            justifyContent: 'center',
          },
      });
    
export default MealFeedAnimScreen;