import {StyleSheet} from 'react-native';
import {COLOR} from '../../Utils/color';
import {vh, vw} from '../../Utils/dimension';
const styles = StyleSheet.create({
  mainparent: {
    flex: 1,
    backgroundColor: COLOR.BLACK,
  },
  parent: {
    marginLeft: vw(24),
    marginTop: vh(65),
  },
  textcolor: {
    color: COLOR.WHITE,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'helvetica-blackitalic',
  },
  cover: {
    height: vh(261),
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: vh(22),
  },
  rectangle: {
    width: vw(355),
    height: vh(200),
    borderWidth: 1,
    borderColor: COLOR.WHITE,
    borderRadius: 5,
    backgroundColor: COLOR.BROWNBACK,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rectangleImage: {
    width: vw(353),
    height: vh(198),
    resizeMode: 'cover',
    borderRadius: 4,
  },
  coverRectangle: {
    height: vh(24),
    width: vw(24),
    position: 'absolute',
    left: 164.5,
    top: 87,
    zIndex: 1,
    opacity: 0.6,
  },
  cameraSquare: {
    height: vh(24),
    width: vw(24),
    position: 'absolute',
    left: 50,
    top: 46,
    zIndex: 1,
    opacity: 0.6,
  },
  prof: {
    width: vw(115),
    height: vh(115),
    position: 'absolute',
    right: 35,
    bottom: 0,
    top: -58,
    backgroundColor: COLOR.BROWNBACK,
    borderRadius: 5,
  },
  prof1: {
    width: vw(115),
    height: vh(115),
    position: 'absolute',
    borderWidth: 1,
    borderColor: COLOR.WHITE,
    borderRadius: 5,
  },
  pencil: {
    height: vh(50),
    top: 20,
    width: vw(30),
    justifyContent: 'center',
    position: 'absolute',
    right: 28,
  },
  toucablecalendar: {
    height: vh(50),

    width: '100%',
    justifyContent: 'center',
    position: 'absolute',
    alignItems: 'flex-end',
    top: 17,
    right: 30,
  },
  pencilimage: {
    height: vh(20),
    width: vw(20),
  },

  nextimg: {
    height: vh(22),
    width: vw(22),
  },
  calenderimg: {
    height: vh(20),
    width: vw(20),
    marginTop: vh(7),
  },
  submitbutton: {
    position: 'absolute',
    bottom: 12,
    backgroundColor: COLOR.LIGHTBLUE,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: vh(48),
    width: vw(350),
  },
  button: {
    fontSize: 18,
    fontFamily: 'helvetica-blackitalic',
  },
  coverprofile: {
    height: vh(24),
    width: vw(24),
    position: 'absolute',
    left: 46,
    top: 45,
    zIndex: 1,
    opacity: 0.6,
  },
  next: {
    alignItems: 'flex-end',
    bottom: 6,
  },
  submitbuttonmargin: {
    marginBottom: 70,
  },
  identitydesign: {
    borderWidth: 1,
    borderColor: COLOR.WHITE,
    borderRadius: 5,
    height: 55,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginHorizontal: 14,
  },
  identitytext: {
    color: COLOR.LIGHTBLUE,
    fontSize: 20,
  },
});
export {styles};
