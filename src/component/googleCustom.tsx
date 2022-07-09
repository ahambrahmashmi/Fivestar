import { View, Text ,TouchableOpacity,StyleSheet,Image} from 'react-native'
import React from 'react'
import { images } from '../Utils/images'
import { normalize } from '../Utils/dimension'

export default function GoogleCustom() {
  return (
    <View>
         <TouchableOpacity>
          <View style={styles.parentgoogle}>
            <Image style={styles.googleimg} source={images.google} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.parentgoogle}>
            <Image style={styles.googleimg} source={images.apple} />
          </View>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    googleimg: {
        width:normalize(355),
        height: normalize(48),
        borderRadius: normalize(5),
      },
      parentgoogle: {
        alignSelf: 'center',
        marginTop: normalize(20),
      },
})