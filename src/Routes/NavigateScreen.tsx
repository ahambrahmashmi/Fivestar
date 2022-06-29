import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Edit from '../Screens/EditDetails/Edit';
import CreateAccount from '../Screens/CreateAccount/createAccount'
import { navigationRef } from '../Utils/RootNavigation';
const Stack=createNativeStackNavigator();

const NavigateScreen = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Edit" component={Edit}/> 
    <Stack.Screen name="CreateAccount" component={CreateAccount}/>
    
    </Stack.Navigator>
</NavigationContainer> 
  )
}

export default NavigateScreen