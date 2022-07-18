import axios from 'axios';

export function getZipcodeaction(
  text: string,
  page: number,
  callback: Function,
  ErrorCallback: Function,
) {
  return (dispatch: any, getState: any) => {
    const {Zipcode_Data} = getState().zipcodeReducer;
    axios
      .get(
        `https://fivestardevapi.appskeeper.in/api/v1/zipcode-list?&search=${text}&page=${page}`,
      )
      .then(resp => {
        let newData = resp.data.data.result;

        if (page === 1) dispatch({type: 'Zipcode', payload: [...newData]});
        else
          dispatch({type: 'Zipcode', payload: [...Zipcode_Data, ...newData]});
        callback(resp);
      })
      .catch(error => {
        console.log('errototitjt', error);
        ErrorCallback(error);
      });
  };
}
