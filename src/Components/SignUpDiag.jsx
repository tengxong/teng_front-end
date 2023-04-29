import React, { useState} from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField } from '@mui/material'
import axios from 'axios'

export default function SignUpDiag(props) {
    const [signUpData, setSignUpdata] = useState({})


    const handleOpenSignin = () => {
        // console.log('dsadsa')
        props.setopenSigninDiag(true)
        props.setopenSignUpDiag(false)
    }
    const handleSignUp = () => {
        // if (signUpData.username === signUpData.username) {
            //if (signUpData.password === signUpData.con_password) {
                axios({
                    url: window.$api +'/register',
                    method: 'post',
                    data: signUpData
                }).then(res => {
                    console.log(res.data)
                    setSignUpdata
                    setopenSigninDiag(false)
                })
            // } else {
            //     alert('password are not matched')
            // }
        } 
        // else {
        //     alert('please full 404')
        // }
    





    const handleChange = (e) => {
        setSignUpdata({ ...signUpData, [e.target.name]: e.target.value })

    }


    return (
        <Dialog onClose={props.handleClose} open={props.open} maxWidth='sm' fullWidth>
            <DialogTitle>sign up</DialogTitle>
            <DialogContent>
                <Stack direction={'column'} spacing={2} padding={2}>
                    <TextField label='username' name='username' value={signUpData.username || ""} onChange={handleChange} />
                    <TextField label='firstname' name='firstname' value={signUpData.firstname || ""} onChange={handleChange} />
                    <TextField label='lastname' name='lastname' value={signUpData.lastname || ""} onChange={handleChange} />
                    <TextField label='email' name='email' value={signUpData.email || ""} onChange={handleChange} />
                    <TextField type='password' name='password' label='password' value={signUpData.password || ""} onChange={handleChange} />
                    <TextField labal='confirm password' name='con_password' value={signUpData.con_password || ""} onChange={handleChange} />
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button color='success' onClick={handleOpenSignin}>sign in</Button>
                <Button color='error' onClick={handleSignUp}>sign up</Button>
            </DialogActions>
        </Dialog>
    )
}
