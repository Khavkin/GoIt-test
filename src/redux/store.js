import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { configureStore } from '@reduxjs/toolkit';

import { usersReducer } from './UsersSlice/UsersSlice';
import { mockApi } from '../services/api/mockapi';
import { subscribeReducer } from './SubscribeSlice/SubscribeSlice';

const persistConfig = {
  key: 'subscribe',
  storage,
  whitelist: ['users'],
};

const persistedSubscribeReducer = persistReducer(persistConfig, subscribeReducer);

export const store = configureStore({
  reducer: {
    [mockApi.reducerPath]: mockApi.reducer,
    users: usersReducer,
    subscribe: persistedSubscribeReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(mockApi.middleware),
});

export const persistor = persistStore(store);
