import React from 'react'
import Section from './Utilities/Section'
import HeaderBg from '../Assets/bg-2.jpg'
import {
  Stack,
  Alert,
  Container,
  Typography,
  Badge,
  Backdrop,
  Collapse,
  IconButton,
} from '@mui/material'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import TechItem from './TechItem'
import { stackdata } from './StackData'
import CloseIcon from '@mui/icons-material/Close'

const Tech = () => {
  //Info badge
  const [open, setOpen] = React.useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  const handleToggle = () => {
    setOpen(!open)
  }

  //Mapping tech data
  const stack = stackdata.map(item => {
    return <TechItem key={item.name} name={item.name} icon={item.icon} />
  })

  return (
    <Section
      title="tech"
      sx={{
        background: `linear-gradient(180deg, rgba(23, 2, 80, 1) 0%, rgba(23, 2, 80, .2) 50%, rgba(23, 2, 80, 1) 100%), url(${HeaderBg}) no-repeat center`,
        backgroundSize: 'cover',
      }}
    >
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <Badge badgeContent={'i'} color="info" onClick={handleToggle} sx={{ cursor: 'pointer' }}>
          <Typography variant="h3" color="secondary" gutterBottom>
            Tech I use
          </Typography>
        </Badge>
      </AnimationOnScroll>
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

      <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={open}>
        <Collapse in={open}>
          <Alert
            severity="info"
            sx={{ mb: 2 }}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  handleClose()
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            Your company uses a different stack? Worry not! I love to learn.
          </Alert>
        </Collapse>
      </Backdrop>
    </Section>
  )
}

export default Tech
