import axios from 'axios';
import {Alert} from 'react-native';

const getCreateaccountAction = (
  account: string,
  otp: any,
  phoneNo: any,
  userId: any,
  name: any,
  email: any,
  password: any,
) => {
  return (dispatch: any, getState: any) => {
    axios
      .post(
        `https://fivestardevapi.appskeeper.in/api/v1/user/${account}`,
        account == 'signup'
          ? {
              name: name,
              email: email,
              password: password,
              countryCode: '+1',
              phoneNo: phoneNo,
            }
          : {
              userId: userId,
              otp: otp,
              countryCode: '+1',
              phoneNo: phoneNo,
            },
      )
      .then(resp => {
        console.log('ALL DATA ARE HERE====>>', name, phoneNo, email, password);

        dispatch({type: account, payload: resp.data});
      })
      .catch(err => {
        if (err.response.status == 400) Alert.alert('please valid otp code');
      });
  };
};

export default getCreateaccountAction;
