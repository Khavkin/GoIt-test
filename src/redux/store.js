import { configureStore } from '@reduxjs/toolkit';
// Or from '@reduxjs/toolkit/query/react'
//import { setupListeners } from '@reduxjs/toolkit/query';

import { usersReducer } from './UsersSlice/UsersSlice';
import { mockApi } from '../services/api/mockapi';
import { subscribeReducer } from './SubscribeSlice/SubscribeSlice';

export const store = configureStore({
  reducer: {
    [mockApi.reducerPath]: mockApi.reducer,
    users: usersReducer,
    subscribe: subscribeReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(mockApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
//setupListeners(store.dispatch);
