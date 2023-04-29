import React, { useContext } from 'react'
import { Button, Box, Container, Menu, IconButton, MenuItem, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import Profile from '../router/profile';
import { UserContext } from '../router/Index';
const textStyle = {
    fontSize: 17,
    cursor: 'pointer'
}
export default function Navbar(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const {isLoggedIn,userInfo} = useContext(UserContext)

    const handleLogin = () => {
        props.setopenSigninDiag(true)
    }

    const handleLogup = () => {
        props.setopenSignUpDiag(true)
    }

    const navigate = useNavigate()

    const handleNavigate = (path) => {
        navigate(path)
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        < Container maxWidth='xl'>
            <Box display='flex' justifyContent={'space-between'} alignItems={'center'}>
                <Box flex={1} display='flex'>
                    <h1 style={{ cursor: 'pointer' }} onClick={() => handleNavigate("/")}>Econox</h1>
                </Box>

                <Box flex={1} display={{ md: 'flex', xs: 'none' }} justifyContent={'space-between'}>
                    <p style={textStyle} onClick={() => handleNavigate("/project")}>Project</p>
                    <p style={textStyle} onClick={() => handleNavigate("/story")}>Story</p>
                    <p style={textStyle} onClick={() => handleNavigate("/about-us")}>About Us</p>
                    <p style={textStyle} onClick={() => handleNavigate("/contact-us")}>Contact Us</p>
                </Box>


                <Box flex={1} display={{ md: 'flex', xs: 'none' }} justifyContent={'flex-end'}>
                    {isLoggedIn ?
                        <IconButton onClick={() => handleNavigate('/profile')}>
                            <Avatar src={window.$api + '/images/'+ userInfo.img} alt=''/>

                        </IconButton>
                        :
                        <>
                            <Button variant="outlined" color='success' sx={{ marginRight: 2 }} onClick={handleLogin}>Sing in</Button>
                            <Button variant="outlined" color='error' onClick={handleLogup}>Sing up</Button>
                        </>
                    }

                </Box>

                <Box sx={{ display: { md: 'none', xs: 'flex' } }}>
                    <IconButton onClick={handleClick} >
                        <MenuIcon fontSize='large' />
                    </IconButton>
                </Box>

                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    {isLoggedIn &&
                        <IconButton onClick={() => handleNavigate('/profile')}>
                            <Avatar src={window.$api + '/images/'+ userInfo.img} />
                        </IconButton>
                    }
                    <MenuItem onClose={handleClose} onClick={() => handleNavigate("/project")}>project</MenuItem>
                    <MenuItem onClose={handleClose} onClick={() => handleNavigate("/story")}>Story</MenuItem>
                    <MenuItem onClose={handleClose} onClick={() => handleNavigate("/about-us")}>AboutUs</MenuItem>
                    <MenuItem onClose={handleClose} onClick={() => handleNavigate("/contact-us")}>ContactUs</MenuItem>
                    {!isLoggedIn &&
                    
                            <MenuItem >
                                <Button variant="outlined" color='success' onClick={handleLogin} fullWidth>Sign in</Button>
                            </MenuItem>
                        
                    }
                    {!isLoggedIn && 
                    <MenuItem>
                        <Button variant="outlined" color='error' onClick={handleLogup} fullWidth>sign up</Button>
                    </MenuItem>
                    }
                </Menu>


            </Box>
        </Container>
    )
}
