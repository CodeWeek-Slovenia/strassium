import React from 'react'
import { View, Image, Text, Pressable } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FoodPublishScreen from '../FoodPublish';
import EcoCertificateScreen from '../EcoCertificatesScreen';
import FoodFeed from '../FoodFeed';
import IngredientCalculatorScreen from '../IngredientCalculatorScreen';
import { col } from '../clr';
import { IconButton } from 'react-native-paper';


const Tab = createBottomTabNavigator();

const bottomNavBar = ({navigation}) => {
  return (
      <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveBackgroundColor:col.textColorPrimary,
        tabBarActiveBackgroundColor:col.textColorPrimary,
        tabBarInactiveTintColor:'white',
        tabBarActiveTintColor:col.secondaryColor,
        tabBarStyle:{borderTopWidth:0},

    }}
    >
        <Tab.Screen name="Posts" component={FoodFeed} options={{
              tabBarIcon: (tabInfo) => {
                return (
                    <Image
                    style={{height:20,width:20}}
                    source={require('../../Icons/like_w.png')}
                    />
              );
                }
            }} />
        
        <Tab.Screen name="Certificates" component={EcoCertificateScreen} options={{
              tabBarIcon: (tabInfo) => {
                return (
                    <Image
                    style={{height:20,width:20}}
                    source={require('../../Icons/certificate_w.png')}
                    />
              );
                }
            }}/>
        <Tab.Screen 
        name = "Food publish"
        component={FoodPublishScreen}
        options={{
        tabBarButton:()=>
        <View style={{bottom:25,height:50,width:'20%',left:'40%',position: 'absolute',backgroundColor:'transparent',justifyContent:'center',alignContent:'center',alignItems:'center'}}>
          <Pressable style={{
              height: 60,
              width: 60,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor:col.secondaryColor,
              elevation:5}} onPress={() => navigation.navigate('Food publish')}>
            <Image  style={{width:30,height:30}} source={require('../../Icons/add.png')}/>
          </Pressable>
          </View>
        }}/>
      </Tab.Navigator>
  ); 
  
}
export default bottomNavBar;
