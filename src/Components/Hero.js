import { Grid, Typography, Button } from '@mui/material'
import HeaderBg from '../Assets/bg-1.jpg'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'

const Hero = () => {
  //Smooth scrolling on CTA
  const handleClickScroll = () => {
    const main = document.querySelector('main')
    if (main) {
      main.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const title = "Hi, I'm Zuza"
  const subtitle = 'Front-End Developer'
  const btnText = 'See my projects'

  const textShadow = '.08em .08em 0 #3E60B8'

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      direction="column"
      sx={{
        height: '100vh',
        background: `linear-gradient(180deg, rgba(23, 2, 80, .1) 0%, rgba(23, 2, 80, .2) 50%, rgba(23, 2, 80, 1) 100%) scroll, url(${HeaderBg}) no-repeat fixed center`,
        backgroundSize: 'cover',
      }}
      component={'header'}
      className="hero-section"
    >
      <Grid item>
        <Typography
          variant="h1"
          sx={{
            textShadow: `${textShadow}`,
          }}
        >
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant="h2"
          color="secondary"
          sx={{
            textShadow: `${textShadow}`,
          }}
        >
          {subtitle}
        </Typography>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<KeyboardDoubleArrowDownIcon />}
          onClick={handleClickScroll}
        >
          {btnText}
        </Button>
      </Grid>
    </Grid>
  )
}

export default Hero
