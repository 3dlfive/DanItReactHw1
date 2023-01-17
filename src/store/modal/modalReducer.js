import { MODAL_ACTIONS_TYPES } from "./modal.types";

const INITIAL_STATE = {
    isModal:false,
    isModal2:false,
}
export const modalReducer = (state=INITIAL_STATE,action = {})=>{
    
    const {type} = action;
    
    switch (type) {
        case MODAL_ACTIONS_TYPES.OPEN_MODAL_ONE:
            return { ...state, isModal:!state.isModal}
        case MODAL_ACTIONS_TYPES.OPEN_MODAL_TWO:
            return { ...state, isModal2:!state.isModal2}
        default:
            return state
    }
}