import axios from 'axios';
export function getSignInAction(
  phoneNo: any,
  password: string,
  callback: Function,
  ErrorCallback: Function,
) {
  return (dispatch: any, getState: any) => {
    axios
      .post('https://fivestardevapi.appskeeper.in/api/v1/user/login', {
        password,
        countryCode: '+1',
        phoneNo,
      })
      .then(resp => {
          console.log(">>>>>>>>signin",resp.data);
          dispatch=({type:'signin',payload:resp.data.data})
        callback(resp);
      })
      .catch(err => {
        console.log('errrrrrrrrr===>', err);
        ErrorCallback(err);
      });
  };
}
