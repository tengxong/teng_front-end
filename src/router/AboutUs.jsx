import React from 'react'
import { Box, Container} from '@mui/material'

export default function AboutUs() {
  return (
    <Container maxWidth='xl' sx={{display:{md:'flex',xs:'block'},alignItems:'center',height:'100vh'}}>
    <Box flex={1} width={{md:'50%',xs:'100%'}} >
           <h1 style={{fontSize:50,paddingTop:50,marginTop:0}}>About Us</h1>
           <p style={{fontSize:20}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aut accusamus porro animi veniam, optio error architecto repellendus possimus deserunt reiciendis officia quibusdam necessitatibus quasi dolorem. Consectetur dicta iusto tempora asperiores? Qui nostrum minima quia fugit adipisci, sed temporibus rerum quo facere velit nam fugiat a ex tempora, laudantium possimus.</p>
        </Box>
        <Box flex={1} width={'50%'}>
            <img src='./src/Image/slider1-banner10.png' width='100%'/>
        </Box>
        </Container>
  )
}
