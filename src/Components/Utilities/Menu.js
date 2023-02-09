import React from 'react'
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import TerminalIcon from '@mui/icons-material/Terminal'
import ColorLensIcon from '@mui/icons-material/ColorLens'
import EmailIcon from '@mui/icons-material/Email'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import handleClickScroll from './HandleClickScroll'

const actions = [
  { icon: <EmailIcon />, name: 'contact' },
  { icon: <ColorLensIcon />, name: 'projects' },
  { icon: <TerminalIcon />, name: 'tech' },
  { icon: <AccountCircleIcon />, name: 'about' },
]

const MenuButton = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation menu"
      sx={{ position: 'fixed', bottom: 16, right: 16 }}
      icon={<SpeedDialIcon icon={<MenuIcon />} openIcon={<CloseIcon />} />}
    >
      {actions.map(action => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={() => handleClickScroll(`.${action.name}-section`)}
        />
      ))}
    </SpeedDial>
  )
}

export default MenuButton
