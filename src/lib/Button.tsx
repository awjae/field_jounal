import React from 'react'
import { styled } from '@mui/material/styles'
import Button, { ButtonProps } from '@mui/material/Button'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StyledAddButton = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: '50%',
  width: 45,
  minWidth: 'initial',
  height: 45,
  padding: 0,
  position: 'absolute',
  bottom: 20,
  left: '50%',
  transform: 'translateX(-50%)',
}))

export function AddButton({
  children,
  handleClick,
}: {
  children: React.ReactNode
  handleClick: React.MouseEventHandler
}) {
  return (
    <StyledAddButton variant="contained" onClick={handleClick}>
      {children}
    </StyledAddButton>
  )
}
