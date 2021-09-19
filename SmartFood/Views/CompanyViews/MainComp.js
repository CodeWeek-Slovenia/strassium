import * as React from 'react';
import { Button, Text, View, TouchableOpacity, style } from 'react-native';
import BottomNavBar from './Components/BottomNavBar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import bottomNavBarComp from './Components/BottomNavBarComp';


import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import bottomNavBar from './Components/BottomNavBar';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions={{
        headerTitleAlign: 'center',
        contentOptions:{
            alignItems:"center"
        }
        
      }}> 
      <Drawer.Screen name="Poslovni ponudniki" component={bottomNavBar} />
      <Drawer.Screen name="Potrošniki" component={bottomNavBarComp} />
    </Drawer.Navigator>
  );
}

const MainCompScreen = () => {//adad
    return (
        <MyDrawer></MyDrawer>
      );
};

export default MainCompScreen;