import { Box, Button, MenuItem, Select, Toolbar } from '@mui/material';
import { TweetsList } from '../../components/TweetsList/TweetsList';
import { useDispatch } from 'react-redux';
import { useUsers } from '../../Hooks/useUsers';
import { setPage } from '../../redux/UsersSlice/UsersSlice';

export const Tweets = () => {
  const dispatch = useDispatch();
  const { page, loadMore, isLoading } = useUsers();

  console.log(loadMore);

  const handleOnClick = () => {
    dispatch(setPage(page + 1));
  };
  return (
    // toolbar
    <Box component="main">
      <Box component="div">
        <Toolbar>
          <Button>Back</Button>
          {/* <Select id="filter-select">
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select> */}
        </Toolbar>
      </Box>

      <TweetsList />
      <Button onClick={handleOnClick} disabled={!loadMore}>
        LoadMore
      </Button>
    </Box>
  );
};
