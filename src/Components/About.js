import React from 'react'
import Section from './Utilities/Section.js'
import { Typography, Box } from '@mui/material'
import Pic from '../Assets/selfie.svg'
import Image from 'mui-image'
import 'animate.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { Highlight } from './Utilities/Highlight.js'

const About = () => {
  return (
    <Section
      title="about"
      sx={{
        gap: 8,
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <Image
        src={Pic}
        alt="An avatar of myself looking dapper"
        duration={500}
        width={300}
        sx={{
          bgcolor: 'primary.main',
          borderRadius: '50%',
          border: 5,
          borderColor: 'secondary.main',
        }}
      />
      <Box maxWidth="sm" textAlign={{ xs: 'center', md: 'left' }}>
        <AnimationOnScroll animateIn="animate__fadeInUp">
          <Typography variant="h3" color="secondary" gutterBottom>
            Nice to meet you!
          </Typography>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInUp">
          <Typography variant="body1" paragraph>
            I'm a passionate, completely self-taught front-end developer based in <Highlight color="secondary">Haarlem, the Netherlands</Highlight>. I spent my 20s working in marketing (specifically in the music & video games industries), but in the end I found myself pursuing my knack for coding. I currently work as a part of a small team at an e-commerce development agency.
          </Typography>
          <Typography variant="body1" paragraph>
            As a neurodivergent woman from a disadvantaged background, I'm especially passionate
            about breaking down barriers and{' '}
            <Highlight color="secondary">making a difference in the tech industry</Highlight>. I've
            got a keen eye for design and a love for experimenting with colours, which is why I find
            <Highlight color="secondary"> UX/UI development</Highlight> to
            be one of my favourite parts of the job. So let's build something beautiful together and
            make the internet a better place <sup>(or at least make it look pretty)</sup>.
          </Typography>
        </AnimationOnScroll>
      </Box>
    </Section>
  )
}

export default About
