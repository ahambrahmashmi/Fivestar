import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {images} from '../../Utils/images';
import {vh, vw} from '../../Utils/dimension';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';
import {COLOR} from '../../Utils/color';
import ModalScreens from '../ModalScreen/congratulationModal';
import { STRINGS } from '../../Utils/string';

export default function Verify() {
  const navigation = useNavigation<any>();

  const digit1 = useRef<TextInput>(null);
  const digit2 = useRef<TextInput>(null);
  const digit3 = useRef<TextInput>(null);
  const digit4 = useRef<TextInput>(null);

  const [otp, setOtp] = useState('');
  const [modal, setModalOpen] = React.useState<boolean>(false);

  const openmmodal = () => {
    setModalOpen(!modal);
  };

  return (
    <View style={styles.parent}>
      <View style={styles.lefticon}>
        <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
          <Image source={images.left} style={styles.mainhead} />
        </TouchableOpacity>
      </View>

      <View style={styles.verifyview}>
        <Text style={styles.verifytxt}>{STRINGS.LABEL.VERIFY}</Text>
      </View>

      <View style={styles.digitveri}>
        <Text style={styles.digitverifytxt}>
          {STRINGS.LABEL.KINDLY}
        </Text>
      </View>

      <View style={styles.numberview}>
        <View>
          <Text style={styles.colortxt}>{STRINGS.LABEL.NUMBER}</Text>
        </View>
        <TouchableOpacity>
          <View>
            <Text style={styles.edittxt}>{STRINGS.LABEL.EDit}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.otpview}>
        <TextInput
          ref={digit1}
          keyboardType='number-pad'
          onChangeText={(text: any) => {
            setOtp(otp => otp + text);
            digit2?.current?.focus();
            if(text==''){
              digit1?.current?.focus();
            }
          }
        }
          maxLength={1}
          style={styles.texinput}
        />

        <TextInput
          ref={digit2}
          keyboardType='number-pad'
          onChangeText={(text: any) => {
            setOtp(otp => otp + text);
            digit3?.current?.focus();
            if(text==''){
              digit1?.current?.focus();
            }
          }
        }
          maxLength={1}
          style={styles.texinput}
        />
        <TextInput
          ref={digit3}
          keyboardType='number-pad'
          onChangeText={(text: any) => {
            setOtp(otp => otp + text);
            digit4?.current?.focus();
            if(text==''){
              digit2?.current?.focus();
            }
          }
        }
          maxLength={1}
          style={styles.texinput}
        />
        <TextInput
          ref={digit4}
          keyboardType='number-pad'
          onChangeText={(text: any) => {
            setOtp(otp => otp + text);
            digit4?.current?.focus();
            if(text==''){
              digit3?.current?.focus();
            }
          }
        }
          maxLength={1}
          style={styles.texinput}
        />
      </View>

      {otp.length === 4 ? (
        <TouchableOpacity style={styles.buttonparent} onPress={openmmodal}>
          <Text style={styles.buttontxt}>{STRINGS.LABEL.SUBMITBUTTON}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity disabled={true} style={styles.buttonactiveparent}>
          <Text style={styles.buttonactive}>{STRINGS.LABEL.SUBMITBUTTON}</Text>
        </TouchableOpacity>
      )}

      <View style={styles.receiverparent}>
        <Text style={styles.receivetxt}>{STRINGS.LABEL.Didnt}</Text>

        <TouchableOpacity>
          <View style={styles.resendview}>
            <Text style={styles.resendtxt}>{'Resend Verification Code'}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Modal isVisible={modal}>
        <ModalScreens modal={modal} setModalOpen={setModalOpen}></ModalScreens>
      </Modal>

      <View style={styles.girlview}>
        <Image source={images.girl} style={styles.girlimg} />
      </View>
      <Image source={images.footer} style={styles.bottomimg} />
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: COLOR.BLACK,
  },
  mainhead: {
    height: vh(32),
    width: vw(32),
    marginTop: vh(50),
    left: vw(16),
  },
  lefticon: {
    width: vw(375),
    height: vh(82),
  },
  verifyview: {
    marginTop: vh(14),
    width: vw(375),
    height: vh(32),
  },
  verifytxt: {
    color: '#fff',
    marginLeft: vw(24),
    marginRight: vw(59),
    fontSize: 24,
    fontFamily: 'helvetica-blackitalic',
  },
  digitveri: {
    marginLeft: vw(30),
    marginRight: vw(19),
    marginTop: vh(6),
  },
  digitverifytxt: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Helvetica',
  },
  numberview: {
    marginLeft: vw(30),
    marginRight: vw(19),
    marginTop: vh(5),
    flexDirection: 'row',
  },
  colortxt: {
    color: COLOR.WHITE,
  },
  edittxt: {
    color: COLOR.LIGHTBLUE,
    marginLeft: 5,
  },
  otpview: {
    marginTop: vh(38),
    width: vw(328),
    height: vh(48),
    marginLeft: vw(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  buttonparent: {
    marginTop: vh(40),
    marginLeft: vw(23),
    width: vw(328),
    height: vh(48),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.LIGHTBLUE,
    borderRadius: 5,
  },
  buttontxt: {
    color: COLOR.BLACK,
    fontSize: 18,
     fontFamily: 'helvetica-blackitalic',
    // fontFamily:"DancingScript-VariableFont_wght"
  },
  receiverparent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vh(40),
  },
  receivetxt: {
    color: 'white',
    fontSize: 14,
    fontFamily:'Helvetica'
  },
  resendview: {
    marginVertical: 5,
  },
  resendtxt: {
    color: COLOR.LIGHTBLUE,
    fontSize: 18,
     fontFamily: 'HelveticaNeue-BoldItalic',
    // fontFamily:'Splash-Regular'
  },
  girlview: {
    height: vh(385),
    width: vw(375),
  },
  girlimg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  bottomimg: {
    height: vh(71),
    width: vw(375),
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
  },
  texinput: {
    borderWidth: 1,
    borderColor: 'white',
    height: vh(48),
    width: vw(70),
    color: COLOR.LIGHTBLUE,
    fontSize: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  buttonactive: {
    color: '#595959',
    fontSize: 16,
    fontFamily: 'helvetica-blackitalic',
  },
  buttonactiveparent: {
    backgroundColor: '#282828',
    marginTop: vh(40),
    marginLeft: vw(23),
    width: vw(328),
    height: vh(48),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
