const initialState = {
  DATA_SIGN_UP: {
    name: '',
    email: '',
    password: '',
    countryCode: '',
    phoneno: '',
    otp: '',
  },
  selectedsports: [],
};

const createaccountReducer = (state = initialState, action: any) => {
  const {type, payload} = action;

  switch (type) {
    case 'signup':
      console.log('data is ', payload.data.userId);
      return {...state, DATA_SIGN_UP: payload.data};

    case 'verify-otp':
      return {...state, DATA_SIGN_UP: payload};

    default:
      return {...state};
  }
};

export default createaccountReducer;
