import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {COLOR} from '../../Utils/color';
import {images} from '../../Utils/images';
import {STRINGS} from '../../Utils/string';
import {vh, vw} from '../../Utils/dimension';

const ModalScreens = (props: any) => {
  const {modal, setModalOpen, identity, setIdentity} = props;

  const handlemodalstateAthelte = () => {
    setIdentity('Athelete');
    setTimeout(() => {
      setModalOpen(!modal);
    }, 500);
  };

  const handleFanmodalstate = () => {
    setIdentity('Fan');
    setTimeout(() => {
      setModalOpen(!modal);
    }, 500);
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

      <TouchableOpacity onPress={handleFanmodalstate}>
        <Image
          source={images.fan}
          style={identity == 'Fan' ? styles.fanimgActive1 : styles.fanimg}
        />
        <Text style={styles.fantext}>{STRINGS.LABEL.fan}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlemodalstateAthelte}>
        <Image
          source={images.athlete}
          style={identity == 'Athelete' ? styles.fanimgActive1 : styles.fanimg}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 'auto',
    borderTopWidth: 3,
    borderColor: COLOR.LIGHTBLUE,
    backgroundColor: COLOR.BLACK,
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
    marginBottom: 10,
  },
  fanview: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: vh(18),
    width: vw(335),
    height: vh(104),
    marginVertical: 10,
  },
  fanimg: {
    width: vw(335),
    height: vh(104),
    justifyContent: 'center',
    alignSelf: 'center',
    resizeMode: 'contain',
    marginVertical: 10,
  },
  fanimgActive1: {
    width: vw(335),
    height: vh(104),
    justifyContent: 'center',
    alignSelf: 'center',
    resizeMode: 'contain',
    borderWidth: 1,
    borderColor: COLOR.LIGHTBLUE,
  },
  fantext: {
    fontWeight: '900',
    color: 'white',
    fontSize: 28,
    fontStyle: 'italic',
    zIndex: 1,
    position: 'absolute',
    top: 45,
    left: 220,
  },
});

export default ModalScreens;
