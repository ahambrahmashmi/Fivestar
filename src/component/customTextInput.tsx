import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {vh, vw} from '../Utils/dimension';

interface PROPS {
  right?: any;
  mode?: any;
  label?: string;
  placeholder?: string;
  value?: any;
  placeholderTextColor?: string;
  onChangeText?: any;
  securetextentry?: boolean;
  keyboardtype?: any;
  multiline?: boolean;
}

export default function CustomTextInput(props: PROPS) {
  let {right, securetextentry, keyboardtype = 'default'} = props;

  return (
    <View>
      <TextInput
        {...props}
        mode={'outlined'}
        secureTextEntry={securetextentry}
        right={null}
        keyboardType={keyboardtype}
        numberOfLines={3}
        activeOutlineColor="white"
        outlineColor="white"
        selectionColor="#44C2E3"
        placeholderTextColor="white"
        autoCapitalize="none"
        theme={{
          colors: {
            text: '#44C2E3',
            placeholder: 'white',
          },
        }}
        style={styles.paper}
      />
      {right !== undefined ? right() : null}
    </View>
  );
}

const styles = StyleSheet.create({
  paper: {
    backgroundColor: 'black',
    marginTop: 12,

    fontSize: 18,

    marginHorizontal: 14,
  },
});
