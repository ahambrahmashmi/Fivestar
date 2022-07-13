import axios from "axios";
 export function getZipcodeaction(text:string = "1", page: number, callback:Function,ErrorCallback:Function){
     return(dispatch:any,getState:any)=>{
       axios.get(`https://fivestardevapi.appskeeper.in/api/v1/zipcode-list?&search=${text}&page=${page}`)
       .then((resp)=>{
           console.log(resp.data.data);
           
           dispatch({type:'Zipcode',payload:resp.data.data})
           callback(resp)
       })
       .catch(error=>{
           console.log("errototitjt",error);
           ErrorCallback(error)
       })
     }
 }