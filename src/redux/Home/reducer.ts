const initialState={
    Home_Data:[],
}

const homeReducer=(state=initialState,action:any)=>{
    const{type,payload}=action;
    switch (type){
        case 'contentfeed':
            return {...state,Home_Data:payload};

            default:
                return state
        
    }
}
export default homeReducer;