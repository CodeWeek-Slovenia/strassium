import * as React from 'react';
import { Button, Text, View, TouchableOpacity, style, Platform } from 'react-native';
import BottomNavBar from './Components/BottomNavBar';
import ProileScreen from './ProfileScreen';
import FridgeScreen from './FridgeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import bottomNavBarComp from './Components/BottomNavBarComp';


import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import bottomNavBar from './Components/BottomNavBar';
import { col } from './clr';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


function MyDrawer() {
  return (
      <Drawer.Navigator screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: col.clrText,
        drawerInactiveBackgroundColor: "transparent",
        drawerActiveBackgroundColor: col.clrSecondary,
        drawerShown: false,
        drawerActiveTintColor: col.clrBlack,
        drawerInactiveTintColor: col.clrText,
      headerStyle: {
        backgroundColor: col.clrSecondary,
      },
      contentOptions:{
          alignItems:"center",
      }

    }}> 
      <Drawer.Screen name="POTROŠNIKI" component={bottomNavBar} />
      <Drawer.Screen name="PONUDNIKI" component={bottomNavBarComp} />
      <Drawer.Screen name="PROFIL" component={ProileScreen} />
    </Drawer.Navigator>
    
  );
}

const MainScreen = () => {//adad
    return (
        <MyDrawer></MyDrawer>
      );
};

export default MainScreen;
