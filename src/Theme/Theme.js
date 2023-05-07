import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#471CA9',
    },
    secondary: {
      main: '#5CD3A8',
    },
    text: {
      primary: '#ebd8ff',
      secondary: '#373737',
    },
    background: {
      default: '#ebd8ff',
      paper: 'linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)',
    },
  },
  typography: {
    fontFamily: 'Montserrat, Sans-Serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Montserrat';
        }
      `,
    },
  },
});

// palette: {
//     primary: {
//       light: '#757ce8',
//       main: 'linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)',
//       dark: '#002884',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#ff7961',
//       main: '#f44336',
//       dark: '#ba000d',
//       contrastText: '#000',
//     },
//   },
