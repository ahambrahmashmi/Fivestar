import { View, Text,Alert, FlatList, Image,StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHashfeedFeedAction } from '../../../redux/searchFeeds/action'
import { images } from '../../../Utils/images'
import { COLOR } from '../../../Utils/color'
import { normalize } from '../../../Utils/dimension'


export default function HashtagsTab(props: any) {
  const [code, setCode] = useState<any>(null);
const [page,setPage] = useState<number>(1)
const dispatch=useDispatch<any>()
const {hashtag}=useSelector((store:any)=>store.searchFeedReducer)
useEffect(()=>{
  console.log('props',props.search)
  dispatch(
    getHashfeedFeedAction(
      props.search,
      page,
      '3',
      (response: any) => {

        setCode(response?.data?.statusCode);
  
        if (response?.data?.statusCode === 200) {
        }
      },
      (errorAPI: any) => {
        console.log("errrorr",errorAPI);
        setCode(errorAPI.response?.data?.statusCode);
        
      },
    ),
  );
},[props.search])

const _renderItem = ({item}: any) => {
  return (
    <View style={{padding:15}}>
      <Text style={{color: 'white'}}>{item.hashtag}</Text>
      {/* <Text style={{color: 'white'}}>{item}</Text> */}
    </View>
  );
};
const _ItemSeparatorComponent=()=>{
  return(
    <View  style={styles.zipcodeitem}>

    </View>
  )
}
const  _onEndReached=()=>{
  setPage(page+1);
  dispatch(
    getHashfeedFeedAction(
      props.search,
      page,
      '3',
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
return (
  <View>
    <FlatList
     data={hashtag} 
     renderItem={_renderItem}
      onEndReached={_onEndReached}
      onEndReachedThreshold={0.5}
      contentContainerStyle={{height:600}}
      ItemSeparatorComponent={_ItemSeparatorComponent}
      ListEmptyComponent={
        code == 200 && hashtag.length <= 0 ? _renderEnmptyList : null
      }
    />
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
})