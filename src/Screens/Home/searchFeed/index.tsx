import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLOR} from '../../../Utils/color';
import SearchTextinput from '../../../component/searchTextinput';
import {normalize} from '../../../Utils/dimension';
import TopTabNav from '../../../routes/topTabNav';

export default function SearchScreen() {
  return (
    <View style={styles.parent}>
      <SearchTextinput
        placeholder={'Search'}
        styletxtinput={styles.input}
        styleview={styles.searchview}
      />
      <TopTabNav/>
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
});
