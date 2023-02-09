import { Grid, Typography, IconButton } from '@mui/material'
import handleClickScroll from './Utilities/HandleClickScroll'
import HeaderBg from '../Assets/bg-1.jpg'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'
import 'animate.css'
import React, { useState } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Hero = () => {
  const textShadow = '.08em .08em 0 #3E60B8'

  //Button animation stop
  function ScrollBtn() {
    const [hovered, setHovered] = useState(false)
    const toggleHover = () => setHovered(!hovered)
    return (
      <IconButton
        className={!hovered && 'animate__animated animate__bounce animate__infinite'}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        onClick={() => handleClickScroll(`main`)}
        variant="outlined"
        color="secondary"
      >
        <KeyboardDoubleArrowDownIcon />
      </IconButton>
    )
  }

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
        <AnimationOnScroll animateIn="animate__lightSpeedInLeft" animateOnce="true">
          <Typography
            variant="h1"
            sx={{
              textShadow: `${textShadow}`,
            }}
          >
            Hi, I'm Zuza
          </Typography>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__lightSpeedInLeft" animateOnce="true" delay={300}>
          <Typography
            variant="h2"
            color="secondary"
            sx={{
              textShadow: `${textShadow}`,
            }}
          >
            Front-End Developer
          </Typography>
        </AnimationOnScroll>
      </Grid>

      <Grid item>
        <ScrollBtn />
      </Grid>
    </Grid>
  )
}

export default Hero
