import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLOR} from '../../Utils/color';
import leftArrow from '../../component/leftArrow';
import LeftArrow from '../../component/leftArrow';
import {STRINGS} from '../../Utils/string';
import {normalize} from '../../Utils/dimension';
import {images} from '../../Utils/images';
import {useDispatch, useSelector} from 'react-redux';
import sportsReducer from '../../redux/EditDetails/reducer';
import {getSportsAction} from '../../redux/EditDetails/action';

export default function Sports() {

  const [isSelected,Selected]=useState(false)
  
  const dispatch = useDispatch();
  const {DATA} = useSelector((store: any) => store.sportsReducer);

  console.log('teyryry', DATA.data);
 









  
  const _renderItem = ({item}: any) => {
    console.log("fghjkd'", item);
    return (
      <View style={styles.gridview}>
          <TouchableOpacity>
        <View style={styles.gridimg}>

          <Image
            source={{uri: item.sportImg}}
            style={{height: 70, width: 60, resizeMode: 'contain'}}
          />
          <Text style={{color: 'white'}}>{item.sportName}</Text>
        </View>
          </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.parent}>
      <LeftArrow style={styles.arrowstyle} />

      <View style={styles.sportsview}>
        <Text style={styles.sportstxt}>{STRINGS.LABEL.SPORTS.sportslike}</Text>
        <Text style={styles.play}>{STRINGS.LABEL.SPORTS.play}</Text>
      </View>
      <View style={styles.txtinputview}>
        <Image style={styles.searchicon} source={images.search} />
        <TextInput
          style={styles.txtinput}
          placeholder="Search Sports"
          placeholderTextColor="white"
        />
      </View>

      <FlatList data={DATA.data} renderItem={_renderItem} numColumns={3} />
    </View>
  );
}
const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: COLOR.BLACK,
  },
  arrowstyle: {
    marginTop: 60,
  },
  sportsview: {
    marginLeft: normalize(18),
    marginTop: normalize(18),
  },
  sportstxt: {
    color: COLOR.WHITE,
    fontFamily: 'helvetica-blackitalic',
    fontSize: 24,
  },
  play: {
    color: COLOR.WHITE,
    fontFamily: 'helvetica-blackitalic',
    fontSize: 24,
    marginTop: 12,
  },
  txtinputview: {
    borderWidth: 1,
    width: normalize(340),
    marginLeft: normalize(18),
    borderRadius: normalize(5),
    marginTop: normalize(18),
    borderColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    height: normalize(45),
    paddingRight: normalize(20),
  },
  txtinput: {
    marginHorizontal: normalize(20),
    height: normalize(45),
    fontSize: 14,
    color: 'white',
    //   width:normalize(300)
  },
  searchicon: {
    height: normalize(20),
    width: normalize(20),
    marginLeft: normalize(15),
  },
  gridview: {
    marginTop: normalize(16),
    // marginLeft: normalize(16),
     marginHorizontal:11
  },
  gridimg:{
    height: normalize(120),
    width: normalize(108),
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(6),
  
  }
});
