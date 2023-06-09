import {View, Text, FlatList,Image,StyleSheet,ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAccountFeedAction} from '../../../redux/searchFeeds/action';
import { normalize } from '../../../Utils/dimension';
import { images } from '../../../Utils/images';
import { COLOR } from '../../../Utils/color';

export default function AccountsTab(props: any) {
  const [page, setPage] = useState<number>(1);
  const [code, setCode] = useState<any>(null);
  const [isLoading, setisLoading] = useState(false);
  const dispatch = useDispatch<any>();
  const {Account} = useSelector((store: any) => store.searchFeedReducer);

  
  useEffect(() => {
    setisLoading(true);
    dispatch(
      getAccountFeedAction(
        props.search,  //TEXT ON CHANGE TEXT
        page,
        '2',
        (response: any) => {
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
  const _ItemSeparatorComponent=()=>{
    return(
      <View  style={styles.zipcodeitem}>
      </View>
    )
  }
  const  _onEndReached=()=>{
    setPage(page+1);
    dispatch(
      getAccountFeedAction(
        props.search,
        page,
        '2',
        (response: any) => {
          if (response?.data?.statusCode === 200) {
          } 
        },
        (errorAPI: any) => {
          console.log("errrorr",errorAPI);
        },
      ),
    );
  }
  const _renderEnmptyList=()=>{
    return(
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
    )
  }
  const _renderItem=({item}:any)=>{

       
    return(
      <View style={styles.renderView}>
        <Image style={styles.profile} source={images.profileimg}/>
        <View>

        <Text style={styles.textdesign}>{item.name}</Text>
        <Text style={styles.usertxt}>{item.username}</Text>
        </View>
      </View>
    )
  }

  return(
    <View>
      <FlatList
       data={Account}
       renderItem={_renderItem}
       onEndReached={_onEndReached}
       onEndReachedThreshold={0.5}
       contentContainerStyle={{height:600}}
       ItemSeparatorComponent={_ItemSeparatorComponent}
       ListEmptyComponent={
        code == 200 && Account.length <= 0 ? _renderEnmptyList : null
      }
      />
       {isLoading && (
        <ActivityIndicator
        size={'large'}
        color={COLOR.LIGHTBLUE}
        style={styles.indicator}
        />
      )}

    </View>
    ) 
}
const styles = StyleSheet.create({
  zipcodeitem: {
    height: 3,
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
    color: 'white',marginLeft:normalize(10),fontSize:16,fontFamily:'Helvetica-Bold'
  },profile:{
    height:normalize(50),
    width:normalize(50)
  },
  renderView:{
    padding: normalize(15),alignItems:'center',flexDirection:'row'
  },
  usertxt:{
    color:'grey',marginLeft:normalize(10),fontSize:14
  }
})