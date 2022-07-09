import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {images} from '../../Utils/images';
import {vh, vw} from '../../Utils/dimension';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';
import {COLOR} from '../../Utils/color';
import ModalScreens from '../ModalScreen/congratulationModal';
import {STRINGS} from '../../Utils/string';
import {styles} from './style';
import {useDispatch, useSelector} from 'react-redux';
import {getotpAction} from '../../redux/createAccount/action';

export default function Verify({route}: {route: any}) {
  const {phoneNo} = route.params;
  const navigation = useNavigation<any>();

  const digit1 = useRef<TextInput>(null);
  const digit2 = useRef<TextInput>(null);
  const digit3 = useRef<TextInput>(null);
  const digit4 = useRef<TextInput>(null);

  const [otp, setOtp] = useState('');
  const [modal, setModalOpen] = React.useState<boolean>(false);

  const dispatch = useDispatch<any>();
  const {DATA_SIGN_UP} = useSelector(
    (store: any) => store.createaccountReducer,
  );

  const OTP_API_HIT = () => {
    dispatch(
      getotpAction(
        DATA_SIGN_UP.userId,
        otp,
        phoneNo,
        (response: any) => {
          if (response?.data?.statusCode === 200) {
            navigation.navigate('Verification', {phoneNo: phoneNo});
            setModalOpen(!modal);
          }
        },
        (errorAPI: any) => {
          Alert.alert('api err', errorAPI);
        },
      ),
    );
 
  };

  const firstdigit = (text: any) => {
    setOtp(otp => otp + text);
    digit2?.current?.focus();
    if (text == '') {
      digit1?.current?.focus();
      setOtp(otp => otp.slice(0, 0));
    }
  };

  const seconnddigit = (text: any) => {
    setOtp(otp => otp + text);
    digit3?.current?.focus();
    if (text == '') {
      digit1?.current?.focus();
      setOtp(otp => otp.slice(0, 1));
    }
  };

  const thirddigit = (text: any) => {
    setOtp(otp => otp + text);
    digit4?.current?.focus();
    if (text == '') {
      digit2?.current?.focus();
      setOtp(otp => otp.slice(0, 2));
    }
  };

  const fourthdidgit = (text: any) => {
    setOtp(otp => otp + text);
    digit4?.current?.focus();
    if (text == '') {
      digit3?.current?.focus();
      setOtp(otp => otp.slice(0, 3));
    }
  };

  const Naviagte = () => {
    navigation.navigate('CreateAccount');
  };

  return (
    <View style={styles.parent}>
      <View style={styles.lefticon}>
        <TouchableOpacity onPress={Naviagte}>
          <Image source={images.left} style={styles.mainhead} />
        </TouchableOpacity>
      </View>

      <View style={styles.verifyview}>
        <Text style={styles.verifytxt}>{STRINGS.LABEL.VERIFY}</Text>
      </View>

      <View style={styles.digitveri}>
        <Text style={styles.digitverifytxt}>{STRINGS.LABEL.KINDLY}</Text>
      </View>

      <View style={styles.numberview}>
        <View>
          <Text style={styles.colortxt}>{phoneNo}</Text>
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
          keyboardType="number-pad"
          onChangeText={firstdigit}
          maxLength={1}
          style={styles.texinput}
        />

        <TextInput
          ref={digit2}
          keyboardType="number-pad"
          onChangeText={seconnddigit}
          maxLength={1}
          style={styles.texinput}
        />
        <TextInput
          ref={digit3}
          keyboardType="number-pad"
          onChangeText={thirddigit}
          maxLength={1}
          style={styles.texinput}
        />
        <TextInput
          ref={digit4}
          keyboardType="number-pad"
          onChangeText={fourthdidgit}
          maxLength={1}
          style={styles.texinput}
        />
      </View>

      {otp.length === 4 ? (
        <TouchableOpacity style={styles.buttonparent} onPress={OTP_API_HIT}>
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
            <Text style={styles.resendtxt}>{STRINGS.LABEL.RESEND}</Text>
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
