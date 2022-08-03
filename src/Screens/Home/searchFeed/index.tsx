import {
  View,
  Text,
  StyleSheet,
  Alert,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLOR} from '../../../Utils/color';
import SearchTextinput from '../../../component/searchTextinput';
import {normalize} from '../../../Utils/dimension';
import TopTabNav from '../../../routes/topTabNav';
import {images} from '../../../Utils/images';
import { debounce } from 'lodash';
export default function SearchScreen() {
  const [searchtxt, setSearchtxt] = useState('');

  // =====>>>>IMPLEMENT DEBOUNCING<<<<<=======
   const Debounce=debounce((text: any) => {
    setSearchtxt(text);
  },1000)
  return (
    <View style={styles.parent}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'row'}}>
          <SearchTextinput
          searchtxt={searchtxt}       //PROPS PASS TO PARENT SEARCHTEXTINPUT
            setSearchtxt={setSearchtxt}  //PROPS PASS TO PARENT SEARCHTEXTINPUT
            placeholder={'Search'}
            styletxtinput={styles.input}
            styleview={styles.searchview}
            onChangeText={Debounce}
      
          />
        </View>

        <TouchableOpacity style={styles.searchView}>
          <Image style={styles.searchimg} source={images.searchs} />
        </TouchableOpacity>
      </View>
      {/*======>>>>>SEARCH CALLBACK SEND TO ALL COMPONENTS TO TOP TAB NAV<<<<<======*/}
      <TopTabNav search={searchtxt} />
    </View>
  );
}
const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: COLOR.BLACK,
  },
  searchview: {
    marginTop: normalize(50),
    width: normalize(305),
    height: normalize(45),
    left: normalize(-10),
  },
  input: {
    height: normalize(40),

    fontSize: 18,
  },
  zipcodeitem: {
    height: normalize(3),
    width: '100%',
    backgroundColor: '#1B1B1B',
  },
  searchView: {
    height: normalize(45),
    width: normalize(45),
    borderRadius: normalize(5),
    borderWidth: 1,
    borderColor: COLOR.LIGHTBLUE,
    justifyContent: 'center',
    alignItems: 'center',
    top: normalize(48),
  },
  searchimg: {
    height: normalize(30),
    width: normalize(30),
    resizeMode: 'contain',
  },
});
