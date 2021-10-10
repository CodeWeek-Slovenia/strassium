import React from 'react'
import { View, Image, StyleSheet } from 'react-native';
import ShoppingListScreen from "../ShoppingListScreen"
import FridgeScreen from '../FridgeScreen'
import RecepiesScreen from '../Recepies'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecepiesScan from '../RecepiesScan';
import test from '../test'
import test1 from '../test1'

import { Ionicons } from "@expo/vector-icons";
import { col } from '../clr';


const Tab = createBottomTabNavigator();

const bottomNavBar = () => {
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
        <Tab.Screen name="Storage" component={FridgeScreen} options={{
              tabBarIcon: (tabInfo) => {
                return (
                    <Image
                    style={{height:20,width:14}}
                    source={require('../Icons/fridge_w.png')}
                    />
              );
                }
            }} />
        <Tab.Screen name="Shopping list" component={ShoppingListScreen} options={{
              tabBarIcon: (tabInfo) => {
                return (
                    <Image
                    style={{height:20,width:20}}
                    source={require('../Icons/shopping_cart_w.png')}
                    />
              );
                }
            }} />
        <Tab.Screen name="Recipes" component={RecepiesScreen} options={{
              tabBarIcon: (tabInfo) => {
                return (
                    <Image
                    style={{height:20,width:20}}
                    source={require('../Icons/restaurant_w.png')}
                    />
              );
                }
            }}/>
        <Tab.Screen name="Receipt scanning" component={RecepiesScan} options={{
              tabBarIcon: (tabInfo) => {
                return (
                    <Image
                    style={{height:20,width:20}}
                    source={require('../Icons/receitScanning_w.png')}
                    />
              );
                }
            }}/>
      </Tab.Navigator>
  );
  
}
export default bottomNavBar;
