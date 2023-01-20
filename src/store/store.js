import {compose, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';


import { rootReducer } from './root-reducer'

const middleWares = [thunk]

const composedEnhancers = compose(applyMiddleware(...middleWares))

export const store = configureStore({reducer:rootReducer},composedEnhancers)
