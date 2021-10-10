import * as React from 'react';
import { View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//AppLoading component
import AppLoading from "expo-app-loading";
//fonts: Roboto_400Regular, Roboto_500Medium, Roboto_700Bold
import { useFonts, Roboto_100Thin, Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, Roboto_900Black } from '@expo-google-fonts/roboto';
import { OpenSans_400Regular } from '@expo-google-fonts/open-sans';
import { Provider, useSelector } from 'react-redux';
import { createStore } from 'redux';
import reducer from './Views/reduxComponents/reducers';
import RootStack from './Views/root'
import { AuthenticatedUserContext } from './Views/AuthenticatedUserProvider';


const store = createStore(reducer);

function App() {
  //loads the fonts
  let [fontsLoaded, error] = useFonts({
    Thin: Roboto_100Thin, 
    Light: Roboto_300Light,
    Regular: Roboto_400Regular,
    Medium: Roboto_500Medium,
    Bold: Roboto_700Bold,
    Black: Roboto_900Black,
    dyslectic: OpenSans_400Regular
  });

  return (
    
      <Provider store={store}>
          <RootStack/>
      </Provider>
    
  );
}

export default App;