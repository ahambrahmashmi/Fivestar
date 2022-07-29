import {View, Text, StyleSheet, Alert, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLOR} from '../../../Utils/color';
import SearchTextinput from '../../../component/searchTextinput';
import {normalize} from '../../../Utils/dimension';
import TopTabNav from '../../../routes/topTabNav';

export default function SearchScreen() {
  const [searchtxt, setSearchtxt] = useState('');

  return (
    <View style={styles.parent}>
      <SearchTextinput
        placeholder={'Search'}
        styletxtinput={styles.input}
        styleview={styles.searchview}
        onChangeText={(text: any) => {
          setSearchtxt(text);
        }}
      />
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
    width: normalize(345),
  },
  input: {
    height: normalize(40),

    fontSize: 18,
  },
  zipcodeitem: {
    height: 3,
    width: '100%',
    backgroundColor: '#1B1B1B',
  },
});
