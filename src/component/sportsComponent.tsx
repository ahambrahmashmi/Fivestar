import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
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

export default function SportsComponent({callback, imgText, img, selecteditem}: any) {
  const [isSelected, Selected] = useState(false);

  const choose = () => {
    callback(imgText);
    Selected(!isSelected);
  };selecteditem

  return (
    <TouchableOpacity
      onPress={choose}
      style={[
        styles.gridimgVIEW,
        {backgroundColor: isSelected ? COLOR.LIGHTBLUE : '#121212'},
      ]}>
      {isSelected && <Image style={styles.tickimg} source={images.sporttick} />}
      <Image source={{uri: img}} style={styles.gridimg} />
      <Text
        style={[
          styles.txtbottom,
          {color: isSelected ? COLOR.BLACK : '#595959'},
        ]}>
        {imgText}
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
