import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {images} from '../../Utils/images';
import {vh, vw} from '../../Utils/dimension';
import {useNavigation} from '@react-navigation/native';

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
              style={{height: vh(32), width: vw(32)}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.imagetxt}>
          <Text style={styles.termstxt}>{'Terms of use'}</Text>
        </View>
      </View>

      <View style={styles.firstview}>
        <Text style={styles.innertxt}>
          {
            'The Fivestar Mobile Application (“App”) and all services provided through the App (collectively, “Services”) are made available by Fivestar App, Inc. (“Fivestar,” “us,” “our,” and/or “we”).  Certain features of the App and Services may be subject to additional guidelines, terms, or rules, which will be posted through the App or Services in connection with such features.  All such additional terms, guidelines, and rules are incorporated by reference into this Agreement.  References to “you” and “your” refer to you, a user of our App and/or Services.'
          }
        </Text>
      </View>

      <View style={styles.secondview}>
        <Text style={styles.innertxt}>
          {
            'THESE TERMS OF USE (“AGREEMENT”) SET FORTH THE LEGALLY BINDING TERMS FOR YOUR USE OF THE APP AND SERVICES.  BY ACCESSING OR USING THE APP OR SERVICES, YOU ARE ACCEPTING THIS AGREEMENT AND YOU REPRESENT AND WARRANT THAT YOU HAVE THE RIGHT, AUTHORITY, AND CAPACITY TO ENTER INTO THIS AGREEMENT.  YOU MAY NOT ACCESS OR USE THE APP OR SERVICES OR ACCEPT THE AGREEMENT IF YOU DO NOT HAVE THE CAPACITY TO ENTER INTO THIS AGREEMENT.  IF YOU DO NOT AGREE WITH ALL OF THE PROVISIONS OF THIS AGREEMENT, DO NOT ACCESS AND/OR USE THE APP OR SERVICES.  IF YOU ARE USING THE APP OR SERVICES ON BEHALF OF A COMPANY, ENTITY, OR ORGANIZATION, YOU REPRESENT AND WARRANT THAT YOU ARE AN AUTHORIZED REPRESENTATIVE OF SUCH COMPANY, ENTITY, OR ORGANIZATION WITH THE AUTHORITY TO BIND IT TO THIS AGREEMENT.'
          }
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
});
