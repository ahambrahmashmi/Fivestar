const initialState={
    Zipcode_Data:[]
};

const zipcodeReducer=(state=initialState,action:any)=>{
     const{type,payload}=action

   switch (type){
       case 'Zipcode':
           return {...state,Zipcode_Data:payload}

        default:
            return {...state}
   }

}
export default zipcodeReducer