import {StyleSheet} from 'react-native';
import {COLOR} from '../../Utils/color';
import {normalize} from '../../Utils/dimension';

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: COLOR.BLACK,
  },
  mainhead: {
    height: normalize(32),
    width: normalize(32),
    marginTop: normalize(58),
    left: normalize(16),
  },
  lefticon: {
    width: normalize(375),
    height: normalize(82),
  },
  verifyview: {
    marginTop: normalize(22),
    width: normalize(375),
    height: normalize(32),
  },
  verifytxt: {
    color: '#fff',
    marginLeft: normalize(24),
    marginRight: normalize(59),
    fontSize: 24,
    fontFamily: 'helvetica-blackitalic',
  },
  digitveri: {
    marginLeft: normalize(30),
    marginRight: normalize(19),
    marginTop: normalize(6),
  },
  digitverifytxt: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Helvetica',
  },
  numberview: {
    marginLeft: normalize(30),
    marginRight: normalize(19),
    marginTop: normalize(5),
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
    marginTop: normalize(38),
    width: normalize(328),
    height: normalize(48),
    marginLeft: normalize(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  buttonparent: {
    marginTop: normalize(40),
    marginLeft: normalize(23),
    width: normalize(328),
    height: normalize(48),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.LIGHTBLUE,
    borderRadius: 5,
  },
  buttontxt: {
    color: COLOR.BLACK,
    fontSize: 18,
    fontFamily: 'helvetica-blackitalic',
  },
  receiverparent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(40),
  },
  receivetxt: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Helvetica',
  },
  resendview: {
    marginVertical: 5,
  },
  resendtxt: {
    color: COLOR.LIGHTBLUE,
    fontSize: 18,
    fontFamily: 'HelveticaNeue-BoldItalic',
  },
  girlview: {
    height: normalize(385),
    width: normalize(375),
  },
  girlimg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  bottomimg: {
    height: normalize(71),
    width: normalize(375),
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
  },
  texinput: {
    borderWidth: 1,
    borderColor: 'white',
    height: normalize(48),
    width: normalize(70),
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
    marginTop: normalize(40),
    marginLeft: normalize(23),
    width: normalize(328),
    height: normalize(48),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export {styles};
