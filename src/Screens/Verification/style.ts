import {StyleSheet} from 'react-native';
import {COLOR} from '../../Utils/color';
import {vh, vw} from '../../Utils/dimension';

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: COLOR.BLACK,
  },
  mainhead: {
    height: vh(32),
    width: vw(32),
    marginTop: vh(58),
    left: vw(16),
  },
  lefticon: {
    width: vw(375),
    height: vh(82),
  },
  verifyview: {
    marginTop: vh(22),
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
  },
  receiverparent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vh(40),
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

export {styles};
