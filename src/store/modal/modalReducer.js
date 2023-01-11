import { MODAL_ACTIONS_TYPES } from "./modal.types";

const INITIAL_STATE = {
    isModal:false,
}
export const modalReducer = (state=INITIAL_STATE,action = {})=>{
    
    const {type,payload} = action;
    console.log(type);
    switch (type) {
        case MODAL_ACTIONS_TYPES.OPEN_MODAL_ONE:
            return { ...state, isModal:payload}
        default:
            return state
    }
}