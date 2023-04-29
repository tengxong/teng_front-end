import React from 'react'
import { Card, Button, CardContent, CardMedia, Typography } from '@mui/material'

export default function projectCard(props) {
  return (
    <Card sx={{maxWidth:300,mt:5}}>
      <CardMedia 
      component='img'
      height='140'
      image={window.$api + '/images/' + props.img}
      />
      <CardContent>
        <Typography variant='h5' gutterBottom>{props.title}
        </Typography>
        <Typography variant='body2'>
         {props.description.substring(0,220)} {props.description.length>220 ? '...' :null}
        </Typography>
      </CardContent>
        <Button>Into</Button>
    </Card>
  )
}
