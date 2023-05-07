import { Box, Button, MenuItem, Select, Toolbar } from '@mui/material';
import { TweetsList } from '../../components/TweetsList/TweetsList';
import { useDispatch } from 'react-redux';
import { useUsers } from '../../Hooks/useUsers';
import { setPage } from '../../redux/UsersSlice/UsersSlice';
import { theme } from '../../Theme/Theme';
import { ClockLoader } from 'react-spinners';

export const Tweets = () => {
  const dispatch = useDispatch();
  const { page, loadMore, isLoading } = useUsers();

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
      <Box
        sx={{
          width: '100%',
          height: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {isLoading ? (
          <ClockLoader color="#ce36d6" loading size={50} />
        ) : (
          <Button
            sx={{
              width: '196px',
              height: '50px',

              fontFamily: 'Montserrat',
              fontWeight: '600',
              fontSize: '18px',
              background: `${theme.palette.secondary.main}`,

              boxShadow: '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)',
              borderRadius: '10.3108px',
              color: `${theme.palette.text.secondary}`,
              ':hover': {
                background: theme.palette.background.paper,
                color: theme.palette.text.primary,
              },
            }}
            onClick={handleOnClick}
            disabled={!loadMore && !isLoading}
          >
            Load More
          </Button>
        )}
      </Box>
    </Box>
  );
};
