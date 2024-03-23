import { configureStore } from '@reduxjs/toolkit';

import { combineReducers } from 'redux';
import { PersistConfig, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import focus from './todo/focus';
import task from './todo/task';
import { Reducer } from 'react';

const reducers = combineReducers({
  task: task,
  focus: focus
}) as Reducer<any, any>

const persistConfig = {
  key: 'root',
  storage,

} as PersistConfig<Object>

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
})