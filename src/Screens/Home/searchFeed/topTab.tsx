import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {images} from '../../../Utils/images';
import {useDispatch, useSelector} from 'react-redux';
import {getSearchFeedAction} from '../../../redux/searchFeeds/action';
import {normalize} from '../../../Utils/dimension';
import {COLOR} from '../../../Utils/color';
export default function TopFeedsTab(props: any) {
  const [page, setPage] = useState<number>(1);
  const [code, setCode] = useState<any>(null);
  const [isLoading, setisLoading] = useState(false);
  const dispatch = useDispatch<any>();
  const {search_feed} = useSelector((store: any) => store.searchFeedReducer);

  // ====>>>DIPATCH TOPTAB FEED DATA<<<<<=======
  useEffect(() => {
    setisLoading(true);
    dispatch(
      getSearchFeedAction(
        props.search,       //TEXT ON CHANGE TEXT
        page,
        '1',
        (response: any) => {
          console.log('response', response);
          setCode(response?.data?.statusCode);
          if (response?.data?.statusCode === 200) {
            setisLoading(false);
          }
        },
        (errorAPI: any) => {
          console.log('errrorr', errorAPI);
          setCode(errorAPI.response?.data?.statusCode);
          setisLoading(false);
        },
      ),
    );
  }, [props.search]);

    // =====>>ITEMSEPARTOR<<<<<<=====
    const _ItemSeparatorComponent = () => {
      return <View style={styles.zipcodeitem} />;
    };

    // ========>>>IMPLEMENT PAGINATATION<<<<<<<<<<==========
  const _onEndReached = () => {
    setPage(page + 1);
    dispatch(
      getSearchFeedAction(
        props.search,
        page,
        '1',
        (response: any) => {
          if (response?.data?.statusCode === 200) {
          }
        },
        (errorAPI: any) => {
          console.log('errrorr', errorAPI);
        },
      ),
    );
  };

  //========== >>>>>>>>>>>RENDEREMPTY<<<<<<<<<<<<<<<<<<<<============
  const _renderEnmptyList = () => {
    console.log('_renderEnmptyList call');

    return (
      <View style={styles.Parent}>
        <View style={styles.searchView}>
          <Image style={styles.searchicon} source={images.searchnot} />
        </View>
        <View style={styles.textview}>
          <Text style={styles.resulttxt}>{'No Result Found'}</Text>
          <Text style={styles.sorrytxt}>
            {'Sorry, no search results found!'}
          </Text>
        </View>
      </View>
    );
  };
  // ====>>>>>>RENDERITEM<<<<<======
  const _renderItem = ({item}: any) => {
    return (
      <View style={styles.renderView}>
        <Image style={styles.profile} source={images.profileimg}/>
        <View>

        <Text style={styles.textdesign}>{item.name}</Text>
        <Text style={styles.usertxt}>{item.username}</Text>
        </View>
      </View>
    );
  };



  return (
    <View>
      <FlatList
        data={search_feed}
        renderItem={_renderItem}
        onEndReached={_onEndReached}
        onEndReachedThreshold={0.5}
        contentContainerStyle={{height: 600}}
        ItemSeparatorComponent={_ItemSeparatorComponent}
        ListEmptyComponent={
          code == 200 && search_feed.length <= 0 ? _renderEnmptyList : null
        }
      />
      {/* =====>>>>ACTIVITY INDIACTOR<<<<<<====== */}
      {isLoading && (
        <ActivityIndicator
          size={'large'}
          color={COLOR.LIGHTBLUE}
          style={styles.indicator}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  zipcodeitem: {
    height: normalize(3),
    width: '100%',
    backgroundColor: '#1B1B1B',
  },
  searchicon: {
    height: normalize(120),
    width: normalize(120),
  },
  Parent: {
    justifyContent: 'center',
    flex: 1,
  },
  searchView: {
    alignSelf: 'center',
  },
  textview: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    top: normalize(30),
  },
  resulttxt: {
    color: COLOR.WHITE,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    fontFamily: 'helvetica-blackitalic',
  },
  sorrytxt: {
    color: '#929292',
    fontSize: 15,
    fontFamily: 'helveticaNeue',
    top: normalize(10),
  },
  indicator:{
    position: 'absolute', right: normalize(180), top: normalize(250)
  },
  textdesign:{
    color: 'white',marginLeft:normalize(10),fontSize:16,fontFamily:'helveticaNeue',fontWeight:'400'
  },
  profile:{
    height:normalize(50),
    width:normalize(50)
  },
  renderView:{
    padding: normalize(15),alignItems:'center',flexDirection:'row'
  },
  usertxt:{
    color:'grey',marginLeft:normalize(10),fontSize:14
  }
});