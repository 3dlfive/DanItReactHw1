import { MODAL_ACTIONS_TYPES } from "./modal.types"
import { createAction } from "../../utils/reducer/reducer.utils"
//Создать редюсер Сетмодал

export const setCurrentModal = (payload) => {

    return createAction(MODAL_ACTIONS_TYPES.OPEN_MODAL_ONE, payload)

}
export const setCurrentModal2 = (payload) =>{
    return {type:MODAL_ACTIONS_TYPES.OPEN_MODAL_TWO,payload}
}