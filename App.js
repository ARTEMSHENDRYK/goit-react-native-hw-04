// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import PostsScreen from './Screens/PostsScreen';
import { createStackNavigator } from '@react-navigation/stack';

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto': require('./Fonts/Roboto/Roboto-Regular.ttf'),
  });

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login"> 
        <MainStack.Screen name="Registration" component={RegistrationScreen} options={{headerShown: false}} />
        <MainStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <MainStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}