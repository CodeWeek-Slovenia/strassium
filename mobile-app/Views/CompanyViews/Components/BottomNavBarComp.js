import React from 'react'
import { View, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import RecepiesScreen from '../../Recepies';
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
        <Tab.Screen name="Priljubljeni recepti" component={RecepiesScreen} options={{
              tabBarIcon: (tabInfo) => {
                return (
                    <Image
                    style={{height:20,width:20}}
                    source={require('../../Icons/restaurant.png')}
                    />
              );
                }
            }} />
      </Tab.Navigator>
  );
  
}
export default bottomNavBar;
