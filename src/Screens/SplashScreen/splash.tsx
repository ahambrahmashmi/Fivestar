import {
  View,
  StyleSheet,
  LogBox,
  Image,
  Animated,
  StatusBar,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {images} from '../../Utils/images';
import {normalize} from '../../Utils/dimension';
import {useSelector} from 'react-redux';
LogBox.ignoreAllLogs();
function Splash(): any {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const {DATA_SIGN_UP} = useSelector(
    (store: any) => store.createaccountReducer,
  );
console.log('splash',DATA_SIGN_UP);

  let token = DATA_SIGN_UP.data.authToken;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 6000,
      useNativeDriver: false,
    }).start();
    setTimeout(() => {
        //navigation.replace('SignIn');
      if (token) {
        navigation.navigate('Edit');
      } else {
        navigation.replace('SignIn');
      }
    }, 3000);
  }, [fadeAnim]);
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Image style={styles.imageman} source={images.man} />
      <Image style={styles.imagebackground} source={images.background} />
      <View style={styles.fivemainView}>
        <Image style={styles.fiveimage} source={images.union} />
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              opacity: fadeAnim,
            },
          ]}>
          <Image style={styles.imageStar} source={images.star} />
        </Animated.View>
      </View>
    </View>
  );
}
export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageman: {
    height: '100%',
    width: '100%',
  },
  fadingContainer: {
    padding: normalize(20),
    backgroundColor: 'powderblue',
  },
  imagebackground: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  fivemainView: {
    position: 'absolute',
    flexDirection: 'row',
    left: normalize(29),
    top: normalize(20),
    right: normalize(29),
  },
  fiveimage: {
    height: normalize(80),
    width: normalize(360),
    marginTop: normalize(70),
    alignSelf: 'center',
  },
  imageStar: {
    height: normalize(80),
    width: normalize(110.89),
    top: normalize(50),
    right: normalize(187),
    resizeMode: 'cover',
  },
});
