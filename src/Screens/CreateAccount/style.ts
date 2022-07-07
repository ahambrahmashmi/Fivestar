import {StyleSheet} from 'react-native';
import {COLOR} from '../../Utils/color';
import {normalize} from '../../Utils/dimension';
const styles = StyleSheet.create({
  mainparent: {
    flex: 1,

    backgroundColor: COLOR.BLACK,
    
  },
  leftview: {
    marginTop: normalize(15),
    marginLeft:normalize(16),
  },
  leftarrowimg: {
    height: normalize(30),
    width:normalize(30),
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
    marginLeft:normalize(24),
    marginTop: normalize(14),
  },
  innercreatesign: {
    marginTop: normalize(8),
  },
  innermainview: {
    marginTop: normalize(5),
  },
  createbutton: {
    left:normalize(10),

    backgroundColor: COLOR.LIGHTBLUE,
    borderRadius:normalize(5),
    justifyContent: 'center',
    alignItems: 'center',
    height: normalize(50),
    marginTop: normalize(30),
    width:normalize(350),
  },
  buttontext: {
    fontSize: 18,
    fontFamily: 'helvetica-blackitalic',
  },
  checkBox: {
    // marginRight: 11,
    marginLeft:normalize(22),
    width:normalize(18),
    height: normalize(18),
    marginTop: normalize(10),
  },
  checkboxparent: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  innercheckbox: {
    right:normalize(5),
  },
  agree: {
    marginTop: normalize(10),
    marginLeft:normalize(3),
  },
  agreetext: {
    color: 'white',
    fontFamily: 'Helvetica',
    fontSize: 14,
  },
  terms: {
    marginTop: normalize(10),
    marginRight:normalize(170),
  },
  termstext: {
    color: COLOR.LIGHTBLUE,
    fontFamily: 'Helvetica',
    fontSize: 14,
  },
  orparent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalize(25),
  },
  orinner: {
    flex: 1,
    height: normalize(1),
    backgroundColor: 'grey',
  },
  ortext: {
    width:normalize(50),
    textAlign: 'center',
    color: 'white',
  },
  orouter: {
    flex: 1,
    height: normalize(1),
    backgroundColor: 'grey',
  },
  googleimg: {
    width:normalize(355),
    height: normalize(48),
    borderRadius: normalize(5),
  },
  parentgoogle: {
    alignSelf: 'center',
    marginTop: normalize(20),
  },
  alreadyuser: {
    color: COLOR.WHITE,
    left:normalize(105),
    fontSize: 15,
  },
  sign: {
    color: COLOR.LIGHTBLUE,
    right:normalize(115),
    fontFamily: 'helvetica-blackitalic',
    fontSize: 16,
  },
  bottomsign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: normalize(15),
    alignItems: 'center',
  },

  handlingAll: {
   top:normalize(5),
    height:normalize(15),
    color: 'red',
    paddingLeft:normalize(15),
  
  },
  eyeview: {
    height: normalize(50),
    top: 20,
    width:normalize(30),
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
