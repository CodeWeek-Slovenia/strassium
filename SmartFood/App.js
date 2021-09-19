import * as React from 'react';
import { View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EntracneScreen from './Views/EntranceScreen';
import ConsumerLoginScreen from './Views/ConsumerLoginScreen';
import MainScreen from './Views/MainScreen';
import CompanyLoginScreen from './Views/CompanyViews/CompanyLoginScreen';
import MainCompScreen from './Views/CompanyViews/MainComp';
//AppLoading component
import AppLoading from "expo-app-loading";
//fonts: Roboto_400Regular, Roboto_500Medium, Roboto_700Bold
import { useFonts, Roboto_100Thin, Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, Roboto_900Black } from '@expo-google-fonts/roboto';


const Stack = createNativeStackNavigator();

function App() {
  //loads the fonts
  let [fontsLoaded, error] = useFonts({
    Thin: Roboto_100Thin, 
    Light: Roboto_300Light,
    Regular: Roboto_400Regular,
    Medium: Roboto_500Medium,
    Bold: Roboto_700Bold,
    Black: Roboto_900Black,
  });


  

  //check if fonts are loaded correctly
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Entrance" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Entrance" component={EntracneScreen} />
        <Stack.Screen name="ConsumerLogin" component={ConsumerLoginScreen} />
        <Stack.Screen name="CompanyLogin" component={CompanyLoginScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="MainComp" component={MainCompScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;