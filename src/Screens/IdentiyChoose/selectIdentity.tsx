import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLOR} from '../../Utils/color';
import {images} from '../../Utils/images';
import {vh, vw} from '../../Utils/dimension';
import {STRINGS} from '../../Utils/string';
import {useNavigation} from '@react-navigation/native';

export default function SelectIdentity() {
  const navigation = useNavigation<any>();
  const [identity,setIdentity]=React.useState<any>("");

  const Navigatedit = () => {
    navigation.navigate('Edit',identity,setIdentity);
  };
  const Navigateback = () => {
    navigation.navigate('Edit');

  };

  const handlefan=()=>{
    setIdentity(STRINGS.LABEL.athlet);
    // navigation.navigate('Edit');
  }

  const handleath=()=>{
      setIdentity(STRINGS.LABEL.fan)
    //   navigation.navigate('Edit');
  }
  return (
    <View style={styles.parent}>
      <View style={styles.leftview}>
        <TouchableOpacity onPress={Navigateback}>
          <Image style={styles.left} source={images.left} />
        </TouchableOpacity>

        <Text style={styles.whotxt}>{STRINGS.LABEL.who}</Text>
      </View>

      <View style={styles.imgfanview}>
        <TouchableOpacity
        onPress={handleath}
        >
          <Image style={{...styles.fanimg,borderWidth:identity=="FAN"?2:0,borderColor:COLOR.LIGHTBLUE}} source={images.fan} />
          {<Text style={styles.txtfan}>{STRINGS.LABEL.fan}</Text>}

          {STRINGS.LABEL.fan ===identity ? (<Image  style={styles.tick} source={images.tick}/>):null}
        </TouchableOpacity>
      </View>

      <View style={styles.imgfanview}>
        <TouchableOpacity
        onPress={handlefan}
        >
          
          <Image style={{...styles.fanimg,borderWidth:identity == "ATHLETE" ? 2:0,borderColor:COLOR.LIGHTBLUE}} source={images.athlete} />
        

          {STRINGS.LABEL.athlet ===identity ? (<Image  style={styles.tick} source={images.tick}/>):null}
        </TouchableOpacity>
      </View>

      <View
        style={styles.buttonbottom}>
        <TouchableOpacity
        disabled={identity==""}
        onPress={Navigatedit} style={identity==""
            ? {...styles.submitbutton, backgroundColor: COLOR.BROWNBACK}
            : styles.submitbutton}>
          <Text style={styles.button}>{STRINGS.LABEL.nxt}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: COLOR.BLACK,
  },
  leftview: {
    marginTop: vh(58),
    left: vw(16),
  },
  left: {
    height: vh(35),
    width: vw(35),
  },
  whotxt: {
    color: COLOR.WHITE,
    left: 13,
    top: 14,
    fontSize: 24,
    fontFamily: 'helvetica-blackitalic',
  },
  imgfanview: {
    marginTop: vh(30),

    justifyContent: 'center',
    alignItems: 'center',
  },
  fanimg: {
    width: vw(340),
    height: vh(104),
    borderWidth: 5,
    borderColor: '#1A1A1B',

    borderRadius: 5,
  },
  txtfan: {
    color: 'white',
    position: 'absolute',
    zIndex: 1,
    left: 195,
    fontFamily: 'helvetica-blackitalic',
    fontSize: 24,
    top: 45,
  },
  submitbutton: {
    position: 'absolute',
    backgroundColor: COLOR.LIGHTBLUE,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: vh(48),
    width: vw(340),
  },
  button: {
    fontSize: 18,
    fontFamily: 'helvetica-blackitalic',
  },
  tick:{
      height:vh(25),
      width:vw(25),
      right:23,
      position:'absolute',
      zIndex:1,
      top:10,
   resizeMode:'contain'
  },
  buttonbottom:{
    flex: 1, flexDirection: 'column-reverse', marginBottom: 80
  }
});
