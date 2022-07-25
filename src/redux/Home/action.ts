import axios from "axios";

export function getHomeAction(authToken:any,callback:Function,ErrorCallback:Function){
    return(dispatch:any,getState:any)=>{
        axios.defaults.headers.common.Authorization = `Bearer ${authToken}`;
        axios.get(`https://fivestardevapi.appskeeper.in/api/v1/user/contents?page=1`)
        .then(resp=>{
            console.log("rersponse=====>>",resp.data.data);
            dispatch({type:'contentfeed',payload:resp.data.data})
             callback(resp);
        })
        .catch((errr:any)=>{
            console.log("erroooorrr==>",errr);
            ErrorCallback(errr);
            
        })
    }
}