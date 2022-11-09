import { combineReducers } from "@reduxjs/toolkit";
import phoneBookReducer from './PhonebookRedax/slicePhonbook'
import filterReducer from './PhonebookRedax/sliceFilter'

export const rootReducer = combineReducers({
    phoneBook: phoneBookReducer,
    filter: filterReducer,
});