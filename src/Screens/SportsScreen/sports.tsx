import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {COLOR} from '../../Utils/color';
import leftArrow from '../../component/leftArrow';
import LeftArrow from '../../component/leftArrow';
import {STRINGS} from '../../Utils/string';
import {normalize} from '../../Utils/dimension';
import {images} from '../../Utils/images';
import {useDispatch, useSelector} from 'react-redux';
import sportsReducer from '../../redux/EditDetails/reducer';
import {getSportsAction} from '../../redux/EditDetails/action';
import {useNavigation, useRoute} from '@react-navigation/native';
import SportsComponent from '../../component/sportsComponent';
import SearchTextinput from '../../component/searchTextinput';

interface userdefined {
  navigation?: any;
  isSelected?: any;
}

export default function Sports(props: userdefined) {
  const [selecteditem, setSelecteditem] = useState<any>([]);
  const navigation = useNavigation<any>();
  const [index, setIndex] = React.useState('');
  const dispatch = useDispatch();

  const {call} = useRoute<any>().params;

  const {DATA} = useSelector((store: any) => store.sportsReducer);

  React.useEffect(() => {
    call(selecteditem);
  }, [selecteditem]);

  const transfer = useCallback(
    (item: any) => {
      const index = selecteditem.findIndex((ele: any) => ele == item);

      if (index == -1) {
        setSelecteditem([...selecteditem, item]);
      } else {
        selecteditem.splice(index, 1);
        setSelecteditem([...selecteditem]);
      }
    },
    [selecteditem],
  );

  const _renderItem = ({item}: any) => {
    return (
      <SportsComponent
        img={item.sportImg}
        imgText={item.sportName}
        callback={transfer}
      />
    );
  };

  console.log('selected', selecteditem);

  return (
    <View style={styles.parent}>
      <LeftArrow
        style={styles.arrowstyle}
        NaviagtePress={() => props.navigation.goBack()}
      />

      <View style={styles.sportsview}>
        <Text style={styles.sportstxt}>{STRINGS.LABEL.SPORTS.sportslike}</Text>
        <Text style={styles.play}>{STRINGS.LABEL.SPORTS.play}</Text>
      </View>

      <SearchTextinput placeholder={'Search Sports'}
         onChangeText
      />

      <FlatList data={DATA.data} renderItem={_renderItem} numColumns={3} />

      <View>
        {selecteditem.length > 0 ? (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[styles.button]}>
            <Text style={styles.buttontxt}>{STRINGS.LABEL.CONTINUE}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={[styles.buttonDisable]}>
            <Text style={styles.buttontxt}>{STRINGS.LABEL.CONTINUE}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: COLOR.BLACK,
  },
  arrowstyle: {
    marginTop: 60,
  },
  sportsview: {
    marginLeft: normalize(20),
    marginTop: normalize(18),
  },
  sportstxt: {
    color: COLOR.WHITE,
    fontFamily: 'helvetica-blackitalic',
    fontSize: 24,
  },
  play: {
    color: COLOR.WHITE,
    fontFamily: 'helvetica-blackitalic',
    fontSize: 24,
    marginTop: 12,
  },

  gridview: {
    marginTop: normalize(16),
    marginHorizontal: normalize(11),
  },
  button: {
    marginTop: normalize(15),
    backgroundColor: COLOR.LIGHTBLUE,
    width: normalize(345),
    height: normalize(48),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    bottom: normalize(25),
    left: normalize(5),
  },
  buttontxt: {
    color: COLOR.BLACK,
    fontFamily: 'helvetica-Blackitalic',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonDisable: {
    marginTop: normalize(15),
    backgroundColor: '#282828',
    width: normalize(345),
    height: normalize(48),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    bottom: normalize(25),
    left: normalize(5),
  },
});
