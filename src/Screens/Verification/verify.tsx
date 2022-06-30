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
        <Text style={styles.verifytxt}>{'Enter Verification Code'}</Text>
      </View>

      <View style={styles.digitveri}>
        <Text style={styles.digitverifytxt}>
          {'Kindly enter the 4 digit verification code sent to'}
        </Text>
      </View>

      <View style={styles.numberview}>
        <View>
          <Text style={styles.colortxt}>{'+17345678926'}</Text>
        </View>
        <TouchableOpacity>
          <View>
            <Text style={styles.edittxt}>{'Edit'}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.otpview}>
        <TextInput
          ref={digit1}
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
          <Text style={styles.buttontxt}>{'SUBMIT'}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity disabled={true} style={styles.buttonactiveparent}>
          <Text style={styles.buttonactive}>{'SUBMIT'}</Text>
        </TouchableOpacity>
      )}

      <View style={styles.receiverparent}>
        <Text style={styles.receivetxt}>{'Didnt Received the Code yet?'}</Text>

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
    width: vw(350),
    height: vh(32),
  },
  verifytxt: {
    color: '#fff',
    marginLeft: vw(24),
    marginRight: vw(59),
    fontSize: 24,
    fontFamily: 'HelveticaNeue-BoldItalic',
  },
  digitveri: {
    marginLeft: vw(30),
    marginRight: vw(19),
    marginTop: vh(10),
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
    fontSize: 16,
     fontFamily: 'HelveticaNeue-BoldItalic',
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
    fontFamily: 'HelveticaNeue-BoldItalic',
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
