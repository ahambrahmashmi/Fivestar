import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';

import {COLOR} from '../../Utils/color';
import {images} from '../../Utils/images';
import {normalize} from '../../Utils/dimension';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

const {width, height} = Dimensions.get('screen');
export default function AccountScreen() {
  const navigation = useNavigation<any>();
  const [coverimg, setCoverimg] = useState<any>();
  const [profileimage, setProfileimage] = useState<any>();
  const [textShown, setTextShown] = useState(false);
  const [lengthMore, setLengthMore] = useState(false);

  const dispatch = useDispatch<any>();
  const {complete_profile_Data} = useSelector(
    (store: any) => store.sportsReducer,
  );
  const {DATA_SIGN_UP} = useSelector(
    (store: any) => store.createaccountReducer,
  );
  console.log('COMPLETE DATAA', complete_profile_Data);
  let editaName = DATA_SIGN_UP.data.name;
  let editEmail = DATA_SIGN_UP.data.username;
  let BIO = complete_profile_Data?.data?.data?.personalDetails?.bio;

  const toggleNumberOfLines = () => {
    //To toggle the show text or hide it
    setTextShown(!textShown);
  };

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
  const NavigateEdit = () => {
    navigation.navigate('Edit');
  };
  let ComleteProfData = complete_profile_Data?.data?.data?.likedSport;

  const Expandmore = () => {
    setLengthMore(!lengthMore);
  };
  return (
    <SafeAreaView style={styles.parent}>
      <ScrollView>
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

          <TouchableOpacity onPress={NavigateEdit} style={styles.editview}>
            <Image style={styles.editimg} source={images.editbutton} />
          </TouchableOpacity>
        </View>

        <View style={styles.headerView}>
          <View>
            <Text style={styles.txtname}>{editaName}</Text>
            <Text style={styles.txtusername}>{editEmail}</Text>
          </View>
          <View style={styles.fanrateview}>
            <Image style={styles.fanimg} source={images.fanrate} />
          </View>
        </View>
        <View style={styles.followerview}>
          <Image style={styles.followerimg} source={images.follower} />
          <Text style={styles.biotxt}>{'Bio'}</Text>

          <Text style={styles.txtusername}>
            {BIO?.length > 130 && !textShown
              ? BIO?.substring(0, 130) + '...'
              : BIO + '...'}
            {BIO?.length > 130 ? (
              <Text onPress={toggleNumberOfLines} style={styles.moretxt}>
                {textShown ? ' less' : ' more'}
              </Text>
            ) : null}
          </Text>
        </View>
        {lengthMore ? (
          <TouchableOpacity onPress={Expandmore} style={{left: normalize(20)}}>
            <Image
              style={{width: normalize(335), height: normalize(31)}}
              source={images.more}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={Expandmore} style={{left: normalize(20)}}>
            <Image
              style={{width: normalize(335), height: normalize(31)}}
              source={images.less}
            />
          </TouchableOpacity>
        )}
        {lengthMore && (
          <>
            <View style={{flexDirection: 'row', left: normalize(20)}}>
              <Text style={styles.biotxt}>{'Sports | Watch'}</Text>
              <TouchableOpacity style={styles.addView}>
                <Image style={styles.addimg} source={images.add} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.sportsView}>
              {ComleteProfData?.length > 0 &&
                ComleteProfData.map((ele: any) => {
                  return (
                    <View style={styles.viewMap}>
                      <Text style={styles.txtsports}>{ele?.sportName}</Text>
                      <TouchableOpacity>
                        <Image style={styles.crossimg} source={images.cross} />
                      </TouchableOpacity>
                    </View>
                  );
                })}
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: COLOR.BLACK,
    marginBottom: 90,
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
  editview: {
    left: normalize(285),
    bottom: normalize(15),
  },
  editimg: {
    height: normalize(32),
    width: normalize(71),
  },
  headerView: {
    marginTop: normalize(40),
    marginLeft: normalize(14),
    flexDirection: 'row',
  },
  txtname: {
    color: COLOR.WHITE,
    fontSize: 18,
    fontFamily: 'helvetica-blackitalic',
    fontWeight: '400',
  },
  txtusername: {
    color: COLOR.WHITE,
    fontSize: 15,
    fontFamily: 'helveticaNeue',
    fontWeight: '500',
    marginVertical: 10,
  },
  fanrateview: {
    left: 110,
  },
  fanimg: {
    height: normalize(45),
    width: normalize(88),
  },
  followerview: {
    marginTop: normalize(0),
    marginLeft: normalize(20),
  },
  followerimg: {
    height: normalize(80),
    width: normalize(345),
  },
  biotxt: {
    color: 'grey',
    fontSize: 18,
    fontFamily: 'helvetica-blackitalic',
    fontWeight: '400',
    marginTop: 20,
  },
  moretxt: {
    fontSize: 15,
    fontFamily: 'helveticaNeue',
    fontWeight: '500',
    marginVertical: 10,
    color: COLOR.LIGHTBLUE,
  },

  crossimg: {
    height: normalize(20),
    width: normalize(20),
    marginLeft: normalize(10),
    resizeMode: 'contain',
  },
  txtsports: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },
  addimg: {
    height: normalize(20),
    width: normalize(100),
  },
  addView: {
    top: 18,
    marginHorizontal: 80,
  },
  viewMap: {
    flexDirection: 'row',
    backgroundColor: COLOR.BROWNBACK,
    marginHorizontal: normalize(10),
    marginVertical: normalize(8),
    alignItems: 'center',
    paddingHorizontal: normalize(5),
    paddingVertical: normalize(2),
    // justifyContent: 'space-around',
    borderRadius: normalize(5),
  },
  sportsView: {
    // borderWidth: 1,
    // borderColor: COLOR.WHITE,
    // borderRadius: 5,
    minHeight: normalize(55),
    marginTop: normalize(20),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: normalize(2),
    marginHorizontal: normalize(10),
    flexWrap: 'wrap',
  },
});
