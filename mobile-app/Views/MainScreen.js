import * as React from 'react';
import { Button, Text, View, TouchableOpacity, style, Platform, Settings } from 'react-native';
import BottomNavBar from './Components/BottomNavBar';
import ProileScreen from './ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import bottomNavBarComp from './Components/BottomNavBarComp';
import About from './About';
import TipsScreen from './TipsScreen'
import SettingsScreen from './Settings'

import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import bottomNavBar from './Components/BottomNavBar';
import { col } from './clr';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MyDrawer() {
  return (
      <Drawer.Navigator screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        drawerInactiveBackgroundColor: "transparent",
        drawerActiveBackgroundColor: col.clrSecondary,
        drawerShown: false,
        drawerActiveTintColor: col.textColorPrimary,
        drawerInactiveTintColor: col.textColorPrimary,
        
      headerStyle: {
        backgroundColor: col.textColorPrimary,
      },
      contentOptions:{
          alignItems:"center",
          backgroundColor:'blue',
      }

    }}> 
      <Drawer.Screen name="CONSUMER" component={bottomNavBar} />
      <Drawer.Screen name="PROVIDER" component={bottomNavBarComp} />
      <Drawer.Screen name="PROFILE" component={ProileScreen} />
      <Drawer.Screen name="TIPS" component={TipsScreen} />
      <Drawer.Screen name="ABOUT" component={About} />
      <Drawer.Screen name="SETTINGS" component={SettingsScreen} />
    </Drawer.Navigator>
    
  );
}

const MainScreen = () => {//adad
    return (
        <MyDrawer></MyDrawer>
      );
};

export default MainScreen;
