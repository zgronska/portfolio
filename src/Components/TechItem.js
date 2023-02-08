import React from 'react'
import { Icon } from './Icon'
import { Typography, Stack } from '@mui/material'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const TechItem = props => {
  return (
    <AnimationOnScroll animateIn="animate__fadeInUp">
      <Stack
        textAlign="center"
        direction="column"
        alignItems="center"
        bgcolor="primary.main"
        spacing={1}
        p={1}
        borderRadius={3}
        minWidth="5.7rem"
      >
        <Icon nameIcon={props.icon} propsIcon={{ size: '50' }} />
        <Typography variant="caption">{props.name}</Typography>
      </Stack>
    </AnimationOnScroll>
  )
}

export default TechItem
