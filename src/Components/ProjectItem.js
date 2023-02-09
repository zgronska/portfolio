import React from 'react'
import { Icon } from './Utilities/Icon'
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
  Grid,
} from '@mui/material'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { stackdata } from './StackData'

const ProjectItem = props => {
  const labels = props.tags.map(tag => {
    const stack = stackdata.find(stack => stack.name === tag)
    return stack ? (
      <Chip
        key={tag}
        sx={{
          paddingInline: '0.5em',
        }}
        size="small"
        variant="outlined"
        label={tag}
        color="secondary"
        icon={<Icon nameIcon={stack.icon} propsIcon={{ size: '1em' }} />}
      />
    ) : null
  })

  return (
    <AnimationOnScroll animateIn="animate__fadeInUp" style={{ display: 'flex' }}>
      <Grid item xs={12} sm={6} md={4} sx={{ maxWidth: 300, display: 'flex' }}>
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <CardMedia
            sx={{ height: 200 }}
            image={require(`../Assets/${props.image}`)}
            title={props.title}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5">
              {props.title}
            </Typography>
            <Typography variant="body2" gutterBottom color="text.primary">
              {props.description}
            </Typography>
            <Stack
              direction="row"
              sx={{ flexWrap: 'wrap', marginTop: '1em' }}
              columnGap={1}
              rowGap={1}
            >
              {labels}
            </Stack>
          </CardContent>
          <CardActions>
            <Button size="small" href={props.code} target="_blank">
              View code
            </Button>
            <Button size="small" href={props.live} target="_blank">
              Live preview
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </AnimationOnScroll>
  )
}

export default ProjectItem
