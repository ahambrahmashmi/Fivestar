import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
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
import {vh, vw} from '../../Utils/dimension';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface userdefined {
  val?: any;
  value?: any;
}

export default function CreateAccount(props: userdefined) {
  const navigation = useNavigation<any>();
  const [isSelected, setSelection] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [emailValidError, setEmailValidError] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [mobno, setMobno] = React.useState('');
  const [mobnoerror, setMobnoerror] = React.useState('');
  const [name, setName] = React.useState('');
  const [nameerror, setnameError] = useState('');
  const [hidePass, setHidePass] = React.useState(true);

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
    if (val.length === 0) {
      setMobnoerror('Phone Number must be enter');
    } else if (mobilenoRegex.test(val) == false) {
      setMobnoerror('Enter valid Phone Number');
    } else if (mobilenoRegex.test(val) == true) {
      setMobnoerror('');
    }
  };

  const NaviagteEdit = () => {
    navigation.navigate('Edit');
  };

  const fullName = (value: any) => {
    setName(value);
    handleName(value);
  };

  const mobNo = (value: any) => {
    setMobno(value);
    handleValidMobno(value);
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

  const verifyNavigate = () => {
    navigation.navigate('Verification');
  };

  const passwordToggle = () => {
    setHidePass(!hidePass);
  };

  return (
    <SafeAreaView style={styles.mainparent}>
      <View style={styles.leftview}>
        <TouchableOpacity onPress={NaviagteEdit}>
          <Image style={styles.leftarrowimg} source={images.left} />
        </TouchableOpacity>
      </View>
      <View style={styles.createparent}>
        <View>
          <Text style={styles.createtext}>{STRINGS.LABEL.CREATEACC}</Text>
        </View>
        <View style={styles.innercreatesign}>
          <Text style={styles.signuptext}>{STRINGS.LABEL.SIGN}</Text>
        </View>
      </View>
      <KeyboardAwareScrollView bounces={false}>
        <View style={styles.innermainview}>
          <CustomTextInput
            label="Full Name"
            placeholder={STRINGS.LABEL.FUllNAME}
            onChangeText={fullName}
          />

          <Text style={styles.handlingAll}>{nameerror ? nameerror : null}</Text>

          <CustomTextInput
            label="Mobile Number"
            placeholder={STRINGS.LABEL.MobNO}
            value={mobno}
            onChangeText={mobNo}
            keyboardtype="number-pad"
          />

          <Text style={styles.handlingAll}>
            {mobnoerror ? mobnoerror : null}
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
            onPress={verifyNavigate}
            disabled={!isSelected}
            style={
              !isSelected
                ? {...styles.createbutton, backgroundColor: COLOR.BROWNBACK}
                : styles.createbutton
            }>
            <Text style={styles.buttontext}>{STRINGS.LABEL.CREATE}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.orparent}>
          <View style={styles.orinner} />
          <View>
            <Text style={styles.ortext}>{STRINGS.LABEL.or}</Text>
          </View>
          <View style={styles.orouter} />
        </View>
        <TouchableOpacity>
          <View style={styles.parentgoogle}>
            <Image style={styles.googleimg} source={images.google} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.parentgoogle}>
            <Image style={styles.googleimg} source={images.apple} />
          </View>
        </TouchableOpacity>
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
