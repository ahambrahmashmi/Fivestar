const initialState={
    search_feed:[],
    hashtag:[],
    Account:[],
    VIDEOS:[],
}

const searchFeedReducer=(state=initialState,action:any)=>{
    const{type,payload}=action
      switch(type){
          case 'searchfeed' :
              return{...state,search_feed:payload}
            case 'hashtag' : 
            return {...state,hashtag:payload}
            case 'account_feed':
                return {...state,Account:payload}
                case 'video_feed':
                    return {...state,VIDEOS:payload}
              default:
                  return{...state}
      }
}

export default searchFeedReducer;