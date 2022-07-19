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
  style?:any
  onFocus?: any
  left?:any,
  autoFocus?:any
}

export default function CustomTextInput(props:PROPS) {
  let {right, securetextentry, keyboardtype = 'default',style,autoFocus, onFocus,left} = props;

  return (
    <View>
      <TextInput
        {...props}
        mode={'outlined'}
        autoFocus={autoFocus}
        secureTextEntry={securetextentry}
        right={null}
        keyboardType={keyboardtype}
        numberOfLines={3}
        activeOutlineColor="white"
        outlineColor="white"
        selectionColor="#fff"
        placeholderTextColor="white"
        onFocus={onFocus}
        autoCapitalize="none"
        left={null}
        theme={{
          colors: {
             text: '#44C2E3',
            placeholder: 'white',
          },
        }}
        style={[styles.paper,style]}
      />
      {right !== undefined ? right() : null}
      {left !==undefined?left():null}
    </View>
  );
}

const styles = StyleSheet.create({
  paper: {
    backgroundColor: 'black',
    marginTop: 12,

    fontSize: 18,

    marginHorizontal: 14,
    fontWeight:'900'
  },
});
