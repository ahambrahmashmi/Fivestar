import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {images} from '../../Utils/images';
import {vh, vw} from '../../Utils/dimension';
import { COLOR } from '../../Utils/color';

export default function CongratulationModal(props: any) {
  let {setModalOpen, modal} = props;

  const closedModal=()=>{
      setModalOpen(!modal)
  }

  return (
    <View style={styles.parent}>
      <View style={styles.thumbview}>
        <Image source={images.thumb} style={styles.thumbimage} />
      </View>
      <View style={styles.congratview}>
        <Text style={styles.congratstext}>
          {'Congratulations'.toUpperCase()}
        </Text>
      </View>
      <View style={styles.accountview}>
          <Text style={styles.accounttext}>{'Your account has been successfully'}</Text>
      </View>
      <View style={styles.congratview}>
          <Text style={styles.accounttext}>{'registered'}</Text>
      </View>

          
          <TouchableOpacity style={styles.button}
           onPress={closedModal}
          >
            <Text style={styles.buttontxt}>{'CONTINUE'}</Text>
          </TouchableOpacity>
    
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 0.29,
    backgroundColor: '#121212',
    // borderWidth: 1,
    // borderColor: 'red',
    borderTopWidth:2,
    borderColor:COLOR.LIGHTBLUE
  },
  thumbview: {
    marginTop: vh(38),
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbimage: {
    height: vh(30),
    width: vw(30),
  },
  congratview: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vh(5),
  },
  congratstext: {
    color: 'white',
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 15,
    fontWeight:'bold'
  },
  accountview:{
      justifyContent:'center',
      alignItems:"center",
      marginTop:vh(12)      },

      accounttext:{
        color:'white',fontFamily:'Helvetica',fontSize:15
      },
      button:{
        marginTop:vh(15),
        backgroundColor:COLOR.LIGHTBLUE,
        width:vw(280),
        height:vh(48),
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
      },
      buttontxt:{
          color:COLOR.BLACK,
          fontFamily:'HelveticaNeue-BoldItalic',
          fontSize:18,
          fontWeight:'bold'
      }
});
