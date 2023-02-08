import React from 'react'
import { Section } from './Utilities/Section'
import HeaderBg from '../Assets/bg-2.jpg'
import { Typography, Stack, Alert } from '@mui/material'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import TechItem from './TechItem'

const stackdata = [
  {
    name: 'HTML',
    icon: 'DiHtml5',
  },
  {
    name: 'CSS',
    icon: 'DiCss3',
  },
  {
    name: 'JavaScript',
    icon: 'DiJavascript',
  },
  {
    name: 'React',
    icon: 'DiReact',
  },
  {
    name: 'Tailwind CSS',
    icon: 'SiTailwindcss',
  },
  {
    name: 'Material UI',
    icon: 'SiMaterialui',
  },
  {
    name: 'Figma',
    icon: 'SiFigma',
  },
  {
    name: 'GitHub',
    icon: 'DiGithubAlt',
  },
  {
    name: 'npm',
    icon: 'DiNpm',
  },
  {
    name: 'VSCode',
    icon: 'DiVisualstudio',
  },

  {
    name: 'Netlify',
    icon: 'SiNetlify',
  },
]

const Tech = () => {
  const stack = stackdata.map(item => {
    return <TechItem key={item.name} name={item.name} icon={item.icon} />
  })

  return (
    <Section
      sx={{
        background: `linear-gradient(180deg, rgba(23, 2, 80, 1) 0%, rgba(23, 2, 80, .2) 50%, rgba(23, 2, 80, 1) 100%), url(${HeaderBg}) no-repeat center`,
        backgroundSize: 'cover',
      }}
    >
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <Typography variant="h3" color="secondary" align="center" gutterBottom>
          Tech I use
        </Typography>
      </AnimationOnScroll>
      <Stack
        m="auto"
        direction="row"
        columnGap={{ xs: 2, sm: 4, md: 6 }}
        rowGap={{ xs: 2, sm: 4, md: 6 }}
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        maxWidth={{ sm: '80%', md: '60% ' }}
      >
        {stack}
      </Stack>
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <Alert severity="info">
          Your company uses a different stack? Worry not! I love to learn.
        </Alert>
      </AnimationOnScroll>
    </Section>
  )
}

export default Tech
