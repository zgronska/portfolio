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
    mode: 'dark',
    primary: {
      main: '#3E60B8',
    },
    secondary: {
      main: '#f7c31a',
    },
    background: {
      default: '#170250',
      paper: '#1E0369',
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
