import React from 'react'
import { Box, Container, TextField, Typography,Stack, Button } from '@mui/material'

export default function ContactUs() {
  return (
    <Container maxWidth='xl' sx={{justifyContent:'center'}}>
      <Typography variant='h4' align='center'>Login</Typography>
      <Box display='flex' flexDirection={{xs:'column',md:'row',height:'100vh'}}justifyContent={'center'} alignItems={'center'}>
        <Box width={'50%'} display='flex' justifyContent={'center'} alignItems={'centers'}>
          <img src='../src/Image/Email-Transparent-PNG.webp' width={'60%'} />
        </Box>
        <Stack width={{md:'40%',xs:'100%'}} spacing={2} justifyContent={'center'} alignItems={'center'}>
          <TextField id="filled-basic" label="Firstname" sx={{width:{md:'70%' , xs:'100%'}}}/>
          <TextField id="filled-basic" label="Lastname"  sx={{width:{md:'70%' , xs:'100%'}}}/>
          <TextField id="filled-basic" label="What's your email" sx={{width:{md:'70%' , xs:'100%'}}}/>
          <TextField id="filled-basic" multiline label="Your Question..." sx={{width:{md:'70%' , xs:'100%'}}} rows={3}/>
        <Button variant='contained' sx={{width:'70%'}}>Seng Message</Button>
        </Stack>
      </Box>
    </Container>
  )
}
