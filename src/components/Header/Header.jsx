import { AppBar, Box, Link, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box component={'nav'}>
          <Link component={NavLink} to="/">
            Logo
          </Link>
          <Link component={NavLink} to="/">
            Home
          </Link>
          <Link component={NavLink} to="/tweets">
            Tweets
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
