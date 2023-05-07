import { useSelector } from 'react-redux';

//users selectors
export const selectUsers = state => state.users.users;
export const selectFilter = state => state.users.filter;
export const selectIsLoading = state => state.users.isLoading;
export const selectPage = state => state.users.page;
export const selectLoadMore = state => state.users.loadMore;

//subscribe selectors

export const selectSubscribe = state => state.subscribe.users;
