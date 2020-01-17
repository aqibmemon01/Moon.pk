import ActionType from '../Contant/Constant'


const INITIAL_STATE={
 UserName:''
}



export default (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case ActionType.CHANGEUSERNAME:
            return ({
                ...state,
                UserName:action.payload
            })
        default:
            return state;
    }
}