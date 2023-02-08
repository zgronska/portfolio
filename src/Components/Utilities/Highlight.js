import styled from '@emotion/styled'
import { alpha } from '@mui/material/styles'

export const Highlight = styled.span(({ theme, color }) => ({
  background: `linear-gradient(-100deg, ${alpha(theme.palette[color].dark, 0.2)}, ${alpha(
    theme.palette[color].dark,
    0.6
  )} 95%, ${alpha(theme.palette[color].dark, 0.1)})`,

  borderRadius: '2em 0 2em 0',
}))
