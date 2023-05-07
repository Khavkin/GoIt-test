import { useSelector } from 'react-redux';
import {
  selectFilter,
  selectIsLoading,
  selectLoadMore,
  selectPage,
  selectUsers,
} from '../redux/selectors';

export const useUsers = () => {
  return {
    users: useSelector(selectUsers),
    isLoading: useSelector(selectIsLoading),
    filter: useSelector(selectFilter),
    page: useSelector(selectPage),
    loadMore: useSelector(selectLoadMore),
  };
};
