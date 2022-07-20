const initialState = {
  DATA: [],
  selectedSport : []
};

const sportsReducer = (state = initialState, action: any) => {
  const {type, payload} = action;

  switch (type) {
    case 'sports':
      return {...state, DATA: payload};

    case 'complete_profile':
      return {...state, DATA: payload};

    case 'setSport':
      return {...state, selectedSport : payload}

    default:
      return {...state};
  }
};

export default sportsReducer;
