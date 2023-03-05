import React from 'react'
import { Card, Button, CardContent, CardMedia, Typography } from '@mui/material'
import Img from '../Image/hqdefault.jpg'

export default function projectCard() {
  return (
    <Card sx={{maxWidth:300,mt:5}}>
      <CardMedia 
      component='img'
      height='140'
      Image={Img}
      />
      <CardContent>
        <Typography variant='h5' gutterBottom>
          bottle Recycle
        </Typography>
        <Typography variant='body2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ut modi vel hic officiis quisquam, officia sit quae mollitia debitis libero praesentium, aperiam eos illum.
        </Typography>
      </CardContent>
        <Button>Into</Button>
    </Card>
  )
}
