import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField } from '@mui/material'


export default function SigninDialog(props) {

    const handleOpenSignUp =() =>{
        // console.log('dsadsa')
        props.setopenSigninDiag(false)
        props.setopenSignUpDiag(true)
      }
    return (
        <Dialog onClose={props.handleClose} open={props.open} maxWidth='sm' fullWidth>
            <DialogTitle>sign In</DialogTitle>
            <DialogContent>
                <Stack direction={'column'} spacing={2} padding={2}>
                    <TextField label='Email' />
                    <TextField type='password' label='password' />
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button color='success'>sign in</Button>
                <Button color='error' onClick={handleOpenSignUp} >sign up</Button>
            </DialogActions>
        </Dialog>
    )
}
