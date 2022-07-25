import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Alert,
  FlatList,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {COLOR} from '../../Utils/color';
import {images} from '../../Utils/images';
import {normalize} from '../../Utils/dimension';
import {useDispatch, useSelector} from 'react-redux';
import {getHomeAction} from '../../redux/Home/action';
import Video from 'react-native-video';
export default function HomeScreen() {
  const dispatch = useDispatch<any>();
  const {DATA_SIGN_UP} = useSelector(
    (store: any) => store.createaccountReducer,
  );
  console.log('hgdhjdf', DATA_SIGN_UP);

  const {Home_Data} = useSelector((store: any) => store.homeReducer);
  console.log('dnfffn', DATA_SIGN_UP);

  let token = DATA_SIGN_UP.data.authToken;
  useEffect(() => {
    dispatch(
      getHomeAction(
        token,
        (response: any) => {
          if (response?.data?.statusCode === 200) {
          }
        },
        (errorAPI: any) => {
          Alert.alert('data not found');
        },
      ),
    );
  }, []);
  const _renderItem = (item: any) => {
    return (
      <View style={{flex: 1}}>
        <Image style={styles.logoimg} source={images.logo} />

        <View>

          <TouchableOpacity>
            <View style={{zIndex: 1, position: 'absolute', right: 20,}}>
              <Image style={styles.squarex} source={images.square} />
            </View>

          </TouchableOpacity>

          <TouchableOpacity style={styles.circleview}>
            <Image style={styles.shareView} source={images.forward} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.circleviewsave}>
            <Image style={styles.share} source={images.save} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.circleviewfive}>
            <Image style={styles.sharetrans} source={images.fiveStar} />
          </TouchableOpacity>

          <Video
            style={{height: 590, width: 375}}
            source={{uri: item?.item?.contentUrl, type: 'm3u8'}}
            playInBackground={false}
            // fullscreen={true}
            // fullscreenOrientation={'landscape'}
// pictureInPicture={true}
posterResizeMode='cover'
resizeMode='contain'

          
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.parent}>
      <StatusBar barStyle={'light-content'} translucent={true} />
      <View style={styles.logoview}></View>

      <FlatList data={Home_Data.result} renderItem={_renderItem}
      pagingEnabled={true}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: COLOR.BLACK,
  },
  logoview: {
    alignSelf: 'center',
    bottom: 30,
  },
  logoimg: {
    height: normalize(20),
    width: normalize(100),
    // position:'absolute',
    // zIndex:1,
    alignSelf: 'center',
    marginTop: normalize(10),
  },
  square: {
    height: normalize(24),
    width: normalize(32),
  },
  allIcon: {
    marginTop: normalize(48),
    position: 'absolute',
    right: normalize(22),
  },
  share: {
    height: normalize(24),
    width: normalize(32),
    position: 'absolute',

    resizeMode: 'contain',
  },
  shareView: {
    height: normalize(24),
    width: normalize(28),
    position: 'absolute',
    // top: 200,
    // zIndex: 1,
    // right:10,
    resizeMode: 'contain',
  },
  squarex: {
    height: normalize(24),
    width: normalize(32),
    // position: 'absolute',
    top: 100,
    // zIndex:1,

    resizeMode: 'contain',
  },
  sharetrans: {
    height: normalize(24),
    width: normalize(32),
    position: 'absolute',

    resizeMode: 'contain',
  },
  circleview: {
    height: normalize(40),
    width: normalize(40),
    borderRadius: normalize(40 / 2),
    borderWidth: 1,
    borderColor: 'white',
    flex: 1,
    top: normalize(200),
    right: normalize(20),
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.BROWNBACK,
  },
  circleviewsave: {
    height: normalize(40),
    width: normalize(40),
    borderRadius: normalize(40 / 2),
    borderWidth: 1,
    borderColor: 'white',
    flex: 1,
    top: normalize(280),
    right: normalize(20),
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.BROWNBACK,
  },
  circleviewfive: {
    height: normalize(40),
    width: normalize(40),
    borderRadius: normalize(40 / 2),
    borderWidth: 1,
    borderColor: 'white',
    flex: 1,
    top: normalize(370),
    right: normalize(20),
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.BROWNBACK,
  },
  headcolor: {
    color: 'white',
  },
});
