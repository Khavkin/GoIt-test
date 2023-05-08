import { Box, Button, InputLabel, MenuItem, Select, Toolbar } from '@mui/material';
import TweetsList from '../../components/TweetsList';
import { useDispatch } from 'react-redux';
import { useUsers } from '../../Hooks/useUsers';
import { setFilter, setPage } from '../../redux/UsersSlice/UsersSlice';
import { theme } from '../../Theme/Theme';
import { ClockLoader } from 'react-spinners';
import { useLocation, useNavigate } from 'react-router-dom';

export const Tweets = () => {
  const dispatch = useDispatch();
  const { page, loadMore, isLoading, filter } = useUsers();
  const navigate = useNavigate();
  const location = useLocation();
  const backPath = location.state ? location.state : '/';

  const handleOnClick = () => {
    dispatch(setPage(page + 1));
  };

  const handleOnFilterChange = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  const handleOnBackButtonClick = () => {
    navigate(backPath);
  };

  return (
    // toolbar
    <Box component="main">
      <Box component="div">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Button onClick={handleOnBackButtonClick}>Back</Button>
          {/* <FormControl fullWidth> */}
          <InputLabel
            sx={{
              display: 'flex',
              gap: '20px',
              alignItems: 'center',
              justifyContent: 'center',
              color: theme.palette.primary.main,
            }}
          >
            Select users
            <Select
              value={filter}
              variant="outlined"
              onChange={handleOnFilterChange}
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: theme.palette.background.default,
                    color: theme.palette.primary.main,
                  },
                },
              }}
              sx={{
                width: '150px',
                color: theme.palette.primary.main,
                // zIndex: '100',
                background: theme.palette.background.default,
              }}
            >
              <MenuItem value={'All'}>All</MenuItem>
              <MenuItem value={'Follow'}>Follow</MenuItem>
              <MenuItem value={'Following'}>Following</MenuItem>
            </Select>
          </InputLabel>
          {/* </FormControl> */}
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

              //  fontFamily: 'Montserrat',
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
