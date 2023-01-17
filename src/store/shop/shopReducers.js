import { SHOP_ACTIONS_TYPES } from "./shop.types";

const INITIAL_STATE = {
    shopData:[],
    currentCard:{},
    cardinBucket:localStorage.getItem("cardinBucket") ? JSON.parse(localStorage.getItem("cardinBucket")) : [],
    favList: localStorage.getItem("favList") ? JSON.parse(localStorage.getItem("favList")) : [],
}
export const shopReducer = (state=INITIAL_STATE,action = {})=>{
    
    const {type,payload} = action;
    
    switch (type) {
        case SHOP_ACTIONS_TYPES.GET_SHOP_DATA:
            return { ...state, shopData:payload}
       
        case SHOP_ACTIONS_TYPES.SET_CURRENT_CARD:
            return { ...state, currentCard:payload}
       
        case SHOP_ACTIONS_TYPES.SET_CARD_INBUCKET:
            return { ...state, cardinBucket:[...state.cardinBucket,payload]}
       
        case SHOP_ACTIONS_TYPES.REMOVE_CARD_FROMBUCKET:
            if (state.cardinBucket.includes(payload)){
                return { ...state, cardinBucket:state.cardinBucket.filter(el=>el!==payload)}
            }
            break;
        case SHOP_ACTIONS_TYPES.SET_FAVLIST:
            if (!state.favList.includes(payload)){
                return { ...state, favList:[...state.favList,payload]}
            } else {
                return { ...state, favList:state.favList.filter(el=>el!==payload)}
            }
        
        default:
            return state
    }
}