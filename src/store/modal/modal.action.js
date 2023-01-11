import { MODAL_ACTIONS_TYPES } from "./modal.types"
import { createAction } from "../../utils/reducer/reducer.utils"
//Создать редюсер Сетмодал

export const setCurrentModal = () =>{
    createAction(MODAL_ACTIONS_TYPES.OPEN_MODAL_ONE,true)
}