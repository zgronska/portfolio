import React from 'react'
import { Section } from './Utilities/Section'
import { Typography, Container } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { projectdata } from './ProjectData'
import ProjectItem from './ProjectItem'

const Projects = () => {
  const projects = projectdata.map(project => {
    return (
      <AnimationOnScroll animateIn="animate__fadeInUp" style={{ display: 'flex' }}>
        <ProjectItem key={project.id} {...project}></ProjectItem>
      </AnimationOnScroll>
    )
  })

  return (
    <Section component="section" className="projects-section">
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <Typography variant="h3" color="secondary" gutterBottom>
          Stuff I made
        </Typography>
      </AnimationOnScroll>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container columnGap={8} rowGap={4} justifyContent="center" alignItems="stretch">
          {projects}
        </Grid>
      </Container>
    </Section>
  )
}

export default Projects
