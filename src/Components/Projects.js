import React from 'react'
import Section from './Utilities/Section'
import { Container } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { projectdata } from './ProjectData'
import ProjectItem from './ProjectItem'

const Projects = () => {
  const projects = projectdata.map(project => {
    return <ProjectItem key={project.id} {...project} />
  })

  return (
    <Section heading="Stuff I made" title="projects">
      <Container sx={{ py: 8 }}>
        <Grid container columnGap={8} rowGap={4} justifyContent="center">
          {projects}
        </Grid>
      </Container>
    </Section>
  )
}

export default Projects
