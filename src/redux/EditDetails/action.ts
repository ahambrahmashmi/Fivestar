import axios from 'axios';

export function getSportsAction(
  authToken: any,
  callback: Function,
  ErrorCallback: Function,
) {
  return (dispatch: any, getState: any) => {
    axios.defaults.headers.common.Authorization = `Bearer ${authToken}`;
      axios.get('https://fivestardevapi.appskeeper.in/api/v1/user/sports', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then(resp => {
          console.log('===========>?',resp);
          
        dispatch({type: 'sports', payload: resp.data});
        callback(resp);
      })
      .catch(err => {
        ErrorCallback(err);
        console.log('errorototo', err);
      });
  };
}

