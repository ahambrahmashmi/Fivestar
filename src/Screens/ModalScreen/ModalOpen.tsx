import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {COLOR} from '../../Utils/color';
import {images} from '../../Utils/images';
import {STRINGS} from '../../Utils/string';
import {normalize} from '../../Utils/dimension';

const ModalScreens = (props: any) => {
  const {modal, setModalOpen, identity, setIdentity} = props;

  const handlemodalstateAthelte = () => {
    setIdentity(STRINGS.LABEL.athlet);
    setTimeout(() => {
      setModalOpen(!modal);
    }, 500);
  };

  const handleFanmodalstate = () => {
    setIdentity(STRINGS.LABEL.fan);
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
          style={identity == 'FAN' ? styles.fanimgActive1 : styles.fanimg}
        />
        <Text style={styles.fantext}>{STRINGS.LABEL.fan}</Text>

        {STRINGS.LABEL.fan===identity ? (<Image  style={styles.tick} source={images.tick}/>):null}
      </TouchableOpacity>

      <TouchableOpacity onPress={handlemodalstateAthelte}>
        
          <Image
            source={images.athlete} style={identity == 'ATHLETE' ?   styles.fanimgActive1 : styles.fanimg}
          />
  {STRINGS.LABEL.athlet===identity ? (<Image  style={styles.tick} source={images.tick}/>):null}
        
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
    width: normalize(377),
    height: normalize(330),
    alignSelf: 'center',
  },
  cancelicon: {
    height: normalize(24),
    width: normalize(24),
  },
  cancelview: {
    alignSelf: 'flex-end',
    right: 10,
    top: 15,
  },
  selectview: {
    marginLeft: normalize(26),
    marginTop: normalize(17),
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
    marginTop: normalize(18),
    width: normalize(335),
    height: normalize(104),
    marginVertical: 10,
  },
  fanimg: {
    width: normalize(335),
    height: normalize(104),
    justifyContent: 'center',
    alignSelf: 'center',
    resizeMode: 'contain',
    marginVertical: 10,
  },
  fanimgActive1: {
    width: normalize(335),
    height: normalize(104),
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
  tick:{
    height:normalize(18),
    width:normalize(22),
    right:35,
    position:'absolute',
    zIndex:1,
    top:10
},
});

export default ModalScreens;
