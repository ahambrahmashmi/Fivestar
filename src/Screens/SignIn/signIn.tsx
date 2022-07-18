import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {COLOR} from '../../Utils/color';
import {STRINGS} from '../../Utils/string';
import {normalize} from '../../Utils/dimension';
import CustomTextInput from '../../component/customTextInput';
import {images} from '../../Utils/images';
import {useNavigation} from '@react-navigation/native';
import {emailRegex, passwordRegex} from '../../Utils/constant';
import OrCustom from '../../component/orCustom';
import GoogleCustom from '../../component/googleCustom';
import { styles } from './style';
export default function SignIn() {
  const [email, setEmail] = React.useState('');
  const [emailValidError, setEmailValidError] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [buttonEnabled, buttonDisabled] = React.useState<boolean>(false);
  const [hidepassword,setHidepassword]=React.useState<boolean>(true);
  const navigation = useNavigation<any>();

  const naviagteSignin = () => {
    navigation.navigate('CreateAccount');
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

  const handleEmailinput = (value: any) => {
    setEmail(value);
    handleValidEmail(value);

  };
  const handlePaswordinput = (value: any) => {
    setPassword(value);
    handlePassword(value);
    buttonDisabled(value)
  };

  const handleButton = () => {
    if (emailValidError== '' && passwordError==''  && buttonEnabled) {
      return true;
    } else {
      return false;
    }
  };

  const passwordToggle=()=>{
    setHidepassword(!hidepassword)
  }
  return (
    <SafeAreaView style={styles.parent}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.headerview}>
        <Text style={styles.signtxt}>{STRINGS.LABEL.signin}</Text>
        <Text style={styles.mobtxt}>{STRINGS.LABEL.mobno}</Text>
      </View>
      

      <View style={styles.txtinputview}>
        <CustomTextInput
          label="Mobile Number / Email"
          placeholder={STRINGS.LABEL.mobno}
          value={email}
          onChangeText={handleEmailinput}
        />
        <Text style={styles.handlingAll}>
          {emailValidError ? emailValidError : null}
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

     <GoogleCustom/>

      <View style={styles.bottomhead}>
        <View>
          <Text style={styles.newuser}>{STRINGS.LABEL.newuser}</Text>
        </View>
        <TouchableOpacity onPress={naviagteSignin}>
          <Text style={styles.signuptxt}>{STRINGS.LABEL.up}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
