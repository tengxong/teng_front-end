import { Box, Button, Container } from '@mui/material'
import React from 'react'


export default function Home() {
  return (
    <Container maxWidth='xl' sx={{display:{md:'flex',xs:'block'}, height:'100vh', marginTop:20}}>
        <Box flex={1}>
           <h1 style={{fontSize:50}}>Welcome To Econox Laos</h1>
           <p style={{fontSize:20}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo eligendi repudiandae qui! Itaque, quis perspiciatis illo culpa deleniti, ea nesciunt blanditiis ut aliquam dolor quia numquam vel cumque corrupti consectetur!</p>
           <Button variant='contained'>Contact Us </Button>
        </Box>
        <Box flex={1}>
            <img src='./src/Image/World-Environment-Day-PNG-Free-Download.png' width='100%'/>
        </Box>
    </Container>
  )
}
