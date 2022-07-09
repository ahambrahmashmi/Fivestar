import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {images} from '../../Utils/images';
import {normalize} from '../../Utils/dimension';
import {COLOR} from '../../Utils/color';
import {STRINGS} from '../../Utils/string';
import {useNavigation} from '@react-navigation/native';

export default function CongratulationModal(props: any) {
  const navigation = useNavigation<any>();
  let {setModalOpen, modal} = props;

  const closedModal = () => {
    setModalOpen(!modal);
    navigation.navigate('identity');
  };

  return (
    <View style={styles.parent}>
      <View style={styles.thumbview}>
        <Image source={images.thumb} style={styles.thumbimage} />
      </View>
      <View style={styles.congratview}>
        <Text style={styles.congratstext}>
          {'Congratulations'.toUpperCase()}
        </Text>
      </View>
      <View style={styles.accountview}>
        <Text style={styles.accounttext}>{STRINGS.LABEL.sucess}</Text>
      </View>
      <View style={styles.congratview}>
        <Text style={styles.accounttext}>{STRINGS.LABEL.REG}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={closedModal}>
        <Text style={styles.buttontxt}>{STRINGS.LABEL.CONTINUE}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#121212',
    borderTopWidth: 2,
    borderColor: COLOR.LIGHTBLUE,
    borderLeftWidth: 0.3,
    borderRightWidth: 0.3,
    borderBottomWidth: 0.3,
    borderRadius: 5,
    width: normalize(336),
    height: normalize(244),
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbview: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbimage: {
    height: normalize(30),
    width: normalize(30),
  },
  congratview: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(5),
  },
  congratstext: {
    color: 'white',
    fontFamily: 'Helvetica',
    fontSize: 15,
    fontWeight: 'bold',
  },
  accountview: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(12),
  },

  accounttext: {
    color: 'white',
    fontFamily: 'Helvetica',
    fontSize: 15,
  },
  button: {
    marginTop: normalize(15),
    backgroundColor: COLOR.LIGHTBLUE,
    width: normalize(280),
    height: normalize(48),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
  },
  buttontxt: {
    color: COLOR.BLACK,
    fontFamily: 'helvetica-Blackitalic',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
