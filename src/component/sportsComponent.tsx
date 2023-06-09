import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useState} from 'react';
import {COLOR} from '../Utils/color';
import {normalize} from '../Utils/dimension';
import {images} from '../Utils/images';
import {STRINGS} from '../Utils/string';

interface userdefined {
  img?: any;
  imgText?: string;
  callback: Function;
}

export default function SportsComponent({
  _id,
  callback,
  sportName,
  sportImg,
  selectedItem,
}: any) {
  const [isSelected, Selected] = useState(false);

  useEffect(() => {
    const l = selectedItem?.findIndex((item: any) => item == sportName);
    if (l != -1) {
      Selected(true);
    }
  }, []);

  const choose = () => {
    callback({_id, sportImg, sportName});
    Selected(!isSelected);
  };

  return (
    <TouchableOpacity
      onPress={choose}
      style={[
        styles.gridimgVIEW,
        {backgroundColor: isSelected ? COLOR.LIGHTBLUE : '#121212'},
      ]}>
      {isSelected && <Image style={styles.tickimg} source={images.sporttick} />}
      <Image source={{uri: sportImg}} style={styles.gridimg} />
      <Text
        style={[
          styles.txtbottom,
          {color: isSelected ? COLOR.BLACK : '#595959'},
        ]}>
        {sportName}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  gridimg: {
    height: normalize(70),
    width: normalize(60),
    resizeMode: 'contain',
  },
  gridimgVIEW: {
    height: normalize(120),
    width: normalize(108),
    // backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(6),
    margin: normalize(6),
    left: normalize(13),
    top: normalize(8),
  },
  txtbottom: {
    color: 'black',
    fontFamily: 'helvetica-Oblique',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: normalize(5),
  },
  tickimg: {
    height: normalize(17),
    width: normalize(17),
    left: normalize(38),
  },
  button: {
    marginTop: normalize(15),
    backgroundColor: COLOR.LIGHTBLUE,
    width: normalize(345),
    height: normalize(48),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    bottom: normalize(25),
    left: normalize(5),
  },
  buttontxt: {
    color: COLOR.BLACK,
    fontFamily: 'helvetica-Blackitalic',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
