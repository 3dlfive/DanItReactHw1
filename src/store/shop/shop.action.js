import { SHOP_ACTIONS_TYPES } from "./shop.types";
import { createAction } from "../../utils/reducer/reducer.utils";

import { getShopData } from "../../utils/data/data.utils";


export const fetchShopDAtaAsync = () => async(dispatch) =>{
    dispatch(setShopDataStart());
    try {
        const data = await getShopData();
        dispatch(setShopDataSuccsess(data))
    } catch (error) {
        dispatch(setShopDataFaILED(error))
    }
}

export const submitOrder = (payload) =>createAction(SHOP_ACTIONS_TYPES.ORDER_SUBMIT,payload);

export const setShopDataStart = () =>createAction(SHOP_ACTIONS_TYPES.FETCH_DATA_START);
export const setShopDataSuccsess = (payload) =>createAction(SHOP_ACTIONS_TYPES.FETCH_DATA_SUCCESS,payload);
export const setShopDataFaILED = (error) =>createAction(SHOP_ACTIONS_TYPES.FETCH_DATA_FAILED,error);

export const setcurrentCard = (payload) =>createAction(SHOP_ACTIONS_TYPES.SET_CURRENT_CARD,payload);
export const setcardinBucket = (payload) =>createAction(SHOP_ACTIONS_TYPES.SET_CARD_INBUCKET,payload);
export const removeFromBucket = (payload) =>createAction(SHOP_ACTIONS_TYPES.REMOVE_CARD_FROMBUCKET,payload);

export const setfavList = (payload) =>createAction(SHOP_ACTIONS_TYPES.SET_FAVLIST,payload);