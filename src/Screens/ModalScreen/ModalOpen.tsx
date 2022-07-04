import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {COLOR} from '../../Utils/color';
import {images} from '../../Utils/images';
import {STRINGS} from '../../Utils/string';
import {vh, vw} from '../../Utils/dimension';

const ModalScreens = (props: any) => {
  const {modal, setModalOpen, setIdentity} = props;

  const handlemodalstateAthelte = () => {
    setIdentity('Athelete');
    setModalOpen(!modal);
  };

  const handleFanmodalstate = () => {
    setIdentity('Fan');
    setModalOpen(!modal);
  };

  const modalClosed = () => {
    setModalOpen(!modal);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cancelview}>
        <TouchableOpacity onPress={modalClosed} activeOpacity={0.5}>
          <Image source={images.cancel} style={styles.cancelicon} />
        </TouchableOpacity>
      </View>

      <View style={styles.selectview}>
        <Text style={styles.select}>{STRINGS.LABEL.identity}</Text>
      </View>

      <TouchableOpacity activeOpacity={0.4} onPress={handleFanmodalstate}>
        <View style={styles.fanview}>
          <Image style={styles.fanimg} source={images.fan} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.4} onPress={handlemodalstateAthelte}>
        <View style={styles.athview}>
          <Image source={images.athlete} style={styles.fanimg} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 'auto',
    borderTopWidth: 3,
    borderColor: COLOR.LIGHTBLUE,
    backgroundColor: '#121212',

    width: vw(377),
    height: vh(330),
    alignSelf: 'center',
  },
  cancelicon: {
    height: vh(24),
    width: vw(24),
  },
  cancelview: {
    alignSelf: 'flex-end',
    right: 10,
    top: 15,
  },
  selectview: {
    marginLeft: vw(26),
    marginTop: vh(17),
  },
  select: {
    color: 'white',
    fontSize: 26,

    fontFamily: 'helvetica-blackitalic',
  },
  fanview: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vh(18),
  },
  fanimg: {
    width: vw(335),
    height: vh(104),
  },
  athview: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ModalScreens;
