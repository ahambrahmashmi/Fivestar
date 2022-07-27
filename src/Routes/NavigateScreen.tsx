import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Edit from '../screens/EditDetails/edit';
import Terms from '../screens/Terms/terms';
import SelectIdentity from '../screens/IdentiyChoose/selectIdentity';
import CreateAccount from '../screens/CreateAccount/createAccount';
import Verify from '../screens/Verification/verify';
import SignIn from '../screens/SignIn/signIn';
import Sports from '../screens/SportsScreen/sports';
import Splash from '../screens/SplashScreen/splash';
import bottomTabNav from './bottomTabNav';
import TopTabNav from './topTabNav';
const Stack = createNativeStackNavigator();
const NavigateScreen = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name='Splash' component={Splash}/>
         <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="Edit" component={Edit} />
        <Stack.Screen name="Sports" component={Sports} />
        <Stack.Screen name="Verification" component={Verify} />
        <Stack.Screen name="identity" component={SelectIdentity} />
        <Stack.Screen name="Terms" component={Terms} /> */}
        
        <Stack.Screen name='bottomTabNav' component={bottomTabNav}/>
        <Stack.Screen name="topTabNav" component={TopTabNav}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigateScreen;
