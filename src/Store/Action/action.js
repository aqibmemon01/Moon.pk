import fire from '../../Config/fire'

export function LoadUser(PickUserName){
    return dispatch => {
        dispatch({type:'CHANGEUSERNAME',payload:PickUserName})
    }

}
export function LoadMyData(PickData){
    return dispatch => {
        dispatch({type:'LOAD_DATA',payload:PickData})

    }

}
export function LoadCategory(PickCat){
    return dispatch => {
        dispatch({type:'LOAD_CAT',payload:PickCat})

    }

}
export function MakeRowData(PickData){
    return dispatch => {
        dispatch({type:'MAKE_ROWDATA',payload:PickData})

    }
}
export function LoadMyCart(PickData){
    return dispatch => {
        dispatch({type:'LOAD_MYCART',payload:PickData})
    
    }
}

export function ADDPOST(Cat1,Cat2,putindex,PickData){
   
    fire.database().ref('My Data/ALLDATA/'+Cat1+'/'+Cat2+
    '/'+putindex).set(
        PickData
    )
     
    return dispatch => {
        dispatch({type:'ADD_POST',payload:PickData})
    
    }
}