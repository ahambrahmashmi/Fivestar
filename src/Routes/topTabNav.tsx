import {View, Text,} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const TopTab = createMaterialTopTabNavigator();
import TopFeedsTab from '../screens/Home/searchFeed/topTab';
import AccountsTab from '../screens/Home/searchFeed/accountsTab';
import HashtagsTab from '../screens/Home/searchFeed/hashtagsTab';
import VideoTab from '../screens/Home/searchFeed/videoTab';
import {COLOR} from '../Utils/color';
export default function TopTabNav(props : any) {
  console.log('propssssssss',props)
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

        {/* ====>>>CALLBACK RECEIVED FROM INDEX.TSX SCREEN SEND SEARCHTEXT BY ONCHANGETEXT<<<<<<=========  */}

      <TopTab.Screen name="Top" children={()=><TopFeedsTab search={props.search}/>} />
      <TopTab.Screen name="Account " children={()=><AccountsTab search={props.search}/>}/>
      <TopTab.Screen name="Hashtag" children={()=><HashtagsTab search={props.search}/>}  />
      <TopTab.Screen name="Videos" children={()=><VideoTab search={props.search}/>}/>
    </TopTab.Navigator>
  );
}


