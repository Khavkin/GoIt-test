import { createSlice } from '@reduxjs/toolkit';
import { mockApi } from '../../services/api/mockapi';

const initialState = {
  users: [],
};

const SubscribeSlice = createSlice({
  name: 'subscribe',
  initialState,
  reducers: {
    addSubscription: (state, { payload }) => {
      // console.log(payload);
      state.users = [...state.users, payload];
    },
    deleteSubscription: (state, { payload }) => {
      //console.log(payload);
      const users = [...state.users];
      users.splice(payload, 1);
      state.users = [...users];
    },
  },
});

export const { addSubscription, deleteSubscription } = SubscribeSlice.actions;

export const subscribeReducer = SubscribeSlice.reducer;
