import { Box, Typography } from '@mui/material';
import { theme } from '../../Theme/Theme';

export const Home = () => {
  return (
    <Box
      component="main"
      sx={{
        width: '700px',
        height: '300px',
        padding: '28px 36px',
        margin: '50px auto 0',
        position: 'relative',
        boxShadow: '-2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23)',
        borderRadius: '20px',
        background: `${theme.palette.background.paper}`,
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h3" component="h1">
        React test application
      </Typography>
      <Typography variant="h4" component="p" sx={{ mt: '40px' }}>
        {'[React.JS, React Tool Kit, RTK Query, Redux, Routers, Persist, Material UI]'}
      </Typography>
    </Box>
  );
};
