import {
  View,
  Text,
  StyleSheet,
  Alert,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {COLOR} from '../../Utils/color';
import LeftArrow from '../../component/leftArrow';
import {STRINGS} from '../../Utils/string';
import {normalize} from '../../Utils/dimension';
import SearchTextinput from '../../component/searchTextinput';
import {useDispatch, useSelector} from 'react-redux';
import {getZipcodeaction} from '../../redux/zipCode/action';
import {useNavigation} from '@react-navigation/native';

interface userdefined {
  setmodalScreen?: any;
  modalScreen?: any;
  zipcode?: any;
  setZipcode?: any;
  navigation?: any;
  onPress?: any
}

export default function Zipcode(props: userdefined) {
  const dispatch = useDispatch<any>();
  const navigation = useNavigation<any>();
  let {modalScreen, setmodalScreen, zipcode, setZipcode} = props;
  const [data, setData] = React.useState([]);
  const {Zipcode_Data} = useSelector((store: any) => store.zipcodeReducer);
  const [searchText, setSearchText] = React.useState('1');
  const [page, setPage] = React.useState(1);

  const closedmodal = (item: any) => {
    setmodalScreen(!modalScreen);
    setZipcode(item.zipcode);
  };
  const zipcodeSeprater = () => {
    return <View style={styles.zipcodeitem} />;
  };


  console.log('zipppppp',Zipcode_Data);
  
  const _onEndReached = () => {
    setPage(page + 1);
    dispatch(
      getZipcodeaction(
        searchText,
        page,
        (response: any) => {
          if (response.data.statusCode == 200) {
            navigation.navigate('Zipcode');
          }
        },
        (errorAPI: any) => {
          Alert.alert('not hit');
        },
      ),
    );
  };

  const _renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          closedmodal(item);
        }}
        style={styles.itemview}>
        <Text style={styles.itemtxt}>
          {item.zipcode},{item.city},{item.state}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.parent}>
      <View>
        <LeftArrow
          NaviagtePress={() => {closedmodal}}
          style={styles.arrowstyle}
        />
        <View style={styles.sportsview}>
          <Text style={styles.sportstxt}>{STRINGS.LABEL.zipcodeheader}</Text>
        </View>
      </View>

      <SearchTextinput
        placeholder={STRINGS.LABEL.zipcodeheader}
        onChangeText={(text: any) => {
          setSearchText(text);
          dispatch(
            getZipcodeaction(
              text,
              page,
              (response: any) => {
                if (response.data.statusCode == 200) {
                  navigation.navigate('Zipcode');
                }
              },
              (errorAPI: any) => {
                Alert.alert('not hit');
              },
            ),
          );
        }}
      />

      <FlatList
        data={Zipcode_Data}
        renderItem={_renderItem}
        ItemSeparatorComponent={zipcodeSeprater}
        onEndReached={_onEndReached}
        onEndReachedThreshold={0.5}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: COLOR.BLACK,
    width: 450,
    right: 20,

    bottom: -20,
  },
  arrowstyle: {
    marginTop: 10,
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
  zipcodeitem: {
    height: 2,
    width: '100%',
    backgroundColor: '#1B1B1B',
  },
  itemview: {
    margin: 30,
  },
  itemtxt: {
    color: 'white',
    fontSize: 18,
   
  },
});
