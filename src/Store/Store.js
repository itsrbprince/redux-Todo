import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../Features/reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {

    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
    version: 0,
  }
    
  const persistedReducer = persistReducer(persistConfig, todoReducer)

export const store = configureStore({
reducer:persistedReducer,
middleware: (getDefaultMiddleware) =>
getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
}),
})