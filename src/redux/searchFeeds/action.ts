import axios from 'axios';
export function getSearchFeedAction(
  text: any,
  page: number,
  type: string,
  callback: Function,
  ErrorCallback: Function,
) {
  return (dispatch: any, getState: any) => {
    const {search_feed} = getState;
    console.log('FFFFFF');
    
    axios
      .get(
        `https://fivestardevapi.appskeeper.in/api/v1/user/search?search=${text}&type=${type}&page=${page}`,
      )
      .then(resp => {
        let newresult = resp?.data?.data?.result;
        if (page === 1) dispatch({type: 'searchfeed', payload: [...newresult]});
        else dispatch({ type: 'searchfeed',payload: [...search_feed, ...newresult],});
        callback(resp);
      })
      .catch(err => {
        ErrorCallback(err);
        dispatch({type:"searchfeed", payload:[]})
        console.log('Erer At Top tap ',err);
        
      });
  };
}
export function getAccountFeedAction(
    text: any,
    page: number,
    type: string,
    callback: Function,
    ErrorCallback: Function,
  ) {
    return (dispatch: any, getState: any) => {
      const {Account} = getState;
      axios
        .get(
          `https://fivestardevapi.appskeeper.in/api/v1/user/search?search=${text}&type=${type}&page=${page}`,
        )
        .then(resp => {
            console.log("acccoountactionresp==>>",resp);
            
          let newresult = resp?.data?.data?.result;
          if (page === 1) dispatch({type: 'account_feed', payload: [...newresult]});
          else dispatch({type: 'account_feed', payload: [...Account, ...newresult]});
          callback(resp);
        })
        .catch(err => {
          ErrorCallback(err);
          dispatch({type:"account_feed", payload:[]})
        });
    };
  }



export function getHashfeedFeedAction(
  text: any,
  page: number,
  type: string,
  callback: Function,
  ErrorCallback: Function,
) {
  return (dispatch: any, getState: any) => {
    const {hashtag} = getState;
    axios
      .get(
        `https://fivestardevapi.appskeeper.in/api/v1/user/search?search=${text}&type=${type}&page=${page}`,
      )
      .then(resp => {
        let newresult = resp.data.data.result;
        if (page === 1) dispatch({type: 'hashtag', payload: [...newresult]});
        else dispatch({type: 'hashtag', payload: [...hashtag, ...newresult]});
        callback(resp);
      })
      .catch(err => {
        ErrorCallback(err);
        dispatch({type:"hashtag", payload:[]})
      });
  };
}

export function getvideosAction(
    text: any,
    page: number,
    type: string,
    callback: Function,
    ErrorCallback: Function,
  ) {
    return (dispatch: any, getState: any) => {
      const {VIDEOS} = getState;
      axios
        .get(
          `https://fivestardevapi.appskeeper.in/api/v1/user/search?search=${text}&type=${type}&page=${page}`,
        )
        .then(resp => {
          let newresult = resp.data.data.result;
          if (page === 1) dispatch({type: 'video_feed', payload: [...newresult]});
          else dispatch({type: 'video_feed', payload: [...VIDEOS, ...newresult]});
          callback(resp);
        })
        .catch(err => {
          ErrorCallback(err);
          dispatch({type:"video_feed", payload:[]})
        });
    };
  }
  
