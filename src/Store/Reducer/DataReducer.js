import ActionType from '../Contant/Constant'
import fire from '../../Config/fire'





const INITIAL_STATE = {
    MyData: '',
    MyCategories: '',
    MyRawData:[],
    MyCart:[],
    LastAddPost:[]
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionType.ADD_POST:    
            return ({
                ...state,
                LastAddPost: action.payload
            })
        case ActionType.LOAD_DATA:
            return ({
                ...state,
                MyData: action.payload
            })
        case ActionType.LOAD_CAT:
            return ({
                ...state,
                MyCategories: action.payload
            })
        case ActionType.MAKE_ROWDATA:
            return ({
                ...state,
                MyRawData: action.payload
            })
        case ActionType.LOAD_MYCART:    
            return ({
                ...state,
                MyCart: action.payload
            })

        default:
            return state;
    }
}