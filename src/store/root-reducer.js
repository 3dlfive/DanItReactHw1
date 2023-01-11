import { combineReducers } from "redux";

import {modalReducer } from "./modal/modalReducer";

export const rootReducer = combineReducers({
    isModal: modalReducer
})