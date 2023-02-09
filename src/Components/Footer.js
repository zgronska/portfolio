import { Paper, Container, Typography, Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp'
import React from 'react'

const Footer = () => {
  return (
    <Paper
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid xs={12} md={6}>
            <Typography variant="body1">
              Designed and coded with <FavoriteBorderSharpIcon fontSize="1em" color="secondary" />{' '}
              by Zuza Grońska{' '}
            </Typography>
          </Grid>
          <Grid xs={12} md={6} display="flex" justifyContent="end">
            <Box>socials go here</Box>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  )
}

export default Footer
