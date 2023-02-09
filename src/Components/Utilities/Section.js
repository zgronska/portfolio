import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const CustomSection = styled(Box)({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  margin: 'auto',
})

export default function Section(props) {
  return (
    <CustomSection
      key={props.title}
      component="section"
      className={`${props.title}-section`}
      sx={props.sx}
      p={{ xs: 2, sm: 4, md: 6 }}
    >
      {props.heading ? (
        <AnimationOnScroll animateIn="animate__fadeInUp">
          <Typography variant="h3" color="secondary" gutterBottom>
            {props.heading}
          </Typography>
        </AnimationOnScroll>
      ) : null}

      {props.children}
    </CustomSection>
  )
}
