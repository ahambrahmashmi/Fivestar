import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';

interface PROPS {
  right?: any;
  mode?:any;
  label?:string,
  placeholder?:string,
  value?:any,
  placeholderTextColor?:string
  onChangeText?:any;
  securetextentry?:boolean
  keyboardtype?:any
  multiline?:boolean
}

export default function CustomTextInput(props: PROPS) {
  let {right,securetextentry,keyboardtype='default'} = props;
  
  console.log('props right', right);

  return (
    <View >
      <TextInput
        {...props}
       
        mode={'outlined'}
        // dense={true}
        secureTextEntry={securetextentry}
        right={null}
        keyboardType={keyboardtype}
        numberOfLines={3}
        activeOutlineColor="white"
        outlineColor="white"
        selectionColor="#44C2E3"
        placeholderTextColor="white"
        autoCapitalize='none'
        // autoCorrect={false}
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
    color: 'white',
    fontSize:15,
    //width:'100%',
    marginHorizontal:14,
    height:48,
    justifyContent: 'center'

  },
});
