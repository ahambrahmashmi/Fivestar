import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {STRINGS} from '../Utils/string';

export default function OrCustom() {
  return (
    <View style={styles.ORparent}>
      <View style={styles.orinner}></View>

      <Text style={styles.ortxt}>{STRINGS.LABEL.or}</Text>

      <View style={styles.orinner1}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  ORparent: {
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  orinner: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    flex: 1,
    marginHorizontal: 5,
  },
  ortxt: {
    color: 'grey',
  },
  orinner1: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    flex: 1,
    marginHorizontal: 5,
  },
});
