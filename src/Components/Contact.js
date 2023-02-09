import React, { useState } from 'react'
import Section from './Utilities/Section'
import { Grid, TextField, Button, Snackbar, Alert } from '@mui/material'
import HeaderBg from '../Assets/bg-3.jpg'

const Contact = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [content, setContent] = useState('')
  const [open, setOpen] = useState(false)
  const [hasErrors, setHasErrors] = useState(false)

  const clearForm = () => {
    setFirstName('')
    setLastName('')
    setEmail('')
    setContent('')
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const handleSubmit = e => {
    const formdata = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      content: content,
    }
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formdata }),
    })
      .then(() => clearForm())
      .catch(error => {
        console.log(error)
        setHasErrors(true)
      })
      .finally(() => setOpen(true))

    e.preventDefault()
  }

  const handleClose = reason => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <Section
      title="contact"
      heading="Get in touch"
      sx={{
        background: `linear-gradient(180deg, rgba(23, 2, 80, 1) 0%, rgba(23, 2, 80, .2) 50%, rgba(23, 2, 80, 1) 100%), url(${HeaderBg}) no-repeat center`,
        backgroundSize: 'cover',
      }}
    >
      <Grid container spacing={2} maxWidth="sm" component="form" onSubmit={handleSubmit}>
        <Grid item xs={6}>
          <TextField
            name="firstname"
            variant="filled"
            color="secondary"
            required
            type="text"
            onChange={e => setFirstName(e.target.value)}
            value={firstName}
            sx={{ width: '100%' }}
            label="First name"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="lastname"
            variant="filled"
            color="secondary"
            required
            type="text"
            onChange={e => setLastName(e.target.value)}
            value={lastName}
            sx={{ width: '100%' }}
            label="Last name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="email"
            variant="filled"
            color="secondary"
            required
            type="email"
            onChange={e => setEmail(e.target.value)}
            value={email}
            sx={{ width: '100%' }}
            label="Email"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            name="content"
            variant="filled"
            color="secondary"
            required
            onChange={e => setContent(e.target.value)}
            value={content}
            sx={{ width: '100%' }}
            multiline
            rows={4}
            label="Message"
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" sx={{ width: '100%' }} variant="contained" color="secondary">
            Send Message
          </Button>

          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity={hasErrors ? 'error' : 'success'}
              sx={{ width: '100%' }}
            >
              {hasErrors ? 'Error detected!' : 'Thanks for your message!'}
            </Alert>
          </Snackbar>
        </Grid>
      </Grid>
    </Section>
  )
}

export default Contact
