import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useRef} from 'react';
import {images} from '../Utils/images';
import {normalize, vw} from '../Utils/dimension';

export default function SearchTextinput({
  placeholder,
  onChangeText,
  styleview,
  styletxtinput,
  setSearchtxt,
  searchtxt,
}: any) {
  const refprops = useRef<TextInput>(null);

  const clearButtonHandler = () => {
    setSearchtxt('');
    refprops?.current?.clear();
  };
  return (
    <View style={[styles.txtinputview, styleview]}>
      <Image style={styles.searchicon} source={images.search} />
      <TextInput
        style={[styles.txtinput, styletxtinput]}
        placeholder={placeholder}
        placeholderTextColor="white"
        onChangeText={onChangeText}
        ref={refprops}
      />
      {searchtxt.length > 0 && (
        <TouchableOpacity
          onPress={clearButtonHandler}
          style={styles.cancelview}>
          <Image
            source={images.cancelinput}
            style={styles.cancelimg}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  txtinputview: {
    borderWidth: 1,
    width: normalize(345),
    marginLeft: normalize(20),
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
    width: vw(270),
  },
  searchicon: {
    height: normalize(20),
    width: normalize(20),
    marginLeft: normalize(15),
  },
  cancelview:{
    height: normalize(30),
    width: normalize(30),
    padding: normalize(20),
    position: 'absolute',
    right: normalize(16),
    bottom: normalize(22),
  },
  cancelimg:{
    height: normalize(40), width: normalize(40)
  }
});
