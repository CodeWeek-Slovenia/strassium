import * as React from 'react';
import { View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EntracneScreen from './EntranceScreen';
import ConsumerLoginScreen from './ConsumerLoginScreen';
import MainScreen from './MainScreen';
import ProviderLoginScreen from './CompanyViews/ProviderLoginScreen';
import ProviderRegistrationScreen from './CompanyViews/ProviderRegistrationScreen';
import MainCompScreen from './CompanyViews/MainComp';
import ConsumerRegistrationScreen from './ConsumerRegistrationScreen'
import { useDispatch, useSelector } from 'react-redux';
import { accType } from './Values/accType';
import { AuthenticatedUserContext } from './AuthenticatedUserProvider';
import Firebase from '../Firebase/firebase';
import firebase from 'firebase';
import { ActivityIndicator } from 'react-native-paper';
import LoadingScreen from './loadingScreen';
const Stack = createNativeStackNavigator();

const auth = Firebase.auth();

function RootStack() {

    const [user,setUser] = React.useState(false)
    const accType_ = useSelector(state => state.propertyReducer.accType)
    const loadingState = useSelector(state => state.propertyReducer.loadingState)
    const userState = useSelector(state => state.propertyReducer.user)
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = React.useState(false);
    const [dataSet,setData] = React.useState('');

    React.useEffect(() => {console.log('/////////////// ' + accType_ +' ///////////////')},[accType_])
    React.useEffect(() => {setIsLoading(loadingState)},[loadingState])
    React.useEffect(() => {console.log('/////////////// ' + userState +' ///////////////')},[userState])
    
    auth.onAuthStateChanged(async (authenticatedUser) => {
      console.log(authenticatedUser)
      try{
        if (!authenticatedUser){
          setUser(false);        
        }
        else{
          if(!authenticatedUser.emailVerified){
            //setVertifyed(false);
            setUser(false);         
          }
          else{
            setUser(true);
            //setVertifyed(true);
          }
        }
      }
      catch (error) {
        console.log(error);
        }
      finally{
      }
    
});


  function HomeStackConsumer() {
    return(
      <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Main" component={MainScreen} />        
      </Stack.Navigator>
    );
  }

  function HomeStackProvider() {
    return(
      <Stack.Navigator initialRouteName="MainComp" screenOptions={{ headerShown: false }} >
            <Stack.Screen name="MainComp" component={MainCompScreen} />      
      </Stack.Navigator>
    );
  }
  

  function AuthStackConsumer() {
    return(
      <Stack.Navigator initialRouteName="ConsumerLogin" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="ConsumerLogin" component={ConsumerLoginScreen} />
        <Stack.Screen name="ConsumerRegistration" component={ConsumerRegistrationScreen} />
      </Stack.Navigator>
    );
  }

  function AuthStackProvider() {
    return(
      <Stack.Navigator initialRouteName="ProviderLogin" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="ProviderLogin" component={ProviderLoginScreen} />
        <Stack.Screen name="ProviderRegistration" component={ProviderRegistrationScreen} />
      </Stack.Navigator>
    );
  }

  function StartStack() {
    return(
      <Stack.Navigator initialRouteName="Entrance" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Entrance" component={EntracneScreen}/>
      </Stack.Navigator>
    );
  }

  return (
      isLoading ? <LoadingScreen/> :
      <NavigationContainer>
          {accType_ == accType.NONE.toString() ? <StartStack/> : accType_ == accType.CONSUMER.toString() ? user ? <HomeStackConsumer/> : <AuthStackConsumer/> : user ? <HomeStackProvider/> : <AuthStackProvider/>}
      </NavigationContainer>
  );
}

export default RootStack;