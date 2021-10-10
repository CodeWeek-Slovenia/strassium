import React from 'react'
import { View, Image, StyleSheet } from 'react-native';
import ShoppingListScreen from "../ShoppingListScreen"
import RecepiesScreen from '../Recepies'
import MealFeedScreen from '../MealFeedScreen';
import MealFeedAnimScreen from '../MealFeedAnimScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from "@expo/vector-icons";
import MapScreen from '../MapScreen';
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
        tabBarStyle:{borderTopWidth:0}
    }}
    >
        <Tab.Screen name="For you" component={MealFeedScreen} options={{
              tabBarIcon: (tabInfo) => {
                return (
                    <Image
                    style={{height:20,width:20}}
                    source={require('../Icons/hrana_w.png')}
                    />
              );
                }
            }} />
        <Tab.Screen name="Animal fodder" component={MealFeedAnimScreen} options={{
              tabBarIcon: (tabInfo) => {
                return (
                    <Image
                    style={{height:20,width:20}}
                    source={require('../Icons/pujs_w.png')}
                    />
              );
                }
            }} />
        <Tab.Screen name="Map of providers" component={MapScreen} options={{
            tabBarIcon: (tabInfo) => {
            return (
                <Image
                style={{height:20,width:20}}
                source={require('../Icons/maps_w.png')}
                />
            );
            }
        }}/>
      </Tab.Navigator>
  );
  
}
export default bottomNavBar;
