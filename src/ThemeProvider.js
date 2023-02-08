import CssBaseline from '@mui/material/CssBaseline'
import {
  responsiveFontSizes,
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles'
import '@fontsource/viga'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

let theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#3E60B8',
    },
    secondary: {
      main: '#f7c31a',
    },
    text: {
      primary: '#F7F7F7',
    },
    background: {
      default: '#170250',
      paper: '#140C29',
    },
  },
  typography: {
    h1: {
      fontFamily: "'Viga', sans-serif",
      fontSize: '8.5rem',
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
      textTransform: 'uppercase',
    },
  },
})

theme = responsiveFontSizes(theme)

export default function ThemeProvider({ children }) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
