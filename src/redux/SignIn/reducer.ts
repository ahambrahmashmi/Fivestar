const initialState={
    SignIn_Data:[],
}

const signinReducer=(state=initialState,action:any)=>{
    const{type,payload}=action;
    switch (type){
        case 'signin':
            return {...state,SignIn_Data:payload};

            default:
                return {...state}
        
    }
}


export default signinReducer;