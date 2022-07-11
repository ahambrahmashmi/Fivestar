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
      marginVertical: 10,
    },
    headerview: {
      marginTop: normalize(50),
      marginLeft: normalize(18),
    },
    txtinputview: {
      marginVertical: 3,
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
      marginHorizontal: 5,
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
      marginHorizontal: 8,
    },
    signuptxt: {
      color: COLOR.LIGHTBLUE,
      fontFamily: 'helvetica-blackitalic',
      fontSize: 16,
      marginTop: 5,
    },
    bottomhead: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: normalize(30),
    },
    buttonview: {
      marginTop: 100,
    },
    handlingAll: {
      top: normalize(5),
      height: normalize(15),
      color: 'red',
      paddingLeft: normalize(15),
    },
    ORparent: {
      marginTop: 18,
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 10,
    },
    orinner: {
      borderBottomWidth: 1,
      borderBottomColor: 'grey',
      flex: 1,
      marginHorizontal: 5,
    },
    ortxt: {
      color: 'grey',
    },
    orinner1: {
      borderBottomWidth: 1,
      borderBottomColor: 'grey',
      flex: 1,
      marginHorizontal: 5,
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