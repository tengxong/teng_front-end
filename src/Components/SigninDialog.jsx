import React, { useState ,useContext } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField } from '@mui/material';
import axios from 'axios';
import {UserContext} from '../router'
export default function SigninDialog(props) {
    const [signInData, setSignInData] = useState({})
    const {setuserInfo} = useContext(UserContext)


    const handleOpenSignUp = () => {
        // console.log('dsadsa')
        props.setopenSigninDiag(false)
        props.setopenSignUpDiag(true)
        
    }
    const handleSignIn = () => {
        // if (signUpData.username === signUpData.username) {
        //if (signUpData.password === signUpData.con_password) {
        axios({
            url: window.$api + '/Login',
            method: 'post',
            withCredentials: true,
            data: signInData
        }).then(res => {
            
            switch (res.data.status) {
                case 200:
                    props.setopenSigninDiag(false)
                    props.setisLoggedIn(true)
                    setuserInfo(res.data.data)
                    break;
                case 409:
                    alert(res.data.status)
                    break;
                case 404:
                    alert(res.data.status)
                    break;
                default:
                    alert('Login failed')
                    break;

            }

        }

        )
    }
    // console.log(signInData);

    const handleChange = (e) => {
        setSignInData({ ...signInData, [e.target.name]: e.target.value })

    }

    return (
        <Dialog onClose={props.handleClose} open={props.open} maxWidth='sm' fullWidth>
            <DialogTitle>sign In</DialogTitle>
            <DialogContent>
                <Stack direction={'column'} spacing={2} padding={2}>
                    <TextField label='email' name='email' onChange={handleChange} value={signInData.email || ""} />
                    <TextField type='password' label='password' name='password' onChange={handleChange} value={signInData.password || ""} />
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button color='success' onClick={handleSignIn}>sign in</Button>
                <Button color='error' onClick={handleOpenSignUp} >sign up</Button>
            </DialogActions>
        </Dialog>
    )
}
