import {View, Text,} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const TopTab = createMaterialTopTabNavigator();
import TopFeedsTab from '../screens/Home/searchFeed/topTab';
import AccountsTab from '../screens/Home/searchFeed/accountsTab';
import HashtagsTab from '../screens/Home/searchFeed/hashtagsTab';
import VideoTab from '../screens/Home/searchFeed/videoTab';
import {COLOR} from '../Utils/color';
export default function TopTabNav() {
  return (
    <TopTab.Navigator
      sceneContainerStyle={{backgroundColor: 'transparent'}}
      screenOptions={({route}) => ({
        tabBarStyle: {backgroundColor: 'transparent'},
        tabBarLabel: ({focused}) => {
          return (
            <Text
              style={
                focused
                  ? {fontSize: 16,  color: COLOR.LIGHTBLUE,fontFamily:'helvetica-blackitalic'}
                  : {fontSize: 16,  color: 'grey',fontFamily:'helvetica-blackitalic'}
              }>
              {route.name}
            </Text>
          );
        },
        tabBarIndicatorStyle: {backgroundColor: COLOR.LIGHTBLUE},
        tabBarLabelStyle: {color: '#fff'},
      })}>
      <TopTab.Screen name="Top" component={TopFeedsTab} />
      <TopTab.Screen name="Account " component={AccountsTab} />
      <TopTab.Screen name="Hashtag" component={HashtagsTab} />
      <TopTab.Screen name="Videos" component={VideoTab} />
    </TopTab.Navigator>
  );
}


// http://fivestardevapi.appskeeper.in/api/v1/user/search?search=games&type=1&page=1