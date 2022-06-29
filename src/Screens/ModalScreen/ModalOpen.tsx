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

  return (
    <View style={{flex: 1}}>
      <View style={styles.parent}>
        <TouchableOpacity
          style={{alignSelf: 'flex-end', right: 10}}
          onPress={() => setModalOpen(!modal)}>
          <Image
            style={styles.crossimg}
            source={require('../../assets/images/ic_cancel.png')}
          />
        </TouchableOpacity>
        <View style={{padding: 15}}>
          <Text style={styles.select}>{'Select your identity'}</Text>
        </View>

        <TouchableOpacity
          style={styles.innerimg}
          onPress={handlemodalstateAthelte}>
          <Image
            style={styles.athlimg}
            source={require('../../assets/images/athl.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.innerimg} onPress={handleFanmodalstate}>
          <Image
            style={styles.athlimg}
            source={require('../../assets/images/fan.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ModalScreens;
const styles = StyleSheet.create({
  athlimg: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 345,
  },
  parent: {
    flex: 0.5,
    width: '100%',
    // backgroundColor:'black',
    // marginTop:600,
    // height:400,
    top: 400,
    borderTopWidth: 4,
    borderColor: COLOR.LIGHTBLUE,
  },
  crossimg: {
    height: 30,
    width: 30,
    top: 5,
  },
  select: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'HelveticaNeue-BoldItalic',
  },
  innerimg: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#44C2E3',
  },
});
