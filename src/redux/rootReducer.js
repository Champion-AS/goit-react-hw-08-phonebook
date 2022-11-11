import { combineReducers } from "@reduxjs/toolkit";
import phoneBookReducer from './PhonebookRedax/slicePhonbook'
import filterReducer from './PhonebookRedax/sliceFilter'
import authReducer from "./auth/authSlice"
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";


const persistConfig = {
    key: 'token',
    version: 1,
    storage,
    whitelist: ["token"]
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const rootReducer = combineReducers({
  phoneBook: phoneBookReducer,
  filter: filterReducer,
  auth: persistedReducer,
});