import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/homeScreen';
import SearchScreen from '../screens/Home/searchScreen';
import {images} from '../Utils/images';
import UploadScreen from '../screens/Home/uploadScreen';
import ActivityScreen from '../screens/Home/activityScreen';
import AccountScreen from '../screens/Home/accountScreen';
import {COLOR} from '../Utils/color';
const Tab = createBottomTabNavigator();
export default function BottomTabNav() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          height: 90,
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: COLOR.BLACK,
          position: 'absolute',
          borderTopWidth: 0,
          
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
            tabBarActiveTintColor:COLOR.LIGHTBLUE,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={
                  focused
                    ? [styles.iconsize, {tintColor: COLOR.LIGHTBLUE}]
                    : styles.iconsize
                }
                source={images.home}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
            tabBarActiveTintColor:COLOR.LIGHTBLUE,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={
                  focused
                    ? [styles.iconsize, {tintColor: COLOR.LIGHTBLUE}]
                    : styles.iconsize
                }
                source={images.searchicon}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Upload"
        component={UploadScreen}
        options={{
            tabBarActiveTintColor:COLOR.LIGHTBLUE,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={
                  focused
                    ? [styles.iconsize, {tintColor: COLOR.LIGHTBLUE}]
                    : styles.iconsize
                }
                source={images.upload}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Activity"
        component={ActivityScreen}
        options={{
            tabBarActiveTintColor:COLOR.LIGHTBLUE,
          tabBarIcon: ({focused}) => {
            return (
              <Image style={
                focused
                  ? [styles.iconsize, {tintColor: COLOR.LIGHTBLUE}]
                  : styles.iconsize
              } source={images.activity} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
            tabBarActiveTintColor:COLOR.LIGHTBLUE,
          tabBarIcon: ({focused}) => {
            return (
              <Image
              style={
                focused
                  ? [styles.iconsize, {tintColor: COLOR.LIGHTBLUE}]
                  : styles.iconsize
              }
                source={images.account}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  iconsize: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
});
