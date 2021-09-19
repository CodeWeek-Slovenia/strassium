import React from 'react'
import { View, Image, StyleSheet } from 'react-native';
import ShoppingListScreen from "../ShoppingListScreen"
import FridgeScreen from '../FridgeScreen'
import RecepiesScreen from '../Recepies'
import SocialMediaScreen from '../SocialMediaScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from "@expo/vector-icons";
import { col } from '../clr';


const Tab = createBottomTabNavigator();

const bottomNavBar = () => {
  return (
      <Tab.Navigator
      screenOptions={{
        tabBarInactiveBackgroundColor: col.clrSecondary,
        tabBarActiveBackgroundColor: col.clrSecondaryDark,
        headerShown: false,
        tabBarActiveTintColor: col.clrBlack,
        tabBarInactiveTintColor: col.clrText
    }}
    >
        <Tab.Screen name="Hladilnik" component={FridgeScreen} options={{
              tabBarIcon: (tabInfo) => {
                return (
                    <Image
                    style={{height:20,width:14}}
                    source={require('../Icons/fridge.png')}
                    />
              );
                }
            }} />
        <Tab.Screen name="Nakupovalni list" component={ShoppingListScreen} options={{
              tabBarIcon: (tabInfo) => {
                return (
                    <Image
                    style={{height:20,width:20}}
                    source={require('../Icons/shopping_cart.png')}
                    />
              );
                }
            }} />
        <Tab.Screen name="Recepti" component={RecepiesScreen} options={{
              tabBarIcon: (tabInfo) => {
                return (
                    <Image
                    style={{height:20,width:20}}
                    source={require('../Icons/restaurant.png')}
                    />
              );
                }
            }}/>
        <Tab.Screen name="Skupnost" component={SocialMediaScreen} options={{
              tabBarIcon: (tabInfo) => {
                return (
                    <Image
                    style={{height:20,width:20}}
                    source={require('../Icons/Community.png')}
                    />
              );
                }
            }}/>
      </Tab.Navigator>
  );
  
}
export default bottomNavBar;
