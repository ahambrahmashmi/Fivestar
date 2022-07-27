import { View, Text,StyleSheet,TextInput ,Image} from 'react-native'
import React from 'react'
import { images } from '../Utils/images'
import { normalize } from '../Utils/dimension'

export default function SearchTextinput({placeholder,onChangeText,styleview,styletxtinput}:any) {
  
  return (
    <View style={[styles.txtinputview,styleview]}>
        <Image style={styles.searchicon} source={images.search} />
        <TextInput
          style={[styles.txtinput,styletxtinput]}
          placeholder={placeholder}
          placeholderTextColor="white"
          onChangeText={onChangeText}
        />
      </View>
  )
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
      },
      searchicon: {
        height: normalize(20),
        width: normalize(20),
        marginLeft: normalize(15),
      },

})