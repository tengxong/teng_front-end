import React from 'react'
import Card from '../Components/Card'
import { Box, Container, Typography } from '@mui/material'


export default function Project() {
  const data = [1, 2, 3, 4]
  return (
    <Container maxWidth='xl' sx={{ pt: 10 }}>
      <Typography align='center' variant='h4'>Our Project</Typography>


      <Box sx={{ mt: 5 }} display='flex' justifyContent='space-between' flexWrap='wrap'>
        {data.map(rows =>
          <Box mt={5} key={rows}>
            <Card />
          </Box>
        )}

      </Box>
    </Container>
  )
}
