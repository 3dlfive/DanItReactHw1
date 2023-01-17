import { SHOP_ACTIONS_TYPES } from "./shop.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setShopData = (payload) =>{

    return createAction(SHOP_ACTIONS_TYPES.GET_SHOP_DATA,payload)
    
}
export const setcurrentCard = (payload) =>{

    return createAction(SHOP_ACTIONS_TYPES.SET_CURRENT_CARD,payload)
    
}
export const setcardinBucket = (payload) =>{

    return createAction(SHOP_ACTIONS_TYPES.SET_CARD_INBUCKET,payload)
    
}
export const removeFromBucket = (payload) =>{

    return createAction(SHOP_ACTIONS_TYPES.REMOVE_CARD_FROMBUCKET,payload)
    
}
export const setfavList = (payload) =>{

    return createAction(SHOP_ACTIONS_TYPES.SET_FAVLIST,payload)
    
}
