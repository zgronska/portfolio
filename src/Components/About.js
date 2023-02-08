import React from 'react'
import { Section } from './Utilities/Section.js'
import { Typography, Box } from '@mui/material'
import Pic from '../Assets/selfie.svg'
import Image from 'mui-image'
import 'animate.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { Highlight } from './Utilities/Highlight.js'

const About = () => {
  return (
    <Section
      component="section"
      className="about-section"
      maxWidth="lg"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <Image
        src={Pic}
        alt="An avatar of myself looking dapper"
        duration={500}
        height="fit-content"
        sx={{
          bgcolor: 'primary.main',
          borderRadius: '50%',
          maxWidth: 300,
          border: 5,
          borderColor: 'secondary.main',
          flexGrow: 1,
        }}
      />
      <Box>
        <AnimationOnScroll animateIn="animate__fadeInUp">
          <Typography variant="h3" color="secondary" gutterBottom>
            Nice to meet you!
          </Typography>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInUp">
          <Typography variant="body1" paragraph>
            I'm an aspiring dev with roots in Poland, based in{' '}
            <Highlight color="secondary">the Netherlands</Highlight>. My background is in marketing,
            specifically in the music and video game industries, but I've decided to swap Instagram
            campaigns for cozy VSCode sessions and take a wild leap into{' '}
            <Highlight color="secondary">Front-End Development</Highlight>. I'm currently on a
            self-study mission to to reach the pinnacle of dev greatness, or at least be the best in
            the Netherlands... no big deal! I'm on the lookout for{' '}
            <Highlight color="secondary">junior roles or traineeships</Highlight> where I can put my
            skills to the test and take over the world, one app at a time.
            <br />
            <br />
            As a neurodivergent woman from a disadvantaged background, I'm especially passionate
            about breaking down barriers and{' '}
            <Highlight color="secondary">making a difference in the tech industry</Highlight>. I've
            got a keen eye for design and a love for experimenting with colours, which is why I find
            <Highlight color="secondary"> styling UI (especially responsive design)</Highlight> to
            be one of my favourite parts of the job. So let's build something beautiful together and
            make the internet a better place (or at least make it look pretty).
          </Typography>
        </AnimationOnScroll>
      </Box>
    </Section>
  )
}

export default About
