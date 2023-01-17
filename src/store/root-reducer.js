import { combineReducers } from "redux";

import {modalReducer } from "./modal/modalReducer";
import { shopReducer } from "./shop/shopReducers";

export const rootReducer = combineReducers({
    modal: modalReducer,
    shop: shopReducer
})