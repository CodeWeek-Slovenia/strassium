import React from 'react'
import { View, Image, StyleSheet } from 'react-native';
import ShoppingListScreen from "../ShoppingListScreen"
import FridgeScreen from '../FridgeScreen'
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
        tabBarInactiveBackgroundColor: col.clrSecondary,
        tabBarActiveBackgroundColor: col.clrSecondaryDark,
        headerShown: false,
        tabBarActiveTintColor: col.clrBlack,
        tabBarInactiveTintColor: col.clrText
    }}
    >
        <Tab.Screen name="Obroki zate" component={MealFeedScreen} options={{
              tabBarIcon: (tabInfo) => {
                return (
                    <Image
                    style={{height:20,width:20}}
                    source={require('../Icons/hrana.png')}
                    />
              );
                }
            }} />
        <Tab.Screen name="Obroki za živino" component={MealFeedAnimScreen} options={{
              tabBarIcon: (tabInfo) => {
                return (
                    <Image
                    style={{height:20,width:20}}
                    source={require('../Icons/pujs.png')}
                    />
              );
                }
            }} />
        <Tab.Screen name="Zemljevid eko dejavnosti" component={MapScreen} options={{
            tabBarIcon: (tabInfo) => {
            return (
                <Image
                style={{height:20,width:20}}
                source={require('../Icons/maps.png')}
                />
            );
            }
        }}/>
      </Tab.Navigator>
  );
  
}
export default bottomNavBar;
