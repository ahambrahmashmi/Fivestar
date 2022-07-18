import {StyleSheet} from 'react-native';
import {COLOR} from '../../Utils/color';
import {normalize} from '../../Utils/dimension';
const styles = StyleSheet.create({
  mainparent: {
    flex: 1,
    backgroundColor: COLOR.BLACK,
  },
  parent: {
    marginLeft: normalize(24),
    marginTop: normalize(65),
  },
  textcolor: {
    color: COLOR.WHITE,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'helvetica-blackitalic',
  },
  cover: {
    height: normalize(261),
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: normalize(22),
  },
  rectangle: {
    width: normalize(355),
    height: normalize(200),
    borderWidth: 1,
    borderColor: COLOR.WHITE,
    borderRadius: 5,
    backgroundColor: COLOR.BROWNBACK,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rectangleImage: {
    width: normalize(353),
    height: normalize(198),
    resizeMode: 'cover',
    borderRadius: 4,
  },
  coverRectangle: {
    height: normalize(24),
    width: normalize(24),
    position: 'absolute',
    left: normalize(164.5),
    top: normalize(87),
    zIndex: 1,
    opacity: 0.6,
  },
  cameraSquare: {
    height: normalize(24),
    width: normalize(24),
    position: 'absolute',
    left: normalize(50),
    top: normalize(46),
    zIndex: 1,
    opacity: 0.6,
  },
  prof: {
    width: normalize(115),
    height: normalize(115),
    position: 'absolute',
    right: normalize(35),
    bottom: 0,
    top: normalize(-58),
    backgroundColor: COLOR.BROWNBACK,
    borderRadius: 5,
  },
  prof1: {
    width: normalize(115),
    height: normalize(115),
    position: 'absolute',
    borderWidth: 1,
    borderColor: COLOR.WHITE,
    borderRadius: 5,
  },
  pencil: {
    height: normalize(50),
    top: normalize(20),
    width: normalize(30),
    justifyContent: 'center',
    position: 'absolute',
    right: normalize(28),
  },
  toucablecalendar: {
    height: normalize(50),

    width: '100%',
    justifyContent: 'center',
    position: 'absolute',
    alignItems: 'flex-end',
    top: normalize(17),
    right: normalize(30),
  },
  pencilimage: {
    height: normalize(20),
    width: normalize(20),
  },

  nextimg: {
    height: normalize(22),
    width: normalize(22),
  },
  calenderimg: {
    height: normalize(20),
    width: normalize(20),
    marginTop: normalize(7),
  },
  submitbutton: {
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
  coverprofile: {
    height: normalize(24),
    width: normalize(24),
    position: 'absolute',
    left: normalize(46),
    top: normalize(45),
    zIndex: 1,
    opacity: 0.6,
  },
  next: {
    alignItems: 'flex-end',
    bottom: normalize(6),
  },
  submitbuttonmargin: {
    marginBottom: normalize(70),
  },
  identitydesign: {
    borderWidth: 1,
    borderColor: COLOR.WHITE,
    borderRadius: 5,
    height: normalize(55),
    marginTop: normalize(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: normalize(15),
    marginHorizontal: normalize(14),
   

  },
  identitytext: {
    color: COLOR.LIGHTBLUE,
    fontSize: 20,
  },
  sportstext:{
    color:COLOR.LIGHTBLUE,
    fontSize:16
  },

  sportsView:{
    borderWidth: 1,
    borderColor: COLOR.WHITE,
    borderRadius: 5,
    minHeight: normalize(55),
    marginTop: normalize(20),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: normalize(15),
    marginHorizontal: normalize(14),
    flexWrap:'wrap'
  },
  viewMap:{
    flexDirection: 'row',
    backgroundColor: COLOR.BROWNBACK,
    marginHorizontal: normalize(15),
    marginVertical:normalize(8),
    alignItems: 'center',
    paddingHorizontal: normalize(5),
    paddingVertical: normalize(2),
    justifyContent: 'space-around',
    borderRadius: normalize(5),
  
  },
  elementtxt:{
    color: 'white',
                      fontWeight: 'bold',
                      fontFamily: 'Helvetica',
  },
  crossimg:{
    height: 20,
    width: 20,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  sportswatch:{
    color: 'white', marginTop: 30
  },
  AddNew:{color: COLOR.LIGHTBLUE,fontFamily:'helvetica-blackitalic',fontSize:14,marginLeft:20}
});
export {styles};
