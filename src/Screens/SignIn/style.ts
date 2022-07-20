import {StyleSheet} from 'react-native';
import {COLOR} from '../../Utils/color';
import {normalize} from '../../Utils/dimension';
const styles = StyleSheet.create({
    parent: {
      flex: 1,
      backgroundColor: COLOR.BLACK,
    },
    signtxt: {
      color: 'white',
      fontFamily: 'helvetica-blackitalic',
      fontSize: 26,
    },
    mobtxt: {
      color: 'white',
      fontFamily: 'helvetica-blackitalic',
      fontSize: 26,
      marginVertical:  normalize(10),
    },
    headerview: {
      marginTop: normalize(50),
      marginLeft: normalize(18),
    },
    txtinputview: {
      marginVertical:  normalize(3),
    },
    forgetview: {
      alignSelf: 'flex-end',
      right: normalize(10.9),
      top: normalize(10),
    },
    forgettxt: {
      color: COLOR.LIGHTBLUE,
      fontFamily: 'Helvetica',
      fontSize: 16,
      marginHorizontal:  normalize(5),
    },
    signinbutton: {
      position: 'absolute',
      bottom: normalize(12),
      backgroundColor: COLOR.LIGHTBLUE,
      borderRadius: 5,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      height: normalize(48),
      width: normalize(350),
    },
    button: {
      fontSize: 18,
      fontFamily: 'helvetica-blackitalic',
    },
  
    newuser: {
      color: COLOR.WHITE,
      fontFamily: 'HelveticaNeue',
      fontSize: 16,
      marginHorizontal:  normalize(8),
    },
    signuptxt: {
      color: COLOR.LIGHTBLUE,
      fontFamily: 'helvetica-blackitalic',
      fontSize: 16,
      marginTop:  normalize(5),
    },
    bottomhead: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: normalize(30),
    },
    buttonview: {
      marginTop:  normalize(100),
    },
    handlingAll: {
  
      height: normalize(15),
      color: 'red',
      paddingLeft: normalize(15),
      position:'absolute',
bottom: normalize(-20)
    },
    ORparent: {
      marginTop:  normalize(18),
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal:  normalize(10),
    },
    orinner: {
      borderBottomWidth: 1,
      borderBottomColor: 'grey',
      flex: 1,
      marginHorizontal:  normalize(5),
    },
    ortxt: {
      color: 'grey',
    },
    orinner1: {
      borderBottomWidth: 1,
      borderBottomColor: 'grey',
      flex: 1,
      marginHorizontal: normalize(5),
    },
    eyeview: {
      height: normalize(50),
      top:  normalize(20),
      width:normalize(30),
      justifyContent: 'center',
      position: 'absolute',
      right:  normalize(28),
    },
    eyeimg: {
      height:  normalize(20),
      width:  normalize(20),
    },
    countryCode: {
      // backgroundColor: 'black',
      borderRightWidth: 1,
      flexDirection: 'row',
      // position: 'absolute',
      // top: normalize(40),
      // zIndex: 99,
      // left: 20,
      paddingHorizontal:  normalize(10),
      alignSelf: 'flex-end',
      justifyContent: 'space-between',
    },
    defaultcountry: {
      color: 'white',
      fontSize: 16,
      bottom:5,
    },
    downimg: {
      height: normalize(10),
      width: normalize(15),
    },
    lineimg: {
      height: normalize(20),
      width: normalize(2),
      marginLeft: 5,
    },
    boxview: {
      width: normalize(390),
      left: 0,
    },
  });
  
  export {styles};