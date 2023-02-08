import React from 'react'
import { Section } from './Utilities/Section'
import { Typography, Stack } from '@mui/material'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Projects = () => {
  return (
    <Section>
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <Typography variant="h3" color="secondary">
          Stuff I made
        </Typography>
      </AnimationOnScroll>
    </Section>
  )
}

export default Projects
