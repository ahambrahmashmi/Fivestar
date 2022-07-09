import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { normalize } from '../Utils/dimension'
import { images } from '../Utils/images'


export default function LeftArrow(props:any) {
    const{style}=props
  return (
    <View style={[styles.leftview,style]}>
    <TouchableOpacity>
      <Image style={styles.leftarrowimg} source={images.left} />
    </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
    
    leftview: {
        marginTop: normalize(15),
        marginLeft:normalize(16),
      },
      leftarrowimg: {
        height: normalize(30),
        width:normalize(30),
      },

})