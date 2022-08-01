import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Alert,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {COLOR} from '../../Utils/color';
import {images} from '../../Utils/images';
import {normalize} from '../../Utils/dimension';
import {useDispatch, useSelector} from 'react-redux';
import {getHomeAction} from '../../redux/Home/action';
import Video from 'react-native-video';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

const {width, height} = Dimensions.get('screen');

export default function HomeScreen() {
  const [currIndex, setCurrindex] = useState<any>(0);
  const videoref = useRef<any>();
  const dispatch = useDispatch<any>();
  const {DATA_SIGN_UP} = useSelector(
    (store: any) => store.createaccountReducer,
  );

  const {Home_Data} = useSelector((store: any) => store.homeReducer);

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

  useEffect(() => {
    if (!!videoref.current) {
      videoref.current.seek(0);
    }
  }, [currIndex]);

  const _renderItem = ({item, index}: any) => {
  
    
    return (
      <View style={{flexWrap:'wrap'}}>
        <TouchableOpacity style={styles.rotateview}>
          <Image style={styles.squarex} source={images.square} />
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
          style={styles.backgroundvideo}
          source={{uri: item?.contentUrl, type: 'm3u8'}}
          ref={videoref}
          resizeMode="contain"
          paused={currIndex !== index}
        />
      </View>
    );
  };

  const onChangeIndex = ({index}: any) => {
    setCurrindex(index);
  };
  return (
    <View style={styles.parent}>
      <StatusBar barStyle={'light-content'} translucent={true} />

      <SwiperFlatList
        data={Home_Data.result}
        renderItem={_renderItem}
        // pagingEnabled={true}
        vertical={true}
        keyExtractor={(item, index): any => index.toString()}
        onChangeIndex={onChangeIndex}
      />

      <View style={styles.logoview}>
        <Image style={styles.logoimg} source={images.logo} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: COLOR.BLACK,
  },
  backgroundvideo: {
    // position:'absolute',

    height: height,
    width: width,
  },
  logoview: {
    alignSelf: 'center',
    position: 'absolute',
    top: normalize(70),
  },
  logoimg: {
    height: normalize(20),
    width: normalize(100),
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
  rotateview: {
    top: normalize(180),
    position: 'absolute',
    zIndex: 1,
    right: normalize(30),
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
    top: normalize(310),
    right: normalize(20),
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.BROWNBACK,
    resizeMode:'contain'
  },
  circleviewsave: {
    height: normalize(40),
    width: normalize(40),
    borderRadius: normalize(40 / 2),
    borderWidth: 1,
    borderColor: 'white',
    flex: 1,
    top: normalize(380),
    right: normalize(20),
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.BROWNBACK,
    resizeMode:'contain'
  },
  circleviewfive: {
    height: normalize(40),
    width: normalize(40),
    borderRadius: normalize(40 / 2),
    borderWidth: 1,
    borderColor: 'white',
    flex: 1,
    top: normalize(480),
    right: normalize(20),
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.BROWNBACK,
    resizeMode:'contain'
  },
  headcolor: {
    color: 'white',
  },
});
