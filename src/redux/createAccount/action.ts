import axios from 'axios';

export function getCreateaccountAction(
  name: any,
  email: any,
  password: any,
  phoneNo: any,
  callback: Function,
  ErrorCallback: Function,
) {
  return (dispatch: any, getState: any) => {
    axios
      .post('https://fivestardevapi.appskeeper.in/api/v1/user/signup', {
        name: name,
        email: email,
        password: password,
        countryCode: '+1',
        phoneNo: phoneNo,
      })
      .then(resp => {
        dispatch({type: 'signup', payload: resp.data});
        callback(resp);
      })
      .catch(err => {
        ErrorCallback(err);
        console.log('error', err);
      });
  };
}

export function getotpAction(
  userId: any,
  otp: any,
  phoneNo: any,
  callback: Function,
  ErrorCallback: Function,
) {
  console.log("api=>>>>",otp);
  
  return (dispatch: any, getState: any) => {
    axios
      .post('https://fivestardevapi.appskeeper.in/api/v1/user/verify-otp', {
        userId,
        otp,
        countryCode: '+1',
        phoneNo,
      })
      .then(resp => {
        console.log("response===>",resp);
        
        dispatch({type: 'verify-otp', payload: resp.data});
        callback(resp);
      })
      .catch(err => {
        ErrorCallback(err);
        console.log('error', err)
      }).finally(()=>{
     console.log("finally====>");
     
      })
  
  };
}
