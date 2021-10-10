import * as React from 'react';
import { Button, Text, View, TouchableOpacity, style } from 'react-native';
import BottomNavBar from './Components/BottomNavBar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import bottomNavBarComp from './Components/BottomNavBarComp';


import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import bottomNavBar from './Components/BottomNavBar';
import {col} from '../clr'
import ProfileScreen from './CompProfileScreen';
import About from '../About';
import CustomDrawer from './CustomDrawer'
import TipsComp from './TipsComp';
import SettingsScreen from '../Settings'

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
    
        
      }}> 
      <Drawer.Screen name="Provider" component={bottomNavBar} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Tips" component={TipsComp} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MainCompScreen = () => {//adad
    return (
        <MyDrawer></MyDrawer>
      );
};

export default MainCompScreen;