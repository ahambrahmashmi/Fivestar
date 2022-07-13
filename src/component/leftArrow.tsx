import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { normalize } from '../Utils/dimension'
import { images } from '../Utils/images'
import { useNavigation } from '@react-navigation/native'


export default function LeftArrow(props:any) {
  const navigation = useNavigation<any>();
    const{style,NaviagtePress}=props
  
  return (
    <View style={[styles.leftview,style]}>
    <TouchableOpacity
    onPress={NaviagtePress}
    >
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