import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Edit from '../screens/EditDetails/edit'
import Terms from '../screens/Terms/terms';
import SelectIdentity from '../screens/IdentiyChoose/selectIdentity';
import CreateAccount from '../screens/CreateAccount/createAccount';
import Verify from '../screens/Verification/verify';
const Stack = createNativeStackNavigator();
const NavigateScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="Edit" component={Edit} />
        <Stack.Screen name="Verification" component={Verify} />
        <Stack.Screen name='identity' component={SelectIdentity}/>
        <Stack.Screen name="Terms" component={Terms}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigateScreen;
