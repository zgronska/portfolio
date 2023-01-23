import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import '@fontsource/viga'

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#3E60B8',
      contrastText: '#F7F7F7',
    },
    secondary: {
      main: '#F0B64F',
      contrastText: '#F7F7F7',
    },
    text: {
      primary: '#F7F7F7',
    },
    background: {
      default: '#292D49',
      paper: '#303556',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#c68739',
    },
    info: {
      main: '#252d41',
    },
    success: {
      main: '#489771',
    },
  },
  typography: {
    h1: {
      fontFamily: "'Viga', sans-serif",
      fontSize: '8.5rem',
    },
    h2: {
      fontSize: '4rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    h4: {
      fontSize: '1.15rem',
    },
  },
})

export default function ThemeProvider({ children }) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
