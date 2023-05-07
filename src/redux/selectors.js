//users selectors
export const selectUsers = state => state.users.users;
export const selectFilteredUsers = state => {
  const filter = state.users.filter;
  const users = [...state.users.users];
  const subscribe = state.subscribe.users;
  let filteredUsers = [];
  switch (filter) {
    case 'All':
      filteredUsers = [...users];
      break;
    case 'Follow':
      filteredUsers = users.filter(({ id }) => !subscribe.includes(id));
      break;
    case 'Followings':
      filteredUsers = users.filter(({ id }) => subscribe.includes(id));
      break;
    default:
      filteredUsers = [...state.users.users];
  }
  return filteredUsers;
};

export const selectFilter = state => state.users.filter;
export const selectIsLoading = state => state.users.isLoading;
export const selectIsUpdating = state => state.users.isUpdating;
export const selectPage = state => state.users.page;
export const selectLoadMore = state => state.users.loadMore;

//subscribe selectors

export const selectSubscribe = state => state.subscribe.users;
