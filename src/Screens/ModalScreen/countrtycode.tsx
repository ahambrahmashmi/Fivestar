import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {COLOR} from '../../Utils/color';
import {normalize} from '../../Utils/dimension';
import SearchTextinput from '../../component/searchTextinput';
import country from '../../Utils/countryCode';
import {images} from '../../Utils/images';

interface userdefined {
  modalMob?: any;
  setModalMob?: any;
  countrymob?: any;
  setCountry?: any;
}

export default function Countrtycode(props: userdefined) {
  let {modalMob, setModalMob, countrymob, setCountry} = props;

  const SETcountryCode = (item: any) => {
    setModalMob(!modalMob);
    setCountry(item.dial_code);
  };

  const _renderItem = ({item}: any) => {
    return (
    
        <TouchableOpacity
       style={styles.itemview}
          onPress={() => {
            SETcountryCode(item);
          }}>

          <View>
            <Text style={styles.itemtxt}>
              {item.flag}   {item.name}
            </Text>
          </View>

          <View>
            <Text style={styles.itemtxt}>{item.dial_code}</Text>
          </View>
        </TouchableOpacity>
    
    );
  };

  const countryseprator = () => {
    return <View style={styles.countryitem} />;
  };

  const modalClosed = () => {
    setModalMob(!modalMob);
  };

  return (
    <View style={styles.parent}>
      <View style={styles.cancelview}>
        <TouchableOpacity onPress={modalClosed} activeOpacity={0.5}>
          <Image source={images.cancel} style={styles.cancelicon} />
        </TouchableOpacity>
      </View>

      <View style={styles.countryview}>
        <Text style={styles.txtcountry}>{'Select a country'}</Text>
      </View>

      <SearchTextinput
        style={styles.textinput}
        placeholder={'Search a Country'}
      />

      <FlatList
        data={country}
        renderItem={_renderItem}
        ItemSeparatorComponent={countryseprator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: COLOR.BLACK,
    width: normalize(400),
    right: 15,
    marginTop: 'auto',

  },

  txtcountry: {
    color: 'white',
    fontSize: 26,
    fontFamily: 'helvetica-blackitalic',
    left: 9,
  },
  cancelicon: {
    height: normalize(30),
    width: normalize(30),
  },
  cancelview: {
    alignSelf: 'flex-end',
    right: normalize(50),
    top: normalize(40),
  },
  countryview: {
    marginTop: normalize(40),
  },
  textinput: {
    right: 11,
    marginTop: 25,
  },
  itemview: {
  paddingTop:normalize(20),
  height:normalize(45),
  maxWidth:normalize(350),
justifyContent:'space-between',
    flexDirection: 'row',
    margin:7
  },
  itemtxt: {
    color: 'white',
    fontSize: 18,
    justifyContent:'space-between'
  },
  countryitem: {
    height: 2,
    width: '100%',
    backgroundColor: '#1B1B1B',
  },
});
