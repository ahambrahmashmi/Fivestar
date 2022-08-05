import axios from 'axios';

export function getSportsAction(
  authToken: any,
  callback: Function,
  ErrorCallback: Function,
) {
  return (dispatch: any, getState: any) => {
    axios.defaults.headers.common.Authorization = `Bearer ${authToken}`;
    axios
      .get('https://fivestardevapi.appskeeper.in/api/v1/user/sports', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then(resp => {
        console.log('===========>?', resp);

        dispatch({type: 'sports', payload: resp.data.data});
        callback(resp);
      })
      .catch(err => {
        ErrorCallback(err);
        console.log('errorototo', err);
      });
  };
}

export function getcompleteProfile(
  authToken: any,
  username: string,
  id: any,
  zipcode: any,
  name: any,
  bio: any,
  likedSport: any,
  callback: Function,
  ErrorCallback: Function,
) {
  return (dispatch: any, getState: any) => {
    axios.defaults.headers.common.Authorization = `Bearer ${authToken}`;
    axios
      .post(
        'https://fivestardevapi.appskeeper.in/api/v1/user/complete-profile',
        {
          username,
          id,
          zipcode,
          name,
          userType: 1,
          personalDetails: {
            height: {
              feet: 1,
              inch: 2,
            },
            dob: '2021-12-23T08:52:43.725+00:00',
            weight: 23,
            bio: bio,
          },
          likedSport,
        },
      )
      .then(resp => {
        console.log('respons at complete profile succes',resp.data);
        dispatch({type: 'complete_profile', payload: resp});
        callback(resp);
      })
      .catch(err => {
        ErrorCallback(err);
      });
  };
}

export function getChangeUsername(
  authToken: any,
  text: any,
  callback: Function,
  ErrorCallback: Function,
) {
  return (dispatch: any, getState: any) => {
    axios.defaults.headers.common.Authorization = `Bearer ${authToken}`;
    axios
      .get(
        `https://fivestardevapi.appskeeper.in/api/v1/user/check-username?username=${text}`,
      )
      .then(resp => {
        callback(resp);
      })
      .catch(err => {
        console.log('errorr======>', err.response.data.data.names);

        ErrorCallback(err);
      });
  };
}
