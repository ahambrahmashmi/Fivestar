const initialState = {
    DATA: [],
  };


  const sportsReducer=(state=initialState,action:any)=>{
     const {type,payload}=action

     switch(type){
         case 'sports':
             return{...state, DATA:payload}

        default:
            return{...state}
     }

  }


  export default  sportsReducer