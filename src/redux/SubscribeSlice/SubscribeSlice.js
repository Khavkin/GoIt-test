import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};

const SubscribeSlice = createSlice({
  name: 'subscribe',
  initialState,
  reducers: {
    addSubscription: (state, { payload }) => {
      state.users = [...state.users, payload];
    },
    deleteSubscription: (state, { payload }) => {
      const users = [...state.users];
      users.splice(payload, 1);
      state.users = [...users];
    },
  },
});

export const { addSubscription, deleteSubscription } = SubscribeSlice.actions;

export const subscribeReducer = SubscribeSlice.reducer;
