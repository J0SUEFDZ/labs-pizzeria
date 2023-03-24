import { Alert, AlertTitle, Button, Snackbar } from '@mui/material'
import { useState, type ReactElement } from 'react'

interface ISnackbarHandlerProps {
  message: string
  severity: string
  title: string
}

function SnackbarHandler({ message, title, ...props }: ISnackbarHandlerProps): ReactElement {
  const [open, setOpen] = useState(false)

  const handleClick = (): void => {
    // Simulate an error
    setOpen(true)
  }
  const handleClose = (): void => {
    setOpen(false)
  }

  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <Button
        variant='contained'
        color='primary'
        onClick={handleClick}
        className='rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700'
      >
        Trigger Error
      </Button>
      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        ContentProps={{
          classes: {
            root: 'bg-red-500',
            message: 'text-white',
          },
        }}
      >
        <Alert
          sx={{ width: '100%' }}
          action={
            <Button color='inherit' size='small'>
              UNDO
            </Button>
          }
        >
          <AlertTitle>{title}</AlertTitle>
          {message}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default SnackbarHandler
