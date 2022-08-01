import {
  View,
  Text,
  FlatList,
  Dimensions,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getvideosAction} from '../../../redux/searchFeeds/action';
import Video from 'react-native-video';
import {COLOR} from '../../../Utils/color';
const {width, height} = Dimensions.get('screen');
export default function VideoTab(props: any) {
  const [isLoading, setisLoading] = useState(false);
  const dispatch = useDispatch<any>();
  const [page, setPage] = useState<number>(1);
  const {VIDEOS} = useSelector((store: any) => store.searchFeedReducer);

  useEffect(() => {
    setisLoading(true);
    dispatch(
      getvideosAction(
        props.search,
        page,
        '4',
        (response: any) => {
          if (response?.data?.statusCode === 200) {
            dispatch({type: 'video_feed', payload: [...response.data?.data?.result]});
            setisLoading(false);
          }
        },
        (errorAPI: any) => {
          console.log('errrorr', errorAPI);
          setisLoading(false);
        },
      ),
    );
  }, [props.search]);
  const _renderItem = ({item}: any) => {
    return (
      <TouchableOpacity style={{}}>
        <Video
          resizeMode="cover"
          style={styles.backgroundvide}
          source={{uri: item?.contentUrl, type: 'm3u8'}}
          // paused={true}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList data={VIDEOS} numColumns={3} renderItem={_renderItem} />
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
  indicator: {
    position: 'absolute',
    right: 180,
    top: 250,
  },
  backgroundvide: {
    height: 150,
    width: width / 3,
    margin: 2,
  },
});
