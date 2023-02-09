import { Paper, Container, Typography, Box, IconButton } from '@mui/material'
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'

const Footer = () => {
  const socials = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/zuza-gro%C5%84ska-2b2601116/',
      icon: <LinkedInIcon />,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/zgronska/',
      icon: <GitHubIcon />,
    },
    {
      name: 'Email',
      url: 'mailto:zgronska@gmail.com',
      icon: <EmailIcon />,
    },
  ]

  const buttons = socials.map(button => {
    return (
      <IconButton aria-label={button.name} href={button.url} target="_blank" rel="noreferrer">
        {button.icon}
      </IconButton>
    )
  })

  return (
    <Paper
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="body1">
          Designed and coded with <FavoriteBorderSharpIcon fontSize="1em" color="secondary" /> by
          Zuza Grońska
        </Typography>
        <Box>{buttons}</Box>
      </Container>
    </Paper>
  )
}

export default Footer
