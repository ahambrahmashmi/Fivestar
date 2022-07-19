import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React from 'react';
import {COLOR} from '../../Utils/color';
import {STRINGS} from '../../Utils/string';
import {normalize} from '../../Utils/dimension';
import CustomTextInput from '../../component/customTextInput';
import {images} from '../../Utils/images';
import {useNavigation} from '@react-navigation/native';
import {emailRegex, passwordRegex, mobilenoRegex} from '../../Utils/constant';
import OrCustom from '../../component/orCustom';
import GoogleCustom from '../../component/googleCustom';
import {styles} from './style';
import {useDispatch, useSelector} from 'react-redux';
import {getSignInAction} from '../../redux/SignIn/action';
import Modal from 'react-native-modal';
import Countrtycode from '../ModalScreen/countrtycode';
import { TextInput } from 'react-native-paper';

export default function SignIn() {
  const [email, setEmail] = React.useState('');
  const [emailValidError, setEmailValidError] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [buttonEnabled, buttonDisabled] = React.useState<boolean>(false);
  const [hidepassword, setHidepassword] = React.useState<boolean>(true);
  const [phoneNo, setphoneNo] = React.useState('');
  const [phoneNoerror, setphoneNoerror] = React.useState('');
  const [modalMob, setModalMob] = React.useState<boolean>(false);
  const [countryMob, setCountry] = React.useState<string>('+1');
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<any>();


  const {SignIn_Data}=useSelector((store:any)=>store.signinReducer);

//  console.log('signinn=======>>>>',SignIn_Data.username);
 
  const naviagteSignin = () => {
    dispatch(
      getSignInAction(
        phoneNo,
        password,
        (response: any) => {
          if (response?.data?.statusCode === 200) {
            navigation.navigate('Edit');
          }
        },
        (errorAPI: any) => {
          Alert.alert('invalid id');
        },
      ),
    );
  };

  const handleValidEmail = (val: any) => {
    if (val.length === 0) {
      setEmailValidError('email address must be enter');
    } else if (emailRegex.test(val) === false) {
      setEmailValidError('Please enter a valid email address');
    } else if (emailRegex.test(val) === true) {
      setEmailValidError('');
    }
  };
  const handleValidMobno = (val: any) => {
    const value = val.trim();
    if (value.length === 0) {
      setphoneNoerror('Phone Number must be enter');
    } else if (mobilenoRegex.test(value) == false) {
      setphoneNoerror('Enter valid Phone Number');
    } else if (mobilenoRegex.test(value) == true) {
      setphoneNoerror('');
    }
  };
  const handlePassword = (val: any) => {
    if (val.length === 0) {
      setPasswordError('password must be enter');
    } else if (passwordRegex.test(val) === false) {
      setPasswordError('enter valid password');
    } else if (passwordRegex.test(val) === true) {
      setPasswordError('');
    }
  };

  const handleEmailinput = (value: any) => {
    if (isFinite(value)) {
      handleValidMobno(value);
      setphoneNo(value);
      setEmailValidError('');
    } else {
      setphoneNoerror('');
      setEmail(value);
      handleValidEmail(value);
    }
  };
  const handlePaswordinput = (value: any) => {
    setPassword(value);
    handlePassword(value);
    buttonDisabled(value);
  };

  const handleButton = () => {
    if (emailValidError == '' && passwordError == '' && buttonEnabled) {
      return true;
    } else {
      return false;
    }
  };
  const naviagteSignup=()=>{
    navigation.navigate('CreateAccount');
  }

  const passwordToggle = () => {
    setHidepassword(!hidepassword);
  };
  const closedcountry = () => {
    setModalMob(!modalMob);
  };

  return (
    <SafeAreaView style={styles.parent}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.headerview}>
        <Text style={styles.signtxt}>{STRINGS.LABEL.signin}</Text>
        <Text style={styles.mobtxt}>{STRINGS.LABEL.mobno}</Text>
      </View>
      <Modal isVisible={modalMob}>
        <Countrtycode
          setCountry={setCountry}
          setModalMob={setModalMob}
          countrymob={countryMob}
          modalMob={modalMob}
        />
      </Modal>

      <View style={styles.txtinputview}>
        <CustomTextInput
          label="Mobile Number / Email"
          placeholder={STRINGS.LABEL.mobno}
          onChangeText={handleEmailinput}
        />
        <Text style={styles.handlingAll}>
          {emailValidError ? emailValidError : null}
        </Text>

        <Text style={styles.handlingAll}>
          {phoneNoerror ? phoneNoerror : null}
        </Text>
      </View>

      <View style={styles.txtinputview}>
        <CustomTextInput
          label="Password"
          placeholder={STRINGS.LABEL.pass}
          value={password}
          securetextentry={hidepassword}
          right={() => (
            <TouchableOpacity onPress={passwordToggle} style={styles.eyeview}>
              <Image
                style={styles.eyeimg}
                source={hidepassword ? images.eyes : images.eyeop}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
          onChangeText={handlePaswordinput}
        />
        <Text style={styles.handlingAll}>
          {passwordError ? passwordError : null}
        </Text>
      </View>

      <View style={styles.forgetview}>
        <TouchableOpacity>
          <Text style={styles.forgettxt}>{STRINGS.LABEL.forget}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonview}>
        <TouchableOpacity
          onPress={naviagteSignin}
          disabled={!handleButton()}
          style={
            !handleButton()
              ? {...styles.signinbutton, backgroundColor: COLOR.BROWNBACK}
              : styles.signinbutton
          }>
          <Text style={styles.button}>{STRINGS.LABEL.sign}</Text>
        </TouchableOpacity>
      </View>

      <OrCustom />

      <GoogleCustom />

      <View style={styles.bottomhead}>
        <View>
          <Text style={styles.newuser}>{STRINGS.LABEL.newuser}</Text>
        </View>
        <TouchableOpacity onPress={naviagteSignup}>
          <Text style={styles.signuptxt}>{STRINGS.LABEL.up}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
