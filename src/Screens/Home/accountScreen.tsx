import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,SafeAreaView
} from 'react-native';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {COLOR} from '../../Utils/color';
import {images} from '../../Utils/images';
import {normalize} from '../../Utils/dimension';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';


const {width, height} = Dimensions.get('screen');
export default function AccountScreen() {
  const navigation = useNavigation<any>();
  const [coverimg, setCoverimg] = useState<any>();
  const [profileimage, setProfileimage] = useState<any>();
  const dispatch = useDispatch<any>();
  const {DATA}=useSelector((store:any)=>store.sportsReducer)

  console.log('yyyyyyy',DATA);
 
  console.log("mmmmmm",DATA.data);
  
   let editaName=DATA.data.name;
   let editEmail=DATA.data.email;
  const imageOpencover = async () => {
    //FUNCTION FOR COVER PICKER
    try {
      const image = await ImagePicker.openPicker({
        cropping: true,
        height: 255,
        width: width,
      });
      setCoverimg(image.path);
    } catch (err) {
      console.log('ImageErr', err);
    }
  };
  const imgageOpenprofile = async () => {
    // FUNCTION FOR PROFILE PICKER
    try {
      const image = await ImagePicker.openPicker({
        cropping: true,
      });
      setProfileimage(image.path);
    } catch (err) {
      console.log('ImageErr', err);
    }
  };
  const NavigateEdit=()=>{
    navigation.navigate('Edit')
  }
  return (
    <SafeAreaView style={styles.parent}>
  
        <View>
          <TouchableOpacity onPress={imageOpencover}>
            <ImageBackground style={styles.backimg} source={images.accountback}>
              <Image style={styles.rectangleimg} source={{uri: coverimg}} />
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity onPress={imgageOpenprofile}>
            <ImageBackground style={styles.profback} source={images.coverimg}>
              <Image style={styles.profimg} source={{uri: profileimage}} />
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={NavigateEdit}
            style={styles.editview}>
        
            <Image
              style={styles.editimg}
              source={images.editbutton}
            />
          </TouchableOpacity>
        </View>
        <View style={{top:20}}>

        <Text style={{color:'white'}}>{editaName}</Text>
        <Text style={{color:'white'}}>{editEmail}</Text>
        </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: COLOR.BLACK,
  },
  backimg: {
    height: 255,
    width: width,
    resizeMode: 'contain',
  },
  rectangleimg: {
    width: width,
    height: normalize(248),
    resizeMode: 'contain',

    borderWidth: 1,
    borderColor: COLOR.WHITE,
  },
  profback: {
    width: normalize(100),
    height: normalize(100),
    left: normalize(15),
    bottom: normalize(-50),
    resizeMode: 'contain',
    position: 'absolute',
  },
  profimg: {
    width: normalize(100),
    height: normalize(100),
    // left:normalize(15),
    // bottom:normalize(40),
    resizeMode: 'contain',
    borderWidth: 1,
    borderColor: COLOR.WHITE,
    position: 'absolute',
  },
  editview:{
  left: normalize(285), bottom: normalize(15)
  },
  editimg:{
    height: normalize(32), width: normalize(71)
  }
});
