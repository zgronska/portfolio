import { Grid, Typography, IconButton, Slide } from '@mui/material'
import { TransitionGroup } from 'react-transition-group'
import HeaderBg from '../Assets/bg-1.jpg'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'
import 'animate.css'
import React, { useState, useEffect } from 'react'
import useTimeout from 'useTimeout'

const Hero = () => {
  //Smooth scrolling on CTA
  const handleClickScroll = () => {
    const main = document.querySelector('main')
    if (main) {
      main.scrollIntoView({ behavior: 'smooth' })
    }
  }

  //Button animation stop
  function ScrollBtn() {
    const [hovered, setHovered] = useState(false)
    const toggleHover = () => setHovered(!hovered)
    return (
      <IconButton
        className={!hovered && 'animate__animated animate__bounce animate__infinite'}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        onClick={handleClickScroll}
        variant="outlined"
        color="secondary"
      >
        <KeyboardDoubleArrowDownIcon />
      </IconButton>
    )
  }

  //Slide animation
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log('This will be called after 2 seconds')
    }, 2000)

    return () => clearTimeout(timeout)
  }, [])

  function TextSlide() {
    const [hasTimeElapsed, setHasTimeElapsed] = React.useState(false)

    const content = (
      <TransitionGroup>
        <Slide direction="right" timeout={500}>
          <Typography
            variant="h1"
            sx={{
              textShadow: `${textShadow}`,
            }}
          >
            {title}
          </Typography>
        </Slide>
        <Slide direction="right" timeout={1000}>
          <Typography
            variant="h2"
            color="secondary"
            sx={{
              textShadow: `${textShadow}`,
            }}
          >
            {subtitle}
          </Typography>
        </Slide>
      </TransitionGroup>
    )

    useTimeout(() => {
      setHasTimeElapsed(true)
    }, 1000)
    return (
      <Grid
        item
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
        sx={{
          flex: 1,
        }}
      >
        {hasTimeElapsed && content}
      </Grid>
    )
  }

  //Content and styling
  const title = "Hi, I'm Zuza"
  const subtitle = 'Front-End Developer'

  const textShadow = '.08em .08em 0 #3E60B8'

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      direction="column"
      textAlign="center"
      sx={{
        height: '100vh',
        background: `linear-gradient(180deg, rgba(23, 2, 80, .1) 0%, rgba(23, 2, 80, .2) 50%, rgba(23, 2, 80, 1) 100%) scroll, url(${HeaderBg}) no-repeat fixed center`,
        backgroundSize: 'cover',
        p: 6,
      }}
      component={'header'}
      className="hero-section"
    >
      <TextSlide />

      <Grid item>
        <ScrollBtn />
      </Grid>
    </Grid>
  )
}

export default Hero
