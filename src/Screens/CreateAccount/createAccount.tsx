import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomTextInput from '../../component/customTextInput';
import CheckBox from '@react-native-community/checkbox';
import {images} from '../../Utils/images';
import {
  emailRegex,
  passwordRegex,
  mobilenoRegex,
  nameRegex,
} from '../../Utils/constant';
import {styles} from './style';
import {STRINGS} from '../../Utils/string';
import {COLOR} from '../../Utils/color';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {getCreateaccountAction} from '../../redux/createAccount/action';
import commonFunction from '../../Utils/commonFunction';
import OrCustom from '../../component/orCustom';
import GoogleCustom from '../../component/googleCustom';
import LeftArrow from '../../component/leftArrow';
import Modal from 'react-native-modal';

import Countrtycode from '../ModalScreen/countrtycode';
import {TextInput} from 'react-native-paper';
import {normalize} from '../../Utils/dimension';

interface userdefined {
  val?: any;
  value?: any;
  navigation?: any;
}

export default function CreateAccount(props: userdefined) {
  const navigation = useNavigation<any>();
  const [isSelected, setSelection] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [emailValidError, setEmailValidError] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [phoneNo, setphoneNo] = React.useState('');
  const [phoneNoerror, setphoneNoerror] = React.useState('');
  const [name, setName] = React.useState('');
  const [nameerror, setnameError] = useState('');
  const [modalMob, setModalMob] = useState<boolean>(false);
  const [hidePass, setHidePass] = React.useState(true);
  const dispatch = useDispatch<any>();
  const [countryMob, setCountry] = useState<string>('+1');

  const {DATA_SIGN_UP} = useSelector(
    (store: any) => store.createaccountReducer,
  );

  const Signup_Api_Hit = () => {
    dispatch(
      getCreateaccountAction(
        name,
        email,
        password,
        phoneNo,
        (response: any) => {
          if (response?.data?.statusCode === 200) {
            navigation.navigate('Verification', {phoneNo: phoneNo});
          }
        },
        (errorAPI: any) => {
          // commonFunction.showSnackbar(errorAPI?.data?.message, 'black');

          Alert.alert('errorAPI');
        },
      ),
    );
  };

  const handl = () => {
    if (
      nameerror == '' &&
      name.length > 0 &&
      emailValidError == '' &&
      email.length > 0 &&
      phoneNoerror == '' &&
      phoneNo.length > 0 &&
      passwordError == '' &&
      password.length > 0 &&
      isSelected
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleName = (val: any) => {
    if (val.length === 0) {
      setnameError('name should be minimum 3 character');
    } else if (nameRegex.test(val) === false) {
      setnameError('Please enter a valid name');
    } else if (nameRegex.test(val) === true) {
      setnameError('');
    }
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

  const handlePassword = (val: any) => {
    if (val.length === 0) {
      setPasswordError('password must be enter');
    } else if (passwordRegex.test(val) === false) {
      setPasswordError('enter valid password');
    } else if (passwordRegex.test(val) === true) {
      setPasswordError('');
    }
  };

  const handleValidMobno = (val: any) => {
    const value = val.trim()
    if (value.length === 0) {
      setphoneNoerror('Phone Number must be enter');
    } else if (mobilenoRegex.test(value) == false) {
      setphoneNoerror('Enter valid Phone Number');
    } else if (mobilenoRegex.test(value) == true) {
      setphoneNoerror('');
    }
  };

  const NaviagteEdit = () => {
    navigation.navigate('SignIn');
  };

  const fullName = (value: any) => {
    setName(value);
    handleName(value);
  };

  const phoneNoinput = (value: any) => {
    setphoneNo(value.trim());
    handleValidMobno(value.trim());
  };

  const emailInput = (value: any) => {
    setEmail(value);
    handleValidEmail(value);
  };

  const passINput = (value: any) => {
    setPassword(value);
    handlePassword(value);
  };
  const termsNavigate = () => {
    navigation.navigate('Terms');
  };

  const passwordToggle = () => {
    setHidePass(!hidePass);
  };

  const closedcountry = () => {
    setModalMob(!modalMob);
  };

  return (
    <SafeAreaView style={styles.mainparent}>
      <LeftArrow NaviagtePress={() => props.navigation.navigate('SignIn')} />
      <View style={styles.createparent}>
        <View>
          <Text style={styles.createtext}>{STRINGS.LABEL.CREATEACC}</Text>
        </View>
        <View style={styles.innercreatesign}>
          <Text style={styles.signuptext}>{STRINGS.LABEL.SIGN}</Text>
        </View>
      </View>

      <Modal isVisible={modalMob}>
        <Countrtycode
          setCountry={setCountry}
          setModalMob={setModalMob}
          countrymob={countryMob}
          modalMob={modalMob}
        />
      </Modal>

      <KeyboardAwareScrollView bounces={false}>
        <View style={styles.innermainview}>
          <CustomTextInput
            label="Full Name"
            placeholder={STRINGS.LABEL.FUllNAME}
            onChangeText={fullName}
          />

          <Text style={styles.handlingAll}>{nameerror ? nameerror : null}</Text>

         
          <View
            style={styles.boxview}>
            <CustomTextInput
              style={styles.textinputmob}
              label="Mobile Number"
              placeholder={STRINGS.LABEL.MobNO}
              value={"                "+phoneNo}
              onChangeText={phoneNoinput}
              keyboardtype="number-pad"

              left={()=>(
                <TouchableOpacity
                style={styles.countryCode}
                onPress={closedcountry}>
                <Text style={styles.defaultcountry}>{countryMob}</Text>
                <Image
                  style={styles.downimg}
                  source={images.down}
                />
        
                <Image
                  style={styles.lineimg}
                  source={images.line}
                />
              </TouchableOpacity>
              )}
            />
          </View>

          <Text style={styles.handlingAll}>
            {phoneNoerror ? phoneNoerror : null}
          </Text>
 
          <CustomTextInput
            label="Email"
            placeholder={STRINGS.LABEL.email}
            value={email}
            onChangeText={emailInput}
          />

          <Text style={styles.handlingAll}>
            {emailValidError ? emailValidError : null}
          </Text>

          <CustomTextInput
            label="Password"
            placeholder={STRINGS.LABEL.pass}
            value={password}
            securetextentry={hidePass}
            right={() => (
              <TouchableOpacity onPress={passwordToggle} style={styles.eyeview}>
                <Image
                  style={styles.eyeimg}
                  source={hidePass ? images.eyes : images.eyeop}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
            onChangeText={passINput}
          />

          <Text style={styles.handlingAll}>
            {passwordError ? passwordError : null}
          </Text>
        </View>

        <View style={styles.checkboxparent}>
          <View style={styles.innercheckbox}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              boxType={'square'}
              onFillColor={COLOR.LIGHTBLUE}
              lineWidth={2}
              onCheckColor={COLOR.BLACK}
              animationDuration={0.2}
              style={styles.checkBox}
              onTintColor={COLOR.LIGHTBLUE}
            />
          </View>
          <View style={styles.agree}>
            <Text style={styles.agreetext}>{STRINGS.LABEL.AGREE}</Text>
          </View>
          <TouchableOpacity onPress={termsNavigate}>
            <View style={styles.terms}>
              <Text style={styles.termstext}>{STRINGS.LABEL.TERMSUSE}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={Signup_Api_Hit}
            disabled={!handl()}
            style={
              !handl()
                ? {...styles.createbutton, backgroundColor: COLOR.BROWNBACK}
                : styles.createbutton
            }>
            <Text style={styles.buttontext}>{STRINGS.LABEL.CREATE}</Text>
          </TouchableOpacity>
        </View>
        <OrCustom />
        <GoogleCustom />
        <View style={styles.bottomsign}>
          <View>
            <Text style={styles.alreadyuser}>{STRINGS.LABEL.ALREADY}</Text>
          </View>
          <TouchableOpacity onPress={NaviagteEdit}>
            <View>
              <Text style={styles.sign}>{STRINGS.LABEL.SIGNIN}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
{
  /* <CustomTextInput
              label="Mobile Number"
              placeholder={STRINGS.LABEL.MobNO}
              value={phoneNo}
              onChangeText={phoneNoinput}
              keyboardtype="number-pad"
            /> */
}
