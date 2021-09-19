import React from 'react'
import { View, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FoodPublishScreen from '../FoodPublish';
import EcoCertificateScreen from '../EcoCertificatesScreen';
import SocialMediaCompScreen from '../SocialMediaComp';
import IngredientCalculatorScreen from '../IngredientCalculatorScreen';


const Tab = createBottomTabNavigator();

const bottomNavBar = () => {
  return (
      <Tab.Navigator
      screenOptions={{
        headerShown: false,
    }}
    >
        <Tab.Screen name="Kalkulacija" component={IngredientCalculatorScreen} options={{
              tabBarIcon: (tabInfo) => {
                return (
                    <Image
                    style={{height:20,width:20}}
                    source={require('../../Icons/kalkulator.png')}
                    />
              );
                }
            }} />
        <Tab.Screen name="Objava" component={FoodPublishScreen} options={{
              tabBarIcon: (tabInfo) => {
                return (
                    <Image
                    style={{height:20,width:20}}
                    source={require('../../Icons/like.png')}
                    />
              );
                }
            }} />
        <Tab.Screen name="Eko certifikati" component={EcoCertificateScreen} options={{
              tabBarIcon: (tabInfo) => {
                return (
                    <Image
                    style={{height:20,width:20}}
                    source={require('../../Icons/certificate.png')}
                    />
              );
                }
            }}/>
        <Tab.Screen name="Skupnost" component={SocialMediaCompScreen} options={{
              tabBarIcon: (tabInfo) => {
                return (
                    <Image
                    style={{height:20,width:20}}
                    source={require('../../Icons/Community.png')}
                    />
              );
                }
            }}/>
      </Tab.Navigator>
  );
  
}
export default bottomNavBar;
