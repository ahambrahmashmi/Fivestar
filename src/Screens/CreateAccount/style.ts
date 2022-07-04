import {StyleSheet} from 'react-native';
import {COLOR} from '../../Utils/color';
import {vh, vw} from '../../Utils/dimension';
const styles = StyleSheet.create({
  mainparent: {
    flex: 1,

    backgroundColor: COLOR.BLACK,
    
  },
  leftview: {
    marginTop: vh(15),
    marginLeft: vw(16),
  },
  leftarrowimg: {
    height: vh(30),
    width: vw(30),
  },
  createtext: {
    color: COLOR.WHITE,
    fontFamily: 'helvetica-blackitalic',
    fontWeight: 'bold',
    fontSize: 25,
  },
  signuptext: {
    color: COLOR.WHITE,
    fontSize: 15,
    fontFamily: 'Helvetica',
  },
  createparent: {
    marginLeft: vw(24),
    marginTop: vh(14),
  },
  innercreatesign: {
    marginTop: vh(8),
  },
  innermainview: {
    marginTop: vh(5),
  },
  createbutton: {
    left: vw(10),

    backgroundColor: COLOR.LIGHTBLUE,
    borderRadius: vw(5),
    justifyContent: 'center',
    alignItems: 'center',
    height: vh(50),
    marginTop: vh(30),
    width: vw(350),
  },
  buttontext: {
    fontSize: 18,
    fontFamily: 'helvetica-blackitalic',
  },
  checkBox: {
    // marginRight: 11,
    marginLeft: vw(22),
    width: vw(18),
    height: vh(18),
    marginTop: vh(10),
  },
  checkboxparent: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  innercheckbox: {
    right: vw(5),
  },
  agree: {
    marginTop: vh(10),
    marginLeft: vw(3),
  },
  agreetext: {
    color: 'white',
    fontFamily: 'Helvetica',
    fontSize: 14,
  },
  terms: {
    marginTop: vh(10),
    marginRight: vw(170),
  },
  termstext: {
    color: COLOR.LIGHTBLUE,
    fontFamily: 'Helvetica',
    fontSize: 14,
  },
  orparent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vh(25),
  },
  orinner: {
    flex: 1,
    height: vh(1),
    backgroundColor: 'grey',
  },
  ortext: {
    width: vw(50),
    textAlign: 'center',
    color: 'white',
  },
  orouter: {
    flex: 1,
    height: vh(1),
    backgroundColor: 'grey',
  },
  googleimg: {
    width: vw(355),
    height: vh(48),
    borderRadius: vh(5),
  },
  parentgoogle: {
    alignSelf: 'center',
    marginTop: vh(20),
  },
  alreadyuser: {
    color: COLOR.WHITE,
    left: vw(105),
    fontSize: 15,
  },
  sign: {
    color: COLOR.LIGHTBLUE,
    right: vw(115),
    fontFamily: 'helvetica-blackitalic',
    fontSize: 16,
  },
  bottomsign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: vh(15),
    alignItems: 'center',
  },

  handlingAll: {
    marginTop: vh(3),
    color: 'red',
    paddingLeft: vw(15),
  },
  eyeview: {
    height: vh(50),
    top: 20,
    width: vw(30),
    justifyContent: 'center',
    position: 'absolute',
    right: 28,
  },
  eyeimg: {
    height: 20,
    width: 20,
  },
});

export {styles};
