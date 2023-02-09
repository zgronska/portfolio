import React from 'react'
import Section from './Utilities/Section'
import HeaderBg from '../Assets/bg-2.jpg'
import { Typography, Stack, Alert, Container } from '@mui/material'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import TechItem from './TechItem'
import { stackdata } from './StackData'

const Tech = () => {
  const stack = stackdata.map(item => {
    return <TechItem key={item.name} name={item.name} icon={item.icon} />
  })

  return (
    <Section
      title="tech"
      heading="Tech I use"
      sx={{
        background: `linear-gradient(180deg, rgba(23, 2, 80, 1) 0%, rgba(23, 2, 80, .2) 50%, rgba(23, 2, 80, 1) 100%), url(${HeaderBg}) no-repeat center`,
        backgroundSize: 'cover',
      }}
    >
      <Container sx={{ py: 8 }} maxWidth="md">
        <Stack
          m="auto"
          direction="row"
          columnGap={{ xs: 2, sm: 4, md: 6 }}
          rowGap={{ xs: 2, sm: 4, md: 6 }}
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
        >
          {stack}
        </Stack>
      </Container>
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <Alert severity="info" sx={{ marginBlock: '2rem' }}>
          Your company uses a different stack? Worry not! I love to learn.
        </Alert>
      </AnimationOnScroll>
    </Section>
  )
}

export default Tech
