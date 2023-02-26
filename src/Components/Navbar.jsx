import React from 'react'
import { Button, Box, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

const textStyle = {
    fontSize: 17,
    cursor: 'pointer'
}
export default function Navbar(props) {
    const handleLogin =()=>{
        props.setopenSigninDiag (true)
    }
    
    const handleLogup =() =>{
        props.setopenSignUpDiag(true)
    }

    const navigate = useNavigate()

    const handleNavigate = (path) => {
        navigate(path)
    }

    return (
        < Container maxWidth='xl'>
            <Box display='flex' justifyContent={'space-between'} alignItems={'center'}>
                <Box flex={1} display='flex'>
                    <h1 style={{cursor:'pointer'}} onClick={() => handleNavigate("/")}>Econox</h1>
                </Box>

                <Box flex={1} display={{ md: 'flex', xs: 'none' }} justifyContent={'space-between'}>
                    <p style={textStyle} onClick={() => handleNavigate("/project")}>Project</p>
                    <p style={textStyle} onClick={() => handleNavigate("/story")}>Story</p>
                    <p style={textStyle} onClick={() => handleNavigate("/about-us")}>About Us</p>
                    <p style={textStyle} onClick={() => handleNavigate("/contact-us")}>Contact Us</p>
                </Box>


                <Box flex={1} display={{ md: 'flex', xs: 'none' }} justifyContent={'flex-end'}>
                    <Button variant="outlined" color='success' sx={{ marginRight: 2 }} onClick={handleLogin}>Sing in</Button>
                    <Button variant="outlined" color='error' onClick={handleLogup}>Sing up</Button>
                </Box>
                <MenuIcon fontSize='large' sx={{display:{ md: 'none', xs: 'flex' }}}  />
            </Box>
        </Container>
    )
}
