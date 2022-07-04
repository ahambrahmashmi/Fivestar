import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {images} from '../../Utils/images';
import {vh, vw} from '../../Utils/dimension';
import {useNavigation} from '@react-navigation/native';
import { STRINGS } from '../../Utils/string';

export default function Terms() {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.parent}>
      <View style={styles.inner}>
        <View style={styles.imagetxt}>
          <TouchableOpacity
            onPress={() => navigation.navigate('CreateAccount')}>
            <Image
              source={images.left}
              style={styles.arrowimage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.imagetxt}>
          <Text style={styles.termstxt}>{STRINGS.LABEL.TERMSUSE}</Text>
        </View>
      </View>

      <View style={styles.firstview}>
        <Text style={styles.innertxt}>
          {STRINGS.LABEL.TERMSFIRST}
        </Text>
      </View>

      <View style={styles.secondview}>
        <Text style={styles.innertxt}>
          {STRINGS.LABEL.TERMSSECOND}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'black',
  },
  inner: {
    flexDirection: 'row',
  },
  imagetxt: {
    marginTop: 50,
    marginLeft: 16,
  },
  termstxt: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'HelveticaNeue-BoldItalic',
  },
  firstview: {
    marginTop: 32,
    width: vw(340),
    height: vh(240),
    alignSelf: 'center',
    marginVertical: 5,
  },
  innertxt: {
    color: 'white',
    fontSize: 15,
    lineHeight: 20,
  },
  secondview: {
    marginTop: 10,
    height: vh(430),
    width: vw(340),
    alignSelf: 'center',
  },
  arrowimage:{
    height: vh(32), width: vw(32)
  }
});
