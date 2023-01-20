import {compose, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';


import { rootReducer } from './root-reducer'

const middleWares = [logger,thunk]

const composedEnhancers = compose(applyMiddleware(...middleWares))

export const store = configureStore({reducer:rootReducer},composedEnhancers)
