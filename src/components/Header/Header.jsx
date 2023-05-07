import { AppBar, Avatar, Box, Toolbar, Typography, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { theme } from '../../Theme/Theme';

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar component={'nav'}>
        <Link component={NavLink} to="/">
          <Avatar sx={{ color: theme.palette.primary.main }}>
            <SubscriptionsIcon />
          </Avatar>
        </Link>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '30px', ml: '30px' }}>
          <Link
            component={NavLink}
            to="/"
            underline="none"
            color="inherit"
            sx={{
              '&.active': {
                color: theme.palette.secondary.main,
              },
            }}
          >
            <Typography textAlign="center" sx={{ textTransform: 'uppercase' }}>
              Home
            </Typography>
          </Link>

          <Link
            component={NavLink}
            to="/tweets"
            underline="none"
            color="inherit"
            sx={{
              '&.active': {
                color: theme.palette.secondary.main,
              },
            }}
          >
            <Typography textAlign="center" sx={{ textTransform: 'uppercase' }}>
              Tweets
            </Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
