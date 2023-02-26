import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField } from '@mui/material'

export default function SignUpDiag(props) {
    const handleOpenSignin = () => {
        // console.log('dsadsa')
        props.setopenSigninDiag(true)
        props.setopenSignUpDiag(false)
    }
    return (
        <Dialog onClose={props.handleClose} open={props.open} maxWidth='sm' fullWidth>
            <DialogTitle>sign up</DialogTitle>
            <DialogContent>
                <Stack direction={'column'} spacing={2} padding={2}>
                    <TextField label='username' />
                    <TextField label='lastname' />
                    <TextField label='Email' />
                    <TextField type='password' label='password' />
                    <TextField labal='confirm' />
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button color='success' onClick={handleOpenSignin}>sign in</Button>
                <Button color='error'>sign up</Button>
            </DialogActions>
        </Dialog>
    )
}
