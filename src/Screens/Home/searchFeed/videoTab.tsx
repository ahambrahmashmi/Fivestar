import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getvideosAction} from '../../../redux/searchFeeds/action';
import Video from 'react-native-video';
export default function VideoTab(props: any) {
  const dispatch = useDispatch<any>();
  const [page, setPage] = useState<number>(1);
  const {VIDEOS} = useSelector((store: any) => store.searchFeedReducer);
  console.log('videos====>>>', VIDEOS);

  useEffect(() => {
    dispatch(
      getvideosAction(
        props.search,
        page,
        '4',
        (response: any) => {
          if (response?.data?.statusCode === 200) {
          }
        },
        (errorAPI: any) => {
          console.log('errrorr', errorAPI);
        },
      ),
    );
  }, [props.search]);
  const _onEndReached = () => {
    setPage(page + 1);
    dispatch(
      getvideosAction(
        props.search,
        page,
        '3',
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
  const _renderItem = ({item}: any) => {
    console.log("itemmm",item?.contentUrl);
    
    return (
      <View style={{padding: 15}}>
        <Video
         style={{height:300,width:100}}
          source={{uri: item?.contentUrl, type: 'm3u8'}}
          // resizeMode="contain"
        />
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={VIDEOS}
        numColumns={2}
        renderItem={_renderItem}
        // onEndReached={_onEndReached}
        // onEndReachedThreshold={0.5}
        // contentContainerStyle={{height: 600}}
      />
    </View>
  );
}
